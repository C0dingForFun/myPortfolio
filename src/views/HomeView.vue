<template>
        <navbar-comp>
            <router-view/>
        </navbar-comp>
        <section class="overflow-x-hidden">
            <home-comp/>
        </section>
</template>
<script>
import NavbarComp from '@/router/NavbarComp.vue';
import HomeComp from '@/components/HomeComp.vue';
export default {
    components:{
        NavbarComp,
        HomeComp
    }
}
</script>
<style scoped>
    section{
        padding:100px 10%;
    }
</style>