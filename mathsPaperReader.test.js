const mathsPaperReader = require("./mathsPaperReader");

describe("mathsPaperReader", () => {
  it("returns a single positive value", () => {
    expect(mathsPaperReader("1")).toEqual(["1", 1]);
  });

  it("returns a single negative value", () => {
    expect(mathsPaperReader("-1")).toEqual(["-1", -1]);
  });

  it("returns the string with the evaluated some in an array (+)", () => {
    expect(mathsPaperReader("1 + 1")).toEqual(["1 + 1", 2]);
  });

  it("returns the string with the evaluated some in an array (-)", () => {
    expect(mathsPaperReader("4 - 2")).toEqual(["4 - 2", 2]);
  });

  it("returns the string with the evaluated some in an array (*)", () => {
    expect(mathsPaperReader("2 * 2")).toEqual(["2 * 2", 4]);
  });

  it("returns the string with the evaluated some in an array (/)", () => {
    expect(mathsPaperReader("8 / 4")).toEqual(["8 / 4", 2]);
  });

  it("throws an error when given anything other than a string", () => {
    expect(() => {
      mathsPaperReader(1);
    }).toThrow("Input must be a string.");
  });
});
