import axios,{ AxiosRequestConfig } from 'axios';
import { Message, MessageBox } from 'element-ui';
// import { UserModule } from '@/store/modules/user';
import { Validator } from 'jsonschema'

 const v = new Validator()

export const validateResponseData = (schema: any, res: any, type: string, url: string) => {
    v.addSchema(schema, '/api')

    const result = v.validate(res.data, {
        $ref: `api#/definitions/${type}`
    })
  
    // 校验失败，数据不符合预期， 此处应该进行 前端异常上报， 如 sentry 之类的
    if (!result.valid) {
        Message({
            message: '后台返回的数据格式错误',
            type: 'error',
            duration: 5 * 1000,
        });
        const errs = result.errors.map((item) => item.toString()).join('\n')
        Promise.reject(new Error(`后台返回的数据格式错误\n请求url: ${url}\n${errs}`))
    }
  
    return res
}

axios.defaults.baseURL = process.env.BASE_API;
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8'
axios.defaults.timeout = 5000;

axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

axios.interceptors.response.use(
    (response) => {
        const res = response.data;
        if (res.code !== 0) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000,
            });
            return Promise.reject(new Error(res.message || 'Error'));
        } else {
            return response.data;
        }
    },
    (error) => {
        Message({
            message: error.message,
            type: 'error',
            duration: 3 * 1000,
        });
        return Promise.reject(error);
    },
);

interface Options extends AxiosRequestConfig {
    schema: any;
    type: string;
    url: string;
}

const service = (options: Options) => {
    return new Promise((resolve,reject) => {
        axios(options)
        .then(res => {
            validateResponseData(options.schema, res, options.type, options.url)
        })
    })
}

export default service;
