const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyESPlugin = require('uglify-es-webpack-plugin');

module.exports = {
    entry: {
        app: './src/js/pre.js',
    },
    plugins: [
        new CleanWebpackPlugin(['dist/js/']),
        new UglifyESPlugin()
    ],
    output: {
        filename: 'pre.js',
        path: path.resolve(__dirname, 'dist/js/')
    }
};
