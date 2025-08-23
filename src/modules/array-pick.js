context_jUtils.add("pick", function(array) {
    if(typeof array == "undefined") {
        console.error("The object specified does not exist.");
        return false;
    }

    if(array.constructor.name != "Array") {
        console.error("The object specified is invalid");
        return false;
    }
    return array[Math.floor(Math.random() * array.length)]
})