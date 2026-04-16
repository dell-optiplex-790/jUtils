# jUtils Documentation - The base36 module

## About
The jUtils base36 module allows for the encoding and decoding of Base36 strings.

## Usage
`jUtils.base36(action: string, string: string): string | false` - Encodes/decodes with Base36. Both strings (`action`, `string`) must be defined and have the type `string`. It returns a `string` if it succeeds and `false` if it doesn't. The valid actions are `encode` and `decode`