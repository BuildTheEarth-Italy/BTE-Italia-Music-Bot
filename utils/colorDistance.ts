interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export function colorDistance(c1: Color, c2: Color) {
  const red1 = c1.r;
  const red2 = c2.r;
  const rMean = (red1 + red2) >> 1;
  const r = red1 - red2;
  const g = c1.g - c2.g;
  const b = c1.b - c2.b;
  return Math.sqrt((((512 + rMean) * r * r) >> 8) + 4 * g * g + (((767 - rMean) * b * b) >> 8));
}
