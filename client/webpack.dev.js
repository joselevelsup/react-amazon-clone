var webpack = require("webpack");
var config = require("./webpack.config");

config.devServer = {
    port: 8081,
    proxy: {
        '/api/*': {
            target: 'http://localhost:8080',
            secure: false
        }
    }
};

module.exports = config;