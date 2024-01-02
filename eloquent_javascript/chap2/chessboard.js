let board = "";
let size = 8;
let isBlank = true;
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (isBlank)
            board += " ";
        else
            board += "#";
        isBlank = !isBlank;
    }
    board += "\n";
    isBlank = !isBlank;
}
console.log(board);