var { minify_sync } = require("terser");
var fs = require("fs");
var package_json = (JSON.parse(fs.readFileSync('package.json', 'utf8')))
var vars = {version: package_json.version, author: package_json.author, license: package_json.license}
var modules = [];
if(process.argv[2]) {
    modules = process.argv[2].split(';').filter(e=>e!='core');
} else {
    modules = fs.readdirSync('src/modules').map(e => e.slice(0,-3));
}

if(!fs.existsSync('build')) {
    fs.mkdirSync('build');
}

var date = new Date();
vars.bdate = (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0')  + '-' + date.getFullYear();

var config = {
    mangle: {
        properties: {
            keep_quoted: true,
            reserved: ["internal", "jUtils", "thisBuild", "redefine", "callee", "_m", "getModules", "remove", "buildDate", "version"]
        },
    },
    nameCache: undefined,
    ie8: true,
    safari10: true,
    ecma: 5,
    enclose: true,
    format: {
        ecma: 5,
        quote_keys: true,
        quote_style: 2,
        semicolons: true,
        braces: true,
        preamble: '/* jUtils\n|* Version:     ' + vars.version + '\n|* Author:      ' + vars.author + '\n|* License:     ' + vars.license + '\n|* Build date:  ' + vars.bdate + '\n */'
    },
    compress: {
        unused: true,
        drop_console: false,
        arrows: false,
        keep_infinity: true,
        typeofs: false,
        reduce_vars: false
    },
}

var code = {'src/core.js': config.format.preamble + '\n\n' + fs.readFileSync('src/core.js', 'utf8')};


Object.keys(vars).map(e=>{
    code['src/core.js'] = code['src/core.js'].replaceAll(`<!${e}>`, vars[e])
})

modules.forEach((e) => {
    code['src/modules/'+e+'.js'] = config.format.preamble + '\n\n' + fs.readFileSync(`src/modules/${e}.js`, 'utf8')
})

fs.writeFileSync('build/jUtils.min.js', minify_sync(
    code, {...config, compress: {...(config.compress), drop_console: true}}
).code, 'utf8')

var dev = minify_sync(
    code, {...config, sourceMap: {
        includeSources: true
      }}
)

fs.writeFileSync('build/jUtils.dev.js', dev.code + '\n//# sourceMappingURL=data:application/json;base64,'+btoa(dev.map), 'utf8')


// fs.writeFileSync('build/jUtils.dev.js.map', dev.map, 'utf8')