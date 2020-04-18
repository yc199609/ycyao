<template>
    <el-card class="card">
        <el-form :inline="true">
            <el-row type="flex" justify="space-between" >
                <el-form-item label="商品分类">
                    <el-cascader size="small" :options="deviceTypes" :show-all-levels="false"></el-cascader>
                </el-form-item>

                <el-form-item label="品牌" >
                    <el-select size="small" filterable v-model="value">
                        <el-option
                            v-for="(item,index) in selects"
                            :key="index"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="商品来源">
                    <el-select size="small" v-model="value">
                        <el-option
                            v-for="(item,index) in selects"
                            :key="index"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="定价状态(单页)">
                    <el-select size="small" v-model="value">
                        <el-option
                            v-for="(item,index) in selects"
                            :key="index"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>

            </el-row>
            <el-row type="flex" justify="space-between">
                <el-form-item label="商品ID">
                    <el-input
                        class="input"
                        size="small"
                        v-model="keyword" 
                        :clearable="true" 
                        placeholder="请输入内容"
                    />
                </el-form-item>

                <el-form-item label="商品名称">
                    <el-input
                        class="input"
                        size="small"
                        v-model="keyword" 
                        :clearable="true" 
                        placeholder="请输入内容"
                    />
                </el-form-item>
            
                <el-form-item style="flex:2;">
                    <el-button
                        type="success"
                        icon="el-icon-search" 
                        plain
                        size="small"
                        @click="hanleClick('search')"
                    >搜索</el-button>
                    <el-button
                        type="primary"
                        plain
                        size="small"
                        icon="el-icon-refresh"
                        @click="hanleClick('search')"
                    >重置</el-button>
                </el-form-item>
            </el-row>
        </el-form>
    </el-card>
</template>

<script lang='ts' >
import { Vue, Component, Prop } from 'vue-property-decorator';

export enum Type {
    primary = 'primary',
    success = 'success',
    info = 'info',
    warning = 'warning',
    danger = 'danger',
    normal = '',
}

export interface Option {
    title: string;
    emit: string;
    type: Type;
    icon: string;
}

@Component({
    name: 'SearchBar',
})
export default class extends Vue {
    @Prop({ default: () => ([])}) private options!: Option[];
    @Prop({default: false}) private hiddenSearch!: boolean;
    @Prop({default: false}) private hiddenInput!: boolean;

