import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Pages/Home'
import Resume from '../components/Pages/Resume'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/resume', name: 'Resume', component: Resume },

    ]
})
