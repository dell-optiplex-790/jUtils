context_jUtils.add("percent", function() {
    return function(partial, full) {
        var invalidNumStr = "The [x] number of the range is invalid or unspecified"

        if(typeof partial != "number") {
            console.error(invalidNumStr.replace('[x]', 'partial'))
            return false;
        }

        if(typeof full != "number") {
            console.error(invalidNumStr.replace('[x]', 'full'))
            return false;
        }

        if(full > 0) {
            return ((10 * partial) / full) * 10;
        } else {
            console.error('The full number is invalid!');
            return false;
        }
    }
});