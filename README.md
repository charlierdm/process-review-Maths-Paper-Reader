# Maths Paper Reader 

This is my solution to a process review on 09/09/2021. I have written my solution in JavaScript and used Jest to test.

I wrote the specifications below based upon the information provided on the call, I then created the input/output table and based my tests off of that. I used a TDD approach to build this system, all tests are passing.

![GCSE-Maths-Non-Calculator-Topics](https://user-images.githubusercontent.com/75075773/132701145-c939568f-1c7b-4a3b-8989-7124078e6f6b.jpg)


## Specifications
```
A company that makes academic maths papers easier to read.

Scans through the maths paper and looks for sums, extracts them as strings.

It will evaluate the sum strings, then output the original sum string, with the result. 

It will contain either 1 or 2 numbers.

example: ['2 + 2', 4]
```

## Input/Output Table

| Input       | Output      |
| ----------- | ----------- |
|  '1'        | ['1', 1]    |
|  '-1'       | ['-1', -1]  |
|  '1 + 1'    | ['1 + 1', 2]            |
|  '4 - 2'    | ['4 - 2', 2]        |
|  '2 * 2'    | ['2 * 2', 4]            |
|  '8 / 4'    | ['8 / 4', 2]            |
| **Edge Case**             |             |
|  non-string          | Error("Input must be a string.")      |