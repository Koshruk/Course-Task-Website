const fileinclude = require("gulp-file-include");

const config = {
    mode: 'development',
    entry: {
        burger: './src/js/burger-menu.js',
        layout: './src/js/change-layout.js',
        data: './src/js/generate-data.js',
        form: './src/js/send-form.js',
        slider: './src/js/slider.js'
    },
    output: {
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}

module.exports = config;