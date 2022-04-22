import VueRouter from 'vue-router'

import Home from '../components/Home'
import Code from '../components/Code'
import Document from '../components/Document'

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
            path: '/Code',
            component: Code
        },
        {
            path: '/Document',
            component: Document
        }
    ]
})