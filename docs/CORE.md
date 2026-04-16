# jUtils Documentation - Core

## About
jUtils is a pure-ES5 (working towards becoming a pure-ES3) utility library, which aims for a small file size and is platform-independent.

## Core APIs
1. `jUtils.add(moduleName: string, factory: (name: string) => Function): jUtils | false` - Creates a module with the name moduleName. For examples, please look in `src/modules` (don't use `context_jUtils` instead of `jUtils` unless you're adding a module to the source tree's `src/modules` folder). When called (for example `jUtils[moduleName]()`), the arguments will be passed along to `jUtils.moduleName.func` (`moduleFunction`).  Here are the properties of a module (internal ones excluded!):
    1. `.toString()` - Returns the module's code
    2. `.redefine(newFactory: (name: string) => Function)` - Replaces the module's code. This will rarely be used.

2. `jUtils.internal` - An object for some internal and undocumented APIs. Usage of them is bad practice. These properties are subject to change!
3. `jUtils.thisBuild` - Object that has information for the current jUtils build. Here are the properties:
    1. `.version` - The jUtils version
    2. `.buildDate` - The jUtils build date
4. `jUtils.init(): jUtils` - Returns a new jUtils object. Don't use this to replace the current jUtils object. That's wasteful. Think about the old object's feelings.
5. `jUtils.getModules(): Array<string>` - Returns an array of the currently loaded modules. Modifying the returned array will not modify the original (internal) one.
6. `jUtils.remove(moduleName: string): boolean` - Removes the module with the specified name. This is mainly for easy duct-tape fixes. If you want to remove a bundled module, please just consider building manually (recommended: sync up your copy of the jUtils repo to the official repo before each build).

## Bad Practice
1. Usage and modification of internal properties
2. Usage of `jUtils.add()` to overwrite a module (such use is blocked for a reason!)
3. Usage of a development build in production and/or a production build in development
4. Writing code that does what the wrapper functions already do. This will cause headaches and confusion later on.