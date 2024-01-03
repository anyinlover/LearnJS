const roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin",
  "Alice's House-Post Office", "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop", "Marketplace-Farm",
  "Marketplace-Post Office", "Marketplace-Shop",
  "Marketplace-Town Hall", "Shop-Town Hall"
]

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
      if (graph[from] == null) {
          graph[from] = [to];
      } else {
          graph[from].push(to);
      }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
      addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
  constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
  }

  move(destination) {
      if (!roadGraph[this.place].includes(destination)) {
          return this;
      } else {
          let parcels = this.parcels.map(p => {
              if (p.place != this.place) return p;
              return {place: destination, address: p.address};
          }).filter(p => p.place != p.address);
          return new VillageState(destination, parcels);
      }
  }
}

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
          place = randomPick(Object.keys(roadGraph));
      } while (place == address);
      parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
      memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

function findRoute(graph, from, to) {
  let work = [{at: from, route: []}]
  for (let i = 0; i < work.length; i++) {
      let {at, route} = work[i];
      for (let place of graph[at]) {
          if (place == to) return route.concat(place);
          if (!work.some(w => w.at == place)) {
              work.push({at: place, route: route.concat(place)});
          }
      }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
      let parcel = parcels[0];
      if (parcel.place != place) {
          route = findRoute(roadGraph, place, parcel.place);
      } else {
          route = findRoute(roadGraph, place, parcel.address);
      }
  }
  return {direction: route[0], memory: route.slice(1)};
}

function effiOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    for (let parcel of parcels) {
      if (parcel.place == place) {
        route = findRoute(roadGraph, place, parcel.address);
        break
      }
    }
  }
  if (route.length == 0) {
    let parcel = parcels[0];
    route = findRoute(roadGraph, place, parcel.place);
  }
  return {direction: route[0], memory: route.slice(1)};
}

function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
          return turn;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
  }
}

TURNTIME = 100;

function compareRobot(robot1, robot2, memory1, memory2) {
  let turn1 = 0;
  let turn2 = 0;
  let state1, state2;
  for (let i = 0; i < TURNTIME; i++) {
      state1 = VillageState.random();
      state2 = new VillageState(state1.place, []);
      Object.assign(state2.parcels, state1.parcels);
      turn1 += runRobot(state1, robot1, memory1);
      turn2 += runRobot(state2, robot2, memory2); 
  }
  turn1 /= TURNTIME;
  turn2 /= TURNTIME;
  console.log(`The ${turn1 < turn2 ? "first" : "second"} robot is better, ${turn1} : ${turn2}`);
}

compareRobot(randomRobot, routeRobot, [], mailRoute);
compareRobot(routeRobot, goalOrientedRobot, mailRoute, []);
compareRobot(goalOrientedRobot, effiOrientedRobot, [], [])