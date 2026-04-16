# jUtils Documentation - The "string-startsWith" module

## About
The jUtils "string-startsWith" module checks if a string (`string`) starts with another string (`start`) in ES5.

## Usage
`jUtils.startsWith(string: string, start: string, caseSensitive?: boolean = false): boolean` - Checks if `string` starts with `start`. This is case-insensitive by default, however it can be enabled by setting the optional argument `caseSensitive` to `true`. The `caseSensitive` argument's default value is `false`. The function returns a boolean (`true` if the string `start` is the start of `string` or `false` if there's an error (string does not start with `start` or one of the required arguments is not valid)).
