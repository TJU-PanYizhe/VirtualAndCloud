import VueRouter from 'vue-router'

import Home from '../components/Home'
import Code from '../components/Code'
import Document from '../components/Document'
import About from '../components/About'

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            component: Home
        },
        {
            path: '/code',
            component: Code
        },
        {
            path: '/document',
            component: Document
        },
        {
            path: '/about',
            component: About
        }
    ]
})