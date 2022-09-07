const HtmlWebpack    = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin     = require("copy-webpack-plugin");

module.exports = {

    mode: "development",

    output: {

        clean: true
    },


    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },

            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [ 'style-loader' ,'css-loader' ]
            },

            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },

            {
                test: /\.(png|jpe?g|gif)$/,
                use: 'file-loader'
            }

        ]
    },


    optimization: {},

    devServer: { watchFiles: ["src/index.html"], hot: true, },
    
    plugins: [
    
        new HtmlWebpack({
            title: 'My Web app' ,
            // filename: 'heheypeople.html'
            template: './src/index.html'
        }),

        new MiniCssExtract({
            // filename: '[name].[fullhash].css',
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns:[
                { from: 'src/assets/', to: 'assets/' }
            ]        
        })
        
    ]


}

