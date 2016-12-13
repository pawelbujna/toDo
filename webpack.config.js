module.export = {
    entry: {
        app: ["./src/index.js"]
    },
    output: {
        path: "/",
        fileName: "index.js"
    },
    devServer: {
        port: 7000,
        inline: true
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react', 'stage-0']
            }
        }]
    }
}