<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <div class="app-title" :class="sidebar.opened?'':'hidden'">
            <div class="imgBox">
                <img class="titleImg" :src="require('@/assets/logo-sm.jpeg')" width="30" height="30" alt="">
                <span class="SystemTitle">伟大的袁常</span>
            </div>
        </div>
        <el-menu
            :collapse="isCollapse"
            mode="vertical"
            :unique-opened="true"
            :collapse-transition="false"

            :background-color="theme.menuBg"
            :text-color="theme.menuText"
            :active-text-color="theme.menuActiveText"
        >
            <sidebar-item
                v-for="route in routes"
                :key="route.path"
                :item="route"
                :base-path="route.path"
                :is-collapse="isCollapse"
            >
            </sidebar-item>
        </el-menu>
    </el-scrollbar>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { AppModule } from '@/store/modules/app';
import { ThemeModule } from '@/store/modules/theme';
import SidebarItem from './SidebarItem.vue';

@Component({
    name: 'Sidebar',
    components: {
        SidebarItem,
    },
})
export default class extends Vue {
    get sidebar() {
        return AppModule.sidebar;
    }
    get theme() {
        return ThemeModule;
    }
    get isCollapse() {
        return !this.sidebar.opened;
    }
    get routes() {
        return (this.$router as any).options.routes;
    }
}
</script>

<style lang="scss">
.sidebar-container {
    // reset element-ui css
    .horizontal-collapse-transition {
        transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    }

    .scrollbar-wrapper {
        overflow-x: hidden !important;
    }

    .el-scrollbar__view {
        height: 100%
    }

    .el-scrollbar__bar {
        &.is-vertical {
            right: 0px;
        }

        &.is-horizontal {
            display: none;
        }
    }
}
</style>

<style lang="scss" scoped>
.app-title{
    overflow: hidden;
    background-color: #2b2f3a;
    white-space: nowrap;
    color: white;
    margin: 0;
    width: 210px;
    height: 50px;
    left: 0;
    top: 0;
    transition: width 0.28s;
    @media screen and (max-width: 991px) {
        width: 54px;
    }
    .imgBox {
        height: 100%;
        display: flex;
        align-items: center;
        text-align: center;
        .titleImg {
            margin: 0 12px;
        }
        .SystemTitle {
            font-size: 17px;
        }
    }
}
.hidden {
    width:54px
}
.el-scrollbar {
    height: 100%
}

.el-menu {
    border: none;
    min-height: calc(100vh - 50px);
    width: 100% !important;
}
</style>
