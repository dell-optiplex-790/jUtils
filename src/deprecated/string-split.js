context_jUtils.add("split", function() {
    return function(string) {
        if(typeof string != "string") {
            return false;
        }
        var split = [];
        for(i = 0; i < string.length; i++) {
            split.push(String.fromCharCode(string.charCodeAt(i)));
        }
        return split;
    }
})