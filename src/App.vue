<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script lang='ts' >
import { Vue, Component } from 'vue-property-decorator';

@Component({
    name: 'app',
})
export default class extends Vue {}
</script>
