// 采购
import request from '@/utils/request';
import schema from './res.json';

// 采购模块列表接口
export const getList = (obj: ProcurementReq.ReqGetList) => request({
    url: '/api/charge/list',
    method: 'get',
    params: obj,
    schema,
    type: 'ProcurementRes.Page',
});

// 采购模块商品规格列表接口
export const getDetail = (obj: ProcurementReq.ReqGetDetail) => request({
    url: `/api/charge/purchase/${obj.spuId}`,
    method: 'get',
    params: obj,
    schema,
    type: 'ProcurementRes.DetailData',
});
