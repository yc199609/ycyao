// 采购
import request from '@/utils/request';


interface requestData {
    pageIndex: number,
    pageSize: number,
    status?: 0|1|2,
    sortType?: 1|2|3,
    sortId?: number,
    brandId?: number,
    supId?: number,
    supCode?: number,
}

export const getList = (obj: requestData) => request({
    url: '/api/charge/list',
    method: 'get',
    params: obj,
})