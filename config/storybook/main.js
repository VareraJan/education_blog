module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        // 'storybook-addon-mock',
        'storybook-addon-mock/register',
    ],
    framework: '@storybook/react',
    core: {
        // builder: 'webpack5',
        builder: '@storybook/builder-webpack5',
    },
};
