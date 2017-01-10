const path = require('path');

module.exports = {
    entry: {
        'bundle': './src/app.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    }
}