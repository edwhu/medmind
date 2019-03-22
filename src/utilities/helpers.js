// Put your random helper functions in here.
export const getFadedFromHex = function(hexColor) {
  const red = parseInt(hexColor.substring(1, 3), 16);
  const blue = parseInt(hexColor.substring(3, 5), 16);
  const green = parseInt(hexColor.substring(5, 7), 16);

  const fade = c => Math.floor((5 * c + 11 * 255) / 16);
  return `rgb(${fade(red)}, ${fade(blue)}, ${fade(green)})`;
};
