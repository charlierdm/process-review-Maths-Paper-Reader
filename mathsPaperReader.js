const mathsPaperReader = (string) => {
  if (typeof string != "string") throw new Error("Input must be a string.");

  const extractSum = (operator) => string.split(operator).map(Number);

  if (string.includes("+")) {
    let add = extractSum("+").reduce((acc, cv) => acc + cv);
    return [string, add];
  }

  if (string.includes("-")) {
    let minus = extractSum("-").reduce((acc, cv) => acc - cv);
    return [string, minus];
  }

  if (string.includes("*")) {
    let multiply = extractSum("*").reduce((acc, cv) => acc * cv);
    return [string, multiply];
  }

  if (string.includes("/")) {
    let divide = extractSum("/").reduce((acc, cv) => acc / cv);
    return [string, divide];
  }

  return [string, +string];
};

module.exports = mathsPaperReader;