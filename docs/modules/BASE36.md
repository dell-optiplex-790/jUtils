# jUtils Documentation - The base36 module

## About
The jUtils base36 module allows for the encoding and decoding of Base36 strings.

## Usage
`jUtils.base36(action, string)` - Encodes/decodes with base36. Both strings (`action`, `string`) must be defined and have the type `String`. It returns a `String` if it succeeds and `false` if it doesn't. The valid actions are `encode` and `decode`