
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/app.js', // Your main entry file (can be empty if you only have SCSS)
    output: {
        filename: 'dist/bundle.js', // Output bundle file
        path: `${__dirname}`, // Output directory
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: __dirname
                        }
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'dist/styles.css', // Output CSS file
        }),
    ],
};
