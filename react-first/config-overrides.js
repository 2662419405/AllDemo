const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireEslint = require('react-app-rewire-eslint');

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', {libraryName: 'antd', libraryDirectory: 'es', style: true}],
        config,
    );
    config = rewireLess.withLoaderOptions({
        modifyVars: {
            '@table-padding-vertical': '10px',
            '@table-padding-horizontal': '10px',
            '@form-item-margin-bottom': '10px',
        },
        javascriptEnabled: true,
    })(config, env);
    config = rewireEslint(config, env);
    return config;
};
