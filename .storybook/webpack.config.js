const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
           {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: false
              },
            },
          },
        ],
    });
    config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }))

    // config.module.rules.push({
    //     test: /\.(js|jsx)$/,
    //     exclude: /node_modules\/(?!()\/).*/,
    //     use: {
    //       loader: "babel-loader",
    //       options: {
    //         presets: ["@babel/preset-env", "@babel/preset-react"],
    //       },
    //     },
    // });
    return config;
};