module.exports = {
    entry: {
        app: './src/app.js',
        example: './src/example.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: "/assets/",
        filename: '[name].bundle.js'
    },
    devServer: {
        inline: true,
        port: 8485
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react']
                }
            }
        ]
    }
};

