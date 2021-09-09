const mathsPaperReader = (string) => {

  if(string.includes('+')) {
    let add = string.split('+').map(Number).reduce((acc, cv) => acc + cv);
    return [string, add];
  }

  if(string.includes('-')) {
    let minus = string.split('-').map(Number).reduce((acc, cv) => acc - cv)
    return [string, minus];
  }

  if(string.includes('*')) {
    let multiply = string.split('*').map(Number).reduce((acc, cv) => acc * cv)
    return [string, multiply];
  }

  return [string, +string];
}

module.exports = mathsPaperReader;