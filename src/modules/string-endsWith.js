context.jUtils.add("endsWith", function() {
    return function(string, end, caseSensitive) {
        
        // this could've also been two if statements if I wasn't code-golfing
        if(typeof string != "string" || typeof end != "string") {
            console.error("Incorrect types for required arguments.");
            return false;
        }

        if(typeof caseSensitive === "boolean" && !!caseSensitive) {
            return (string.slice(0 - end.length) == end);
        } else {
            return (string.toLowerCase().slice(0 - end.length) == end.toLowerCase());
        }
    }
})
