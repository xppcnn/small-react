const { defaults } = require('jest-config');

module.exports = {
	...defaults,
	rootDir: process.cwd(),
	modulePathIgnorePatterns: ['<rootDir>/.history'],
	moduleDirectories: [
    // 第三方依赖
    ...defaults.moduleDirectories, 
    // React ReactDom
    'dist/node_modules'],
	testEnvironment: 'jsdom'
};
