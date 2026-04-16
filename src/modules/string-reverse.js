context_jUtils.add("reverse", function() {
    return function(string) {
        if(typeof string != "string") {
            console.error("Not a string.");
            return false;
        }
        
        return string.split('').reverse().join(''); // i'm TIRED of typing in .split('').reverse().join('') every time!
    }
})