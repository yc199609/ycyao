<template>
    <div class="container">
        <search />
        <el-card style="margin-top:20px;">
            <el-table
                row-key="id"
                :tree-props="{children:'children'}"
                :data="tableData" 
                border
            >
                <el-table-column label="菜单ID" prop="id"></el-table-column>
                <el-table-column label="菜单名称">
                    <template slot-scope="scope">{{ scope.row.meta.title }}</template>
                </el-table-column>
                <el-table-column label="菜单图标">
                    <template slot-scope="scope"><i style="color:black;" class="iconfont icon-size" v-html="scope.row.meta.icon"></i></template>
                </el-table-column>
                <el-table-column label="是否隐藏">
                    <template slot-scope="scope">{{ scope.row.meta.hidden?'隐藏':'' }}</template>
                </el-table-column>
                <el-table-column label="操作">
                    <template>
                        <el-button type="text">编辑</el-button>
                        <el-button type="text">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script lang='ts' >
import { Vue, Component } from 'vue-property-decorator';
import search from '@/components/searchBar.vue';
import { getMenus } from '@/api/home/index';

@Component({
    name: 'home',
    components: {
        search,
    },
})
export default class extends Vue {
    private tableData = [];
    private async search() {
        return false;
    }
    private async init() {
        const { data } = await getMenus();
        this.tableData = data;
    }
    private mounted() {
        this.init();
    }
}
</script>
<style lang="scss" scoped>
.container{
    padding: 1vw 3vw 0;
}
</style>