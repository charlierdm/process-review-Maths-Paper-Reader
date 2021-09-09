# Maths Paper Reader 

A company that makes academic maths papers easier to read.

Scans through the maths paper and looks for sums, extracts them as strings.

It will evaluate the sum strings, then output the original sum string, with the result. 

It will contain either 1 or 2 numbers.

example: ['2 + 2', 4]

+ - * /



## Input/Output Table

| Input       | Output      |
| ----------- | ----------- |
|  '1'        | ['1', 1]    |
|  '-1'       | ['-1', -1]  |
|  '1 + 1'    | ['1 + 1', 2]            |
|  '4 - 2'    | ['4 - 2', 2]        |
|  '2 * 2'    | ['2 * 2', 4]            |
|  '8 / 4'    | ['8 / 4', 2]            |
|Edge Case             |             |
|  non-string          | Error("Input must be a string.")      |