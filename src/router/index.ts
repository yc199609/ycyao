import Vue, { VueConstructor } from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '@/layout/index.vue';
import { getMenus } from '@/api/home/index';

Vue.use(VueRouter);

type ImportComponetType  = (path: string) => () => Promise<VueConstructor<Vue>>;


const importComponet: ImportComponetType = (path: string) => () => import(`@/views${path}.vue`);

const routes: RouteConfig[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue'),
    },
];

const router: MyRouter = new VueRouter({
  routes,
});

/**
 * 递归菜单List生成routes格式
 * @param menus 菜单List
 * @param isTopLevel 是否最外层
 */
const formatterRouter = (menus: any, isTopLevel?: boolean): RouteConfig[] => {
    menus.forEach((item: any) => {
        if (item.children && item.children.length > 0) {
            formatterRouter(item.children);
        }
        if (isTopLevel) {
            item.component = Layout;
            if (item.children && item.children.length > 0) {
                item.redirect = item.children[0].path.startsWith('/') ? item.children[0].path : `${item.path}/${item.children[0].path}`;
            }
        } else {
            item.component = importComponet(item.component);
        }
    });
    return menus;
};

interface MyRouter extends VueRouter {
    options?: any;
}

router.beforeEach(async (to, from, next: any) => {
    if (router.options.addAsyncRouter) {
        next();
    } else {
        const { data } = await getMenus();
        const menuRoutes = formatterRouter(data, true);
        router.addRoutes(menuRoutes);
        router.options.routes = routes.concat(menuRoutes);
        router.options.addAsyncRouter = true;
        next({...to, replace: true});
    }
});

export default router;
