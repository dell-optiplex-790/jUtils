context_jUtils.add("random", function(min, max) {
    var invalidNumStr = "The [x] number of the range is invalid or unspecified"

    if(typeof min != "number") {
        console.error(invalidNumStr.replace('[x]', 'minimum'))
        return false;
    }

    if(typeof max != "number") {
        console.error(invalidNumStr.replace('[x]', 'maximum'))
        return false;
    }

    if(min > max || min == max) {
        console.error("The minimum number is equal or larger then the maximum number")
        return false;
    }

    return (min - 1) + Math.ceil(Math.random() * (max - (min-1)));
});