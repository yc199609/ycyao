import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '@/layout/index.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue'),
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/home.vue'),
                meta: {
                    title: '首页',
                    icon: '&#xe723;',
                },
            },
        ],
    },
    {
        path: '/price',
        component: Layout,
        redirect: '/price/procurement',
        meta: {
            title: '定价系统',
            icon: '&#xe6b7;'
        },
        children: [
            {
                path: 'procurement',
                component: () => import('@/views/price/procurement/index.vue'),
                meta: {
                    title: '采购',
                    icon: '&#xe653;',
                },
            },
            {
                path: 'material',
                component: () => import('@/views/price/material/index.vue'),
                meta: {
                    title: '物控',
                    icon: '&#xe729;',
                },
            },
            {
                path: 'audit',
                component: () => import('@/views/price/audit/index.vue'),
                meta: {
                    title: '审计',
                    icon: '&#xe654;',
                },
            },
        ],
    },
];

const router = new VueRouter({
  routes,
});

export default router;
