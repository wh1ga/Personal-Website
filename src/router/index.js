import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home'
import Resume from '../components/pages/Resume'

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/resume', name: 'Resume', component: Resume },

    ]
});
