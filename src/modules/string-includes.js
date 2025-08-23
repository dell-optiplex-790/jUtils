context_jUtils.add("includes", function(string, query, caseSensitive) {

    // this could've been two ifs if i wanted clean code, but at this point it has turned into code golfing
    if(!(typeof string == "string" && typeof query == "string")) {
        console.error("Incorrect types for required arguments.");
        return false;
    }

    // > make a christmas tree of internal flags; i can't just dump it in jUtils.internal, that's just stupid
    // > i named it "_internal" instead of "internal" so that terser doesn't keep the name
    // later i optimized it because i found out callling .toString() on a string is useless
    

    if(typeof caseSensitive === "boolean" && !!caseSensitive) {
        return (string.indexOf(query) != -1);
    } else {
        return (string.toLowerCase().indexOf(query.toLowerCase()) != -1);
    }
})