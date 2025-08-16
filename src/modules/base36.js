context.jUtils.add("base36", function(action, str) {
    if(!(typeof action == "string" && typeof str == "string")) {
        console.error("One or more of the arguments is invalid. Please refer to base36's documentation.")
        return false;
    }
    if(action == "encode") {
        var a = str.split("");
        var b = "";
        for(var i = 0; i < a.length; i++) {
            var r = a[i].charCodeAt().toString(36);
            b += '0'.repeat(2-r.length) + r
        }
        return b;
    } else if(action == "decode") {
        if((str.length % 2) > 0) {
            return false;
        }
        var b = "";
        for(var i = 0; i < str.length; i += 2) {
            b += String.fromCharCode(parseInt(str[i]+str[i+1], 36));
        }
        return b;
    } else {
        return false;
    }
});