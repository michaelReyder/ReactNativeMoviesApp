module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./src'],
                    extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                    alias: {
                        assets: './assets',
                        '@api': './src/api',
                        '@components': './src/components',
                        '@screens': './src/screens',
                        '@types': './src/types',
                        '@utils': './src/utils',
                    },
                },
            ],
            'nativewind/babel',
            'transform-inline-environment-variables',
        ],
    };
};
