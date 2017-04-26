const webpack = require('webpack');

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 3000,
        contentBase: './public'
    }
}

// ver aula 12 caso der problema se tiver que instalar o Babel (lib)