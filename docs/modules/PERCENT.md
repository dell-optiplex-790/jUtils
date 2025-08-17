# jUtils Documentation - The "percent" module

## About
The jUtils "percent" module allows for generating percent values in a range. No rounding is done.

## Usage
`jUtils.percent(partial: Number, full: Number): Number` - Calculates a percentage (what percent of `full` is `partial`?). The number `full` must be larger then 0 and both numbers (`partial`, `full`) must be defined and have the type `Number`. It returns a `Number` if it succeeds and `false` if it doesn't.

