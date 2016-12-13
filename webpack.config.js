module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: "/",
        filename: "index.js"
    },
    devServer: {
        port: 7000,
        inline: true,
        contentBase: "public/"
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}