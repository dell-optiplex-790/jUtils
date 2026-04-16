# jUtils Documentation - The "string-endsWith" module

## About
The jUtils "string-endsWith" module checks if a string (`string`) ends with another string (`end`) in ES5.

## Usage
`jUtils.endsWith(string: string, end: string, caseSensitive?: boolean = false): Boolean` - Checks if `string` ends with `end`. This is case-insensitive by default, however it can be enabled by setting the optional argument `caseSensitive` to `true`. The `caseSensitive` argument's default value is `false`. The function returns a boolean (`true` if the string `end` is the end of `string` or `false` if there's an error (string does not end with `end` or one of the required arguments is not valid)).
