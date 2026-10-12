const fs = require("fs/promises");
const path = require("path");
 
const ROOT = "E:/Rosary Archiv";
 
const TARGETS = {
  movie: path.join(ROOT, "Filme"),
  series: path.join(ROOT, "Serien"),
  anime: path.join(ROOT, "Anime"),
  youtube: path.join(ROOT, "YouTube"),
  mediathek: path.join(ROOT, "Mediatheken")
};
 
async function importMedia(filePath, mediaType) {
  const targetDir = TARGETS[mediaType];
 
  if (!targetDir) {
    throw new Error("Unknown media type");
  }
 
  const targetFile = path.join(
    targetDir,
    path.basename(filePath)
  );
 
  await fs.mkdir(targetDir, {
    recursive: true
  });
 
  await fs.rename(
    filePath,
    targetFile
  );
 
  return targetFile;
}
 
module.exports = {
  importMedia
};
