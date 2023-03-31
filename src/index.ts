import * as fs from "fs";
export default function getFiles(dir: string, ext: string): string[] {
  let commandFiles: string[] = [];

  let contents: fs.Dirent[] = fs.readdirSync(dir, {
    withFileTypes: true,
  });

  for (const content of contents) {
    if (content.isDirectory()) {
      commandFiles = [
        ...commandFiles,
        ...getFiles(`${dir}/${content.name}`, ext),
      ];
    } else if (content.name.endsWith(ext)) {
      commandFiles.push(`${dir}/${content.name}`)
    }
  }

  return commandFiles;
}
