declare namespace ProcurementRes {
    interface Page {
        totalCount: number,
        pageSize: number,
        totalPage: number,
        currPage: number
        data: Data[]
    }

    interface Data {
        barCode: string,
        brandId: number,
        brandName: string,
        code: string,
        createTime: number,
        experience: string,
        id: number,
        pic: string,
        shortName: string,
        spuCode: string,
        status: number[]
    }

    interface DetailData {
        barCode: string,
        brandId: number,
        brandName: string,
        code: string,
        data: Goods[],
        experience: string,
        pic: string,
        shortName: string,
        spuId: number,
        supCode: string,
        type: number,
    }

    interface Goods {
        batchPrice: number,
        costStatus: number,
        id: number,
        logisticsFreight: number,
        logisticsTax: number,
        logisticsTotal: number,
        pic: string,
        pricStatus: number,
        property: string,
        property1: number,
        property2: number,
        pucharseCost: number,
        pucharseTax: number,
        pucharseTaxCost: number,
        pucharseTotal: number,
        qty: number,
        skuId: number,
        spuId: number,
        status: 0|1|2|3,
        supplierName: string,
        tagTost: number,
        taxStatus: number,
    }
}
