context_jUtils.add("startsWith", function() {
    return function(string, start, caseSensitive) {
        
        // this could've been two separate if statements if I wasn't code-golfing
        if(typeof string != "string" || typeof start != "string") {
            console.error("Incorrect types for required arguments.");
            return false;
        }

        if(typeof caseSensitive === "boolean" && !!caseSensitive) {
            return (string.indexOf(start) == 0);
        } else {
            return (string.toLowerCase().indexOf(start.toLowerCase()) == 0);
        }
    }
})
