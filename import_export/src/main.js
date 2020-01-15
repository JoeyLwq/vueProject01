import {test1, var1, TestClass1} from './js/output.js'
import css from './css/normal.css'
//require('./css/normal.css')

test1('try sth')

var class1 = new TestClass1('clazz1','18')

console.log(class1)
class1.func1()

/*使用vue方案一*/

//const app = new Vue({
//    el: '#app',
//    template: `
//        <div id="app">{{message}}</div>
//    `,
//
//    data: {
//        message: 'vue集成webpack'
//    }
//})

import Vue from 'vue'
import App from './vue/final.vue'

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})

