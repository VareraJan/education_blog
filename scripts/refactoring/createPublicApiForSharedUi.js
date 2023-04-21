exports.__esModule = true;
const ts_morph_1 = require('ts-morph');
const path_1 = require('path');

const project = new ts_morph_1.Project({});
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');
const files = project.getSourceFiles();
const uiPath = path_1.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);
const componentsDirs = sharedUiDirectory === null || sharedUiDirectory === void 0 ? void 0 : sharedUiDirectory.getDirectories();
function isAbsolute(value) {
    const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
    return layers.some((layer) => { return value.startsWith(layer); });
}
componentsDirs === null || componentsDirs === void 0 ? void 0 : componentsDirs.forEach((directory) => {
    const indexFilePath = ''.concat(directory.getPath(), '/index.ts');
    const indexFile = directory.getSourceFile(indexFilePath);
    if (!indexFile) {
        const sourceCode = "export * from './".concat(directory.getBaseName(), "';\n");
        const file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true });
        file.save();
    }
});
files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');
        const segments = valueWithoutAlias.split('/');
        const isSharedLayer = (segments === null || segments === void 0 ? void 0 : segments[0]) === 'shared';
        const isUiSlice = (segments === null || segments === void 0 ? void 0 : segments[1]) === 'ui';
        if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier('@/'.concat(result));
        }
    });
});
project.save();
