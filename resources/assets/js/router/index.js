import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import FAQ from '../views/FAQ.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    fallback: true, //router should fallback to hash (#) mode when the browser does not support history.pushState
    routes:[
        { path:'/',component:Home },
        { path:'/about',component:About },
        { path:'/contact',component:Contact },
        { path:'/faq',component:FAQ }
    ]
});

export default router