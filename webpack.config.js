let path = require('path')
module.exports = {
    mode:"development",
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    output: {
        filename: 'bundle.js',
    },
    resolve: { extensions: [".ts", ".js","jsx"] },
    module: {
        rules: [
            {test: /\.tsx?$/, use:"ts-loader",exclude:/node_modules/}
        ]
    },
    devServer:{
        static: {
            directory: path.join(__dirname, 'assets'),
          },
        port: 8080, // Port to run dev server on
        hot: true, // Enable hot module replacement
        open: true, // Open default browser when dev server starts
    }
}