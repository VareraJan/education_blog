exports.__esModule = true;
const ts_morph_1 = require('ts-morph');

const project = new ts_morph_1.Project({});
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');
const files = project.getSourceFiles();
function isAbsolute(value) {
    const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
    return layers.some((layer) => { return value.startsWith(layer); });
}
files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier('@/'.concat(value));
        }
    });
});
project.save();
