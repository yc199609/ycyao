<template>
    <section class="app-main">
        <transition
            name="fade-transform"
            mode="out-in"
        >
            <router-view />
        </transition>
    </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
    name: 'AppMain',
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.app-main{
    overflow: hidden;
    min-height: calc(100vh - 50px);
    background-color: #f1f4f5;
}
</style>
