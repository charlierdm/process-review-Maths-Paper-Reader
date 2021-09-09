const mathsPaperReader = require('./mathsPaperReader')

describe('mathsPaperReader', () => {
  it('returns a single value', () => {
    expect(mathsPaperReader(1)).toEqual(1)
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