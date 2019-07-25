const path = require('path');
module.exports = {
    entry: ['./index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './'),
    },
    //將loader的設定寫在module的rules屬性中
    module: {
        //rules的值是一個陣列可以存放多個loader物件
        rules: [
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react', '@babel/preset-env'] } } },
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react'] } } },
            { test: /\.(png|jpg)$/,loader: 'url-loader'},
            {test: /\.css$/i,use: ['style-loader', 'css-loader'],}
        ]
    },
    //增加一個給devserver的設定
    devServer: {
        //指定開啟port為9000
        port: 9000
    }
};