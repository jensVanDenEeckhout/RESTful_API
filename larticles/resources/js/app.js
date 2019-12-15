require('./bootstrap');


window.Vue = require('vue');



import Articles from './components/Articles.vue';
import Navbar from './components/Navbar.vue';

 //'articles', require('./components/Articles.vue') // not working
 Vue.component('articles', Articles);
 Vue.component('navbar', Navbar);

const app = new Vue({
    el: '#app'
});