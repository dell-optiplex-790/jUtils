context_jUtils.add("isEven", function() {
    return function(number) {
        if(typeof number != "number") {
            console.error('Not a number.')
            return false;
        }

        return !(number % 2 > 0);
    }
});