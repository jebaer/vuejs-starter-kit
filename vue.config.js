const path = require('path');

module.exports = {
    devServer: {
        port: 8080,
        /*
        // PROXIS SEND REQUEST TO OUTSIDE
        proxy: {
            '^/auth': {
                target: 'https://127.0.0.1:3001',
                pathRewrite: { '^/auth': '/api/' },
                changeOrigin: true,
                secure: false,
            },
        },
        */
        /*
        // ACTIVATES HTTPS NAVIGATION
        https: {
            key: fs.readFileSync('./certs/localhost-key.pem'),
            cert: fs.readFileSync('./certs/localhost.pem'),
            rejectUnauthorized: false,
        },
        hotOnly: true,
        */
    },
    chainWebpack: config => {
        config.resolve.alias.set(
            'Components',
            path.resolve(__dirname, './src/components'),
        );
        config.resolve.alias.set(
            'Mixins',
            path.resolve(__dirname, './src/mixins'),
        );
        config.resolve.alias.set(
            'Router',
            path.resolve(__dirname, './src/router'),
        );
        config.resolve.alias.set(
            'Store',
            path.resolve(__dirname, './src/store'),
        );
        config.resolve.alias.set(
            'Views',
            path.resolve(__dirname, './src/views'),
        );
        config.resolve.alias.set('@', path.resolve(__dirname, './src'));
    },
};
