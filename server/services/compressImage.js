const sharp = require('sharp');

const compressImage = async (imagePath) => {
  const compressedImagePath = imagePath.replace('.jpg', '-compressed.jpg');
  await sharp(imagePath)
    .resize(800)
    .toFile(compressedImagePath);
  return compressedImagePath;
};

module.exports = compressImage;
