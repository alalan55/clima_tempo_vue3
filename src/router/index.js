import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../components/views/Home.vue')
    },
    {
        path: '/city',
        name: 'City',
        component: () => import(/* webpackChunkName: "city" */ '../components/views/City.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;