    private keyword: string = '';
    private value: number = 1;
    private deviceTypes = [
        {
            value: 'zhinan',
            label: '指南',
            children: [
                {
                    value: 'shejiyuanze',
                    label: '设计原则',
                    children: [
                        {
                            value: 'yizhi',
                            label: '一致',
                        },
                        {
                            value: 'fankui',
                            label: '反馈',
                        },
                        {
                            value: 'xiaolv',
                            label: '效率',
                        },
                        {
                            value: 'kekong',
                            label: '可控',
                        },
                    ],
                },
                {
                    value: 'daohang',
                    label: '导航',
                    children: [
                        {
                            value: 'cexiangdaohang',
                            label: '侧向导航',
                        },
                        {
                            value: 'dingbudaohang',
                            label: '顶部导航',
                        },
                    ],
                },
            ],
        },
        {
            value: 'zujian',
            label: '组件',
            children: [
                {
                    value: 'basic',
                    label: 'Basic',
                    children: [
                        {
                            value: 'layout',
                            label: 'Layout 布局',
                        },
                        {
                            value: 'color',
                            label: 'Color 色彩',
                        },
                        {
                            value: 'typography',
                            label: 'Typography 字体',
                        },
                        {
                            value: 'icon',
                            label: 'Icon 图标',
                        },
                        {
                            value: 'button',
                            label: 'Button 按钮',
                        },
                    ],
                },
                {
                    value: 'form',
                    label: 'Form',
                    children: [
                        {
                            value: 'radio',
                            label: 'Radio 单选框',
                        },
                        {
                            value: 'checkbox',
                            label: 'Checkbox 多选框',
                        },
                        {
                            value: 'input',
                            label: 'Input 输入框',
                        },
                        {
                            value: 'input-number',
                            label: 'InputNumber 计数器',
                        },
                        {
                            value: 'select',
                            label: 'Select 选择器',
                        },
                        {
                            value: 'cascader',
                            label: 'Cascader 级联选择器',
                        },
                        {
                            value: 'switch',
                            label: 'Switch 开关',
                        },
                        {
                            value: 'slider',
                            label: 'Slider 滑块',
                        },
                        {
                            value: 'time-picker',
                            label: 'TimePicker 时间选择器',
                        },
                        {
                            value: 'date-picker',
                            label: 'DatePicker 日期选择器',
                        },
                        {
                            value: 'datetime-picker',
                            label: 'DateTimePicker 日期时间选择器',
                        },
                        {
                            value: 'upload',
                            label: 'Upload 上传',
                        },
                        {
                            value: 'rate',
                            label: 'Rate 评分',
                        },
                        {
                            value: 'form',
                            label: 'Form 表单',
                        },
                    ],
                },
                {
                    value: 'data',
                    label: 'Data',
                    children: [
                        {
                            value: 'table',
                            label: 'Table 表格',
                        },
                        {
                            value: 'tag',
                            label: 'Tag 标签',
                        },
                        {
                            value: 'progress',
                            label: 'Progress 进度条',
                        },
                        {
                            value: 'tree',
                            label: 'Tree 树形控件',
                        },
                        {
                            value: 'pagination',
                            label: 'Pagination 分页',
                        },
                        {
                            value: 'badge',
                            label: 'Badge 标记',
                        },
                    ],
                },
                {
                    value: 'notice',
                    label: 'Notice',
                    children: [
                        {
                            value: 'alert',
                            label: 'Alert 警告',
                        },
                        {
                            value: 'loading',
                            label: 'Loading 加载',
                        },
                        {
                            value: 'message',
                            label: 'Message 消息提示',
                        },
                        {
                            value: 'message-box',
                            label: 'MessageBox 弹框',
                        },
                        {
                            value: 'notification',
                            label: 'Notification 通知',
                        },
                    ],
                },
                {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [
                        {
                            value: 'menu',
                            label: 'NavMenu 导航菜单',
                        },
                        {
                            value: 'tabs',
                            label: 'Tabs 标签页',
                        },
                        {
                            value: 'breadcrumb',
                            label: 'Breadcrumb 面包屑',
                        },
                        {
                            value: 'dropdown',
                            label: 'Dropdown 下拉菜单',
                        },
                        {
                            value: 'steps',
                            label: 'Steps 步骤条',
                        },
                    ],
                },
                {
                    value: 'others',
                    label: 'Others',
                    children: [
                        {
                            value: 'dialog',
                            label: 'Dialog 对话框',
                        },
                        {
                            value: 'tooltip',
                            label: 'Tooltip 文字提示',
                        },
                        {
                            value: 'popover',
                            label: 'Popover 弹出框',
                        },
                        {
                            value: 'card',
                            label: 'Card 卡片',
                        },
                        {
                            value: 'carousel',
                            label: 'Carousel 走马灯',
                        },
                        {
                            value: 'collapse',
                            label: 'Collapse 折叠面板',
                        },
                    ],
                },
            ],
        },
        {
            value: 'ziyuan',
            label: '资源',
            children: [
                {
                    value: 'axure',
                    label: 'Axure Components',
                },
                {
                    value: 'sketch',
                    label: 'Sketch Templates',
                },
                {
                    value: 'jiaohu',
                    label: '组件交互文档',
                },
            ],
        },
    ];
    private selects = [
        {
            label: 'llll',
            value: 0,
        },
        {
            label: 'dsds',
            value: 1,
        },
        {
            label: 'dggg',
            value: 2,
        },
    ];

    private hanleClick(emit: string) {
        // 调用父组件中的方法
        try {
            (this.$parent as any)[emit](this.keyword);
        } catch (e) {
            console.error(`调用searchBar的组件中不存在${emit}方法`);
        }
    }
}
</script>
<style lang="scss" scoped>
/deep/ .el-card{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .el-card__body{
        width: 100%;
    }
}
.el-form-item{
    flex: 1;
}
.el-button{
    margin: 0 10px;
    flex: 1;
}
.input{
    width: 150px;
}
</style>
