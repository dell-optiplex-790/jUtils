function jUtilsInit(jUtils) {
    var enableInheritance = false;
    if(
        typeof jUtils == "object" &&
        typeof jUtils.internal == "object" &&
        typeof jUtils.internal.initConstructor == 'function' &&
        jUtils.internal.initConstructor == arguments.callee
    ) {
        enableInheritance = true;
    }
    this.add = function(name, factory) {
        if(typeof factory != "function" || typeof name != "string") {
            return false;
        }
        var func = factory(name);
        if(typeof func != "function") {
            return false;
        }
        this.internal.factories.push({name, factory});
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
        this[name].redefine = function(newFactory) {
            if(typeof newFactory != "function") {
                return false;
            }
            var newFunc = factory(name);
            if(typeof newFunc != "function") {
                return false;
            }
            arguments.callee.func = newFunc;
            return true;
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
        factories: []
    };
    this.thisBuild = {
        version: "<!version>",
        buildDate: "<!bdate>"
    }
    this.init = function() {
        return new this.internal.initConstructor(this);
    }
    this.getModules = function() {
        // array.from was there to prevent writing to the module list
        // this "copy" loop is here because Array.from() didn't exist in ES3
        var copy = [];
        var modules = this.internal.modulesList;
        for(i = 0; i < modules.length; i++) {
            copy.push(modules[i]);
        }
        return copy;
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
    this.internal.importantModules = [
        "add",
        "internal",
        "thisBuild",
        "remove",
        "getModules",
        "init",
        "core"
    ];
    if(enableInheritance) {
        // inherit everything
        var factories = jUtils.internal.factories;
        for(i = 0; i < factories.length; i++) {
            this.add(factories[i].name, factories[i].factory);
        }
    }
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