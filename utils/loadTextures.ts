import Jimp from "jimp";
import fs from "fs";
import path from "path";

// Read textures from folder
export async function loadTextures() {
  const textures = new Map();
  const textureFiles = await fs.promises.readdir("./textures/");

  for (const file of textureFiles) {
    const image = await Jimp.read(path.join("./textures/", file));

    let sumR = 0,
      sumG = 0,
      sumB = 0;

    for (let y = 0; y < image.getHeight(); y++) {
      for (let x = 0; x < image.getWidth(); x++) {
        const pixel = Jimp.intToRGBA(image.getPixelColor(x, y));
        sumR += pixel.r;
        sumG += pixel.g;
        sumB += pixel.b;
      }
    }
    const num = image.getWidth() * image.getHeight();
    const color = { r: sumR / num, g: sumG / num, b: sumB / num, a: 255 };

    textures.set(color, image);
  }

  return textures;
}
