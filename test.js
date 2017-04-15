var vue = require('vue/dist/vue.js');

window['lib-element-ui'].install(vue)
    .then(() => {
    var tmpl = `
        <div>
            <el-button type="primary" icon="search">搜索</el-button>
            <br /><br />
            <el-date-picker v-model="date" type="date" placeholder="选择日期"></el-date-picker>
        </div>
    `;
    var instance = new vue({
        data: function () {
            return {
                date: '2017-03-01'
            }
        },
        template: tmpl
    });
    instance.$mount('#app');
});
