import { Message, MessageAttachment, MessageEmbed } from "discord.js";
import { bot } from "../index";
import Jimp from "jimp";
import { colorDistance } from "../utils/colorDistance";

interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export default {
  name: "findcolor",
  cooldown: 3,
  description: "find color",
  async execute(message: Message) {
    const allowedFileExtensions: string[] = [".png", "jpeg", ".jpg"];
    const textures = await bot.textures;

    // Get image from message
    const attachment: MessageAttachment | undefined = message.attachments.first();

    if (!attachment) {
      return message.reply("Provide 1 image please");
    }

    if (!allowedFileExtensions.includes(attachment.url.substring(attachment.url.length - 4))) {
      return message.reply("thats not an image");
    }

    const input = await Jimp.read(attachment.url);

    // calculate stuff
    let sumR = 0,
      sumG = 0,
      sumB = 0;
    for (let x = 0; x < input.getWidth(); x++) {
      for (let y = 0; y < input.getHeight(); y++) {
        const pixel = Jimp.intToRGBA(input.getPixelColor(x, y));
        sumR += pixel.r;
        sumG += pixel.g;
        sumB += pixel.b;
      }
    }
    const num = input.getWidth() * input.getHeight();
    const color = {
      r: sumR / num,
      g: sumG / num,
      b: sumB / num,
      a: 255
    };

    const luma = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;

    // get closest textures
    const distances = new Map();
    textures.forEach((image, c) => {
      distances.set(c, colorDistance(color, c));
    });

    const sortedDistances = new Map([...distances.entries()].sort((a, b) => a[1] - b[1]));

    const sortedTextures = Array.from(sortedDistances.keys());

    const one = textures.get(sortedTextures[0]);
    const two = textures.get(sortedTextures[1]);
    const three = textures.get(sortedTextures[2]);

    // create output image
    const output = new Jimp(1440, 480);
    let font;
    // Load font color whether background is light or dark
    if (luma > 128) {
      font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    } else {
      font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    }

    output.composite(one.resize(480, 480, Jimp.RESIZE_NEAREST_NEIGHBOR), 0, 0);
    output.composite(two.resize(480, 480, Jimp.RESIZE_NEAREST_NEIGHBOR), 480, 0);
    output.composite(three.resize(480, 480, Jimp.RESIZE_NEAREST_NEIGHBOR), 960, 0);

    output.print(font, 10, 10, "Command made by Pizzax#9454");
    const imgBuffer = await output.getBufferAsync(Jimp.MIME_PNG);

    message.reply({ files: [imgBuffer], content: "**Textures**" }).catch(console.error);
  }
};
