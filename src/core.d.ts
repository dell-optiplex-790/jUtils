type jUtilsModule<func extends Function> = func & {
    redefine: (newFactory: (name: string) => Function) => void;
}

interface jUtils {
    add: (moduleName: string, factory: (name: string) => Function) => jUtils | false;
    thisBuild: {
        version: string,
        buildDate: string
    },
    init: () => jUtils;
    getModules: () => Array<string>;
    remove: (moduleName: string) => boolean;
}