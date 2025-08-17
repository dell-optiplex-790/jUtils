# jUtils Documentation - The "string-includes" module

## About
The jUtils "string-includes" module checks if a string (`string`) includes another string (`query`) in ES5.

## Usage
`jUtils.includes(string: String, query: String, caseSensitive?: Boolean = false): Boolean` - Checks if `string` includes `query`. This is case-insensitive by default, however it can be enabled by setting the optional argument `caseSensitive` to `true`. The `caseSensitive` argument's default value is `false`. The function returns a boolean (`true` if the string `query` is found in the string `string` or `false` if there's an error (string not found or one of the required arguments is not valid))

