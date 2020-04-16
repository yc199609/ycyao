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
                    icon: '&#xe61f;',
                },
            },
        ],
    },
    // {
    //     path: '/price',
    //     component: Layout,
    //     redirect: '/price',
    //     meta: {
    //         title: '定价系统',
    //     },
    //     children: [
    //         {
    //             path: 'procurement',
    //             component: () => import('@/views/price/procurement/index.vue'),
    //             meta: {
    //                 title: '采购',
    //                 icon: '',
    //             },
    //         },
    //         {
    //             path: 'material',
    //             component: () => import('@/views/price/material/index.vue'),
    //             meta: {
    //                 title: '物控',
    //                 icon: '',
    //             },
    //         },
    //         {
    //             path: 'audit',
    //             component: () => import('@/views/price/audit/index.vue'),
    //             meta: {
    //                 title: '审计',
    //                 icon: '',
    //             },
    //         },
    //     ],
    // },
];

const router = new VueRouter({
  routes,
});

export default router;
