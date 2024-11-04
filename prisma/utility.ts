import { SIZES } from "./constants";

function getRandomSizes() {
  return SIZES.filter(() => Math.random() > 0.5);
}

export function getRandomSizesArray() {
  const randomSizes = getRandomSizes();

  return randomSizes.map((size) => ({
    size,
  }));
}
