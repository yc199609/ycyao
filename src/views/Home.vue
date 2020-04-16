<template>
    <div>
        home
        <search />
    </div>
</template>

<script lang='ts' >
import { Vue, Component } from 'vue-property-decorator';
import search from '@/components/searchBar.vue';

@Component({
    name: 'home',
    components: {
        search,
    },
})
export default class extends Vue {
    private fn() {
        console.log('dssd');
    }
}
</script>
