context_jUtils.add("meanAverage", function(x) {
    if(typeof x == "undefined") {
        console.error("The object specified does not exist");
        return false;
    }

    if(x.constructor.name != "Array") {
        console.error("The object specified is invalid");
        return false;
    }
    var y = 0;
    for(var i = 0; i < x.length; i++) {
        if(typeof x[i] != "number") {
            console.error("One or more of the items in this array is not a number");
        }
        y += x[i];
    }
    return y / x.length;
})