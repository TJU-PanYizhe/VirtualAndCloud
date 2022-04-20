import VueRouter from 'vue-router'

import IndexPage from '../components/IndexPage'

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            component: IndexPage
        }
    ]
})