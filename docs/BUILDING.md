# jUtils Documentation - Building

## Basic build steps
1. Open a terminal or command prompt in the directory of the repository.
2. Run the command `npm i`. This will install the dependencies.
3. Run the `minify.js` script with `node minify.js [modules]`, where `modules` is optional. It's a list with `;` as the delimiter (example: `base36;random`). For just the core, you can just include the module "core" (which is always included; the only use for specifying core is if you only want the core for some reason). If you want all of the modules, don't specify `modules`.

## Explanations
If you don't know what the "core" module is, it's the core of jUtils (`src/core.js`). Modify it at your own risk.
Where are the modules? They're in `src/modules`. Self-explanatory.