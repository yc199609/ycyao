<template>
    <div class="container">
        <search />
        <el-button @click="handleClick">主题</el-button>
    </div>
</template>

<script lang='ts' >
import style from '@/styles/_variable.scss';
import { Vue, Component } from 'vue-property-decorator';
import search from '@/components/searchBar.vue';
import { test } from '@/api/home';
import { ThemeModule } from '@/store/modules/theme';

@Component({
    name: 'home',
    components: {
        search,
    },
})
export default class extends Vue {
    private async search() {
        const data  = await test();
    }
    private handleClick() {
        const param = ThemeModule.currentType === 'light' ? 'dark' : 'light';
        ThemeModule.SetTheme(param);
    }
}
</script>
