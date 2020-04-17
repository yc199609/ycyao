import request, { validateResponseData } from '@/utils/request';
import schema from './response.json';

export const test = () => request({
    url: '/api/user/login',
    method: 'get',
    schema, 
    type: 'ApiRes.User',
})