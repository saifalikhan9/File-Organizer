import fs from "fs-extra";
import path from "path";


export default function organizeFilesByExtension(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    files.forEach((file) => {
      const ext = path.extname(file).slice(1);
      const filePath = path.join(directory, file);

      if (fs.statSync(filePath).isFile()) {
        const extDir = path.join(directory, ext);

        fs.ensureDir(extDir, (err) => {
          if (err) {
            console.error("Error creating folder:", err);
            return;
          }

          const destPath = path.join(extDir, file);
          fs.move(filePath, destPath, (err) => {
            if (err) {
              console.error("Error moving file:", err);
            } else {
              console.log(`Moved ${file} to ${extDir}`);
            }
          });
        });
      }
    });
  });
}
