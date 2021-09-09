const mathsPaperReader = (string) => {
  if (typeof string != "string") throw new Error("Input must be a string.");

  if (string.includes("+")) {
    let add = string
      .split("+")
      .map(Number)
      .reduce((acc, cv) => acc + cv);
    return [string, add];
  }

  if (string.includes("-")) {
    let minus = string
      .split("-")
      .map(Number)
      .reduce((acc, cv) => acc - cv);
    return [string, minus];
  }

  if (string.includes("*")) {
    let multiply = string
      .split("*")
      .map(Number)
      .reduce((acc, cv) => acc * cv);
    return [string, multiply];
  }

  if (string.includes("/")) {
    let divide = string
      .split("/")
      .map(Number)
      .reduce((acc, cv) => acc / cv);
    return [string, divide];
  }

  return [string, +string];
};

module.exports = mathsPaperReader;
