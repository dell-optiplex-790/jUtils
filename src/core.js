function jUtilsInit() {
    this.add = function(name, func) {
        if(this.internal.importantModules.indexOf(name) != -1) {
            console.error("Cannot overwrite built-in jUtils stuff");
            return false;
        }
        if(typeof this[name] == "function") {
            console.error("This module (" + name + ") already exists. This is an unsupported practice and is blocked. Instead, use jUtils." + name + ".redefine(newFunction)");
            return false;
        }
        this[name] = function() {
            return arguments.callee.func.apply(null, arguments);
        };
        this[name].func = func;
        this[name].redefine = function(newFunc) {
            arguments.callee.func = newFunc;
        }
        this[name].toString = function() {
            return this.func.toString();
        }
        this.internal.modulesList.push(name);
        return this;
    };
    this.internal = {
        _m: "DO NOT use the internal object in production. Please. This will create headaches later on and your maintainers will cry.",
        initConstructor: jUtilsInit,
        modulesList: ["core"],
        importantModules: [],        
    };
    this.thisBuild = {
        version: "<!version>",
        buildDate: "<!bdate>"
    }
    this.init = function() {
        return new this.internal.initConstructor()
    }
    this.getModules = function() {
        return Array.from(this.internal.modulesList); // array.from to prevent writing to the module list
    }
    this.remove = function(name) {
        var modulesList = this.internal.modulesList;

        if(!(modulesList.indexOf(name) != -1 && this.internal.importantModules.indexOf(name) == -1)) {
            console.log("Could not remove " + name + ".")
            return false;
        }

        modulesList.splice(modulesList.indexOf(name), 1);

        return delete this[name];
    }
    this.internal.importantModules = Object.keys(this);
    this.internal.importantModules.push("core");
};

// loader or smth
var context;
if(typeof module == "undefined") {
    if(typeof window == "undefined") {
        if(typeof globalThis == "undefined") {
            context = this;
        } else {
            context = globalThis;
        }
    } else {
        context = window;
    }
} else {
    context = module.exports;
}

context.jUtils = new jUtilsInit();
var context_jUtils = context.jUtils; // terser go brrr