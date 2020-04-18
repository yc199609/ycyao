// 采购详情
<template>
    <div class="container">
        <el-card>
            <el-image :src="titleImage[0]" :preview-src-list="titleImage" style="height:160px;width:160px;"></el-image>
            <div class="textBox" >
                <el-row>
                    <el-col :span="5" class="label">商品名称:</el-col>
                    <el-col :span="19">{{ goods.shortName }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="5" class="label">商品ID:</el-col>
                    <el-col :span="19">{{ goods.spuId }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="5" class="label">品牌:</el-col>
                    <el-col :span="19">{{ goods.brandName }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="5" class="label">类目:</el-col>
                    <el-col :span="19">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item v-for="(item, index) in experience" :key="index">{{item}}</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="5" class="label">条形码:</el-col>
                    <el-col :span="19">{{ goods.barCode }}</el-col>
                </el-row>
            </div>
        </el-card>
        <el-card style="margin-top: 20px;">
            <el-table :data="goods.data">
                <template slot="empty">
                    <div class="empty">
                        <img src="@/assets/empty.png">
                        <p>暂无数据</p>
                    </div>
                </template>
                <el-table-column label="序号" align="center" type="index"></el-table-column>
                <el-table-column label="图片" align="center">
                    <template slot-scope="scope">
                        <el-image :src="scope.row.pic" :preview-src-list="[scope.row.pic]" style="height:80px;width:80px;"></el-image>
                    </template>
                </el-table-column>
                <el-table-column label="供应商名称" prop="supplierName" align="center"></el-table-column>
                <el-table-column label="SKU规格" align="center"></el-table-column>
                <el-table-column label="直接采购成本" align="center">
                    <el-table-column align="center">
                        <template slot="header">
                            未税成本<br/>(元)
                        </template>
                    </el-table-column>
                    <el-table-column align="center">
                        <template slot="header">
                            含税成本<br/>(元)
                        </template>
                    </el-table-column>
                    <el-table-column align="center">
                        <template slot="header">
                            税率<br/>(%)
                        </template>
                    </el-table-column>
                    <el-table-column label="税率类型" align="center"></el-table-column>
                    <el-table-column align="center">
                        <template slot="header">
                            吊牌成本费用<br/>(元)
                        </template>
                    </el-table-column>
                    <el-table-column align="center">
                        <template slot="header">
                            含税采购成本合计<br/>(元)
                        </template>
                    </el-table-column>
                </el-table-column>
                <el-table-column label="物流费用" align="center">
                    <el-table-column align="center">
                        <template slot="header">
                            未税采购运费<br/>(元)
                        </template>
                    </el-table-column>
                    <el-table-column align="center">
                        <template slot="header">
                            含税采购运费<br/>(元)
                        </template>
                    </el-table-column>
                    <el-table-column align="center">
                        <template slot="header">
                            采购运费税率<br/>(元)
                        </template>
                    </el-table-column>
                </el-table-column>
                <el-table-column align="center" label="操作">
                    <el-button type="text">修改</el-button>
                    <el-button type="text">提交</el-button>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { getDetail } from '@/api/price/procurement/index';

@Component({
    name: 'procurementDeatil',
})
export default class extends Vue {
    private goods: ProcurementRes.DetailData = {
        barCode: '',
        brandId: -1,
        brandName: '',
        code: '',
        data: [],
        experience: '',
        pic: '',
        shortName: '',
        spuId: -1,
        supCode: '',
        type: -1,
    };
    private get titleImage() {
        if(typeof this.goods?.pic === 'string') {
            return this.goods.pic.split(',')
        }
        return []
    }
    private get experience() {
        if(typeof this.goods?.experience === 'string') {
            return this.goods.experience.split('->')
        }
        return []
    }
    private async created() {
        const { data }  = await getDetail({
            pageIndex: 1,
            pageSize: 10,
            spuId: 1,
        });
        this.$set(this, 'goods', data)
    }
}
</script>
<style lang="scss" scoped>
.container {
    padding: 1vw 3vw 0;
}
/deep/ .el-card{
    .textBox{
        padding-left:20px;
        flex:1;
    }
    .el-card__body{
        display:flex;
        flex-direction: row;
    }
}
.el-row{
    line-height: 30px;
}
.label{
    max-width:100px;
    font-weight:700;
}
/deep/ .el-breadcrumb {
    line-height: 30px;
    .el-breadcrumb__item{
        font-size: 16px;
    }
}
</style>