const mathsPaperReader = (string) => {

  if(string.includes('+')) {
    let add = string.split('+').map(Number).reduce((acc, cv) => acc + cv);
    return [string, add];
  }
  return [string, +string];
}

module.exports = mathsPaperReader;