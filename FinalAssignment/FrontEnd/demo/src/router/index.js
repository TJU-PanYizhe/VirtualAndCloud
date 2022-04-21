import VueRouter from 'vue-router'

import Home from '../components/Home'

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            component: Home
        }
    ]
})