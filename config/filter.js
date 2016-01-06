// this file is used in `npm run watch:build:parser`
// see package.json file
module.exports = function(path) { return /.pegjs$/.test(path); };
