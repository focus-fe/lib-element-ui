require('babel-polyfill/node_modules/core-js/es6/promise.js');


var ui = {
    install: function (vue) {
        window.ElementUiVue = vue;
        return new Promise ((resolve, reject) => {
            require.ensure([], function (require) {
                require('element-ui/lib/theme-default/index.css');
                var element = require('element-ui');
                vue.use(element);
                resolve();
            });
        });
    }
};


window['lib-element-ui'] = ui;
