// 采购
<template>
    <div class="container">
        <search-bar />
        <el-card style="margin-top:20px;">
            <el-table border :data="tableData">
                <template slot="empty">
                    <div class="empty">
                        <img src="@/assets/empty.png">
                        <p>暂无数据</p>
                    </div>
                </template>
                <el-table-column label="商品ID" prop="id" align="center" />
                <el-table-column label="商品图片" align="center">
                    <template slot-scope="scope">
                        <el-image :src="scope.row.pic.split(',')[0]" :preview-src-list="scope.row.pic.split(',')" style="height:60px;width:60px;"></el-image>
                    </template>
                </el-table-column>
                <el-table-column label="商品名称" prop="shortName" align="center" />
                <el-table-column label="条形码" prop="barCode" align="center" />
                <el-table-column label="类目" prop="experience" align="center" />
                <el-table-column label="品牌" prop="brandName" align="center" />
                <el-table-column label="定价状态" prop="experience" align="center" />
                <el-table-column label="审核状态" prop="experience" align="center" />
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" @click="handleDetail(scope.row.id)">定价审核</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <el-pagination
            style="margin: 15px 0;"
            layout="total, sizes, prev, pager, next, jumper"
            background
            :current-page="currentPage"
            :page-size='pageSize'
            :total="totalCount"
            :page-sizes="[5, 10, 15, 20]"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script lang='ts' >
import { Vue, Component } from 'vue-property-decorator';
import { getList } from '@/api/price/procurement/index';
import SearchBar from '../components/search_bar.vue';

@Component({
    name: 'procurement',
    components: {
        SearchBar,
    },
})
export default class extends Vue {
    private tableData = [];
    private currentPage = 1;
    private pageSize = 20;
    private totalCount = 20;

    private handleDetail(id: number) {
        this.$router.push(`procurement/detail/${id}`);
    }

    private handleSizeChange(val: number) {
        this.pageSize = val;
    }

    private handleCurrentChange(val: number) {
        this.currentPage = val;
    }

    private async mounted() {
        const { data }  = await getList({
            pageIndex: 1,
            pageSize: 10,
        });
        this.tableData = data.data;
    }
}
</script>
