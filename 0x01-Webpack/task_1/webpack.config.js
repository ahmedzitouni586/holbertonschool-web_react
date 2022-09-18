 const path = require('path');

 module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'js/dashboard_main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
 }