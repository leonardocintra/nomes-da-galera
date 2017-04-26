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
    },
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_mudules/,
            query: {
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}

// ver aula 12 e 13 caso der problema se tiver que instalar o Babel (lib)