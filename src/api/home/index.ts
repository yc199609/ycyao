import request, { validateResponseData } from '@/utils/request';
import schema from './response.json';

// import { Validator } from 'jsonschema'

// const v = new Validator()

export const test = () => request({
    url: '/api/user/login',
    method: 'get',
}).then(res => validateResponseData(schema, res.data, 'ApiRes.User'))