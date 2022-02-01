const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");


module.exports = env => {
    let devType = env.production || false;

    return {
        mode: devType ? "production" : "development",

        entry: {
            app: path.resolve(__dirname, "./src/js/app.js")
        },

        output: {
            path: path.resolve(__dirname, "docs"),
            filename: "js/[name].[contenthash].bundle.js",
            clean: true
        },

        devServer: {
            static: {
                directory: path.resolve(__dirname, "./docs")
            },
            port: 5001
        },

        module: {
            rules:[
                {
                    test: /(\.html)$/,
                    use: "html-loader"
                }
            ]
        },

        plugins: [
            new HTMLWebpackPlugin({
                filename: "index.html",
                template: "./src/index.html"
            })
        ]

    }
}