<template>
    <div>
        home
        <search />
    </div>
</template>

<script lang='ts' >
import { Vue, Component } from 'vue-property-decorator';
import search from '@/components/searchBar.vue';
import { test } from '@/api/home';

@Component({
    name: 'home',
    components: {
        search,
    },
})
export default class extends Vue {
    private async search() {
        const data  = await test();
        console.log(data)
    } 
}
</script>
