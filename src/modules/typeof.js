context_jUtils.add("typeof", function(obj) {
    if(typeof obj == 'undefined') {
        return 'undefined';
    }
    if(obj == null) {
        return 'null';
    }
    if(isNaN(obj) && typeof obj == 'number') {
        return 'nan';
    }
    if(typeof obj == 'object' && obj instanceof Array) {
        return 'array';
    }
    return typeof obj;
})