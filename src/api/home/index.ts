import request from '@/utils/request';
import schema from './response.json';

export const test = () => request({
    url: '/api/user/login',
    method: 'get',
    type: 'ApiRes.User',
    schema,
});

export const getMenus = () => request({
    url: '/api/user/getMenus',
    method: 'get',
    type: 'ApiRes.Menus',
    schema,
});
