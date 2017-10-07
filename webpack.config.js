const path = require('path');

module.exports = {
    entry: './src/js/pre.js',
    output: {
        filename: 'pre.js',
        path: path.resolve(__dirname, 'dist/js/')
    }
};
