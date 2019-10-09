const path = require('path')
module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
};