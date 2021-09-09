const mathsPaperReader = require('./mathsPaperReader')

describe('mathsPaperReader', () => {
  it('returns a single positive value', () => {
    expect(mathsPaperReader('1')).toEqual(['1', 1])
  })

  it('returns a single negative value', () => {
    expect(mathsPaperReader('-1')).toEqual(['-1', -1])
  })

  it('returns the string with the evaluated some in an array', () => {
    expect(mathsPaperReader('1 + 1')).toEqual(['1 + 1', 2])
  })
})



// ## Input/Output Table

// | Input       | Output      |
// | ----------- | ----------- |
// |  '1'        | ['1', 1]    |
// |  '-1'       | ['-1', -1]  |
// |  '1 + 1'    | ['1 + 1', 2]            |
// |  '4 - 2'    | ['4 -2', 2]        |
// |  '2 * 2'    | ['2 * 2', 4]            |
// |  '8 / 4'    | ['8 / 4', 2]            |
// |Edge Case             |             |
// |  non-string          | Error("Input must be a string.")      |