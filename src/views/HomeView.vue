<template>
        <navbar-comp>
            <router-view/>
        </navbar-comp>
        <home-comp/>
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue';
import HomeComp from '@/components/HomeComp.vue';
export default {
    components:{
        NavbarComp,
        HomeComp
    }
}
</script>
<style scoped>
    
</style>