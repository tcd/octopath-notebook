const path = require("path")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

const outPath = path.resolve(__dirname, "..", "..", "app", "assets", "javascripts", "react")
const isDev = process.env.NODE_ENV !== "production"

const webpackConfig = {
    mode: process.env.NODE_ENV,
    entry: {
        timestamp: "./src/components/Timestamp/main.tsx",
        partyBuilder: "./src/components/PartyBuilder/main.tsx",
    },
    output: {
        path: outPath,
        publicPath: "/",
        filename: isDev ? "[name].bundle.js" : "[name].[chunkhash:8].dist.js",
    },
    devtool: "inline-source-map",
    devServer: {
        static: outPath,
        historyApiFallback: true,
        port: 8080,
        hot: true,
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
        modules: [__dirname, "src", "node_modules"],
        plugins: [new TsconfigPathsPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                enforce: "pre",
                test: /\.tsx?$/,
                use: "source-map-loader",
            },
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"],
            // },
        ],
    },
}

module.exports = webpackConfig
