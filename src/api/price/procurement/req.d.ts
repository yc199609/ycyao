declare namespace ProcurementReq {
    interface ReqGetList {
        pageIndex: number,
        pageSize: number,
        status?: 0|1|2,
        sortType?: 1|2|3,
        sortId?: number,
        brandId?: number,
        supId?: number,
        supCode?: number,
    }

    interface ReqGetDetail {
        pageIndex: number,
        pageSize: number,
        spuId: number | string,
    }
}