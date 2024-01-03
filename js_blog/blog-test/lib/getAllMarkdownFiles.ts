import { promises as fs, Dirent} from 'fs';
import path from 'path';

async function getAllMarkdownFiles(dir: string, rootDir: string = dir): Promise<{ slug: string[] }[]> {
  let fileList: { slug: string[] }[] = [];

  const dirents: Dirent[] = await fs.readdir(dir, { withFileTypes: true});

  for (const dirent of dirents) {
    const filePath = path.join(dir, dirent.name);
    const stats = await fs.stat(filePath)

    if (stats.isDirectory()) {
      fileList = fileList.concat(await getAllMarkdownFiles(filePath, rootDir));
    } else if (path.extname(filePath) === '.md') {
      const slug = path.relative(rootDir, filePath).replace(/\.md$/, '').split(path.sep)
      fileList.push({slug})
    }
  }
  return fileList;
}

export default getAllMarkdownFiles;