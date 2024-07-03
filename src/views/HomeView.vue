<template>
        <navbar-comp>
            <router-view/>
        </navbar-comp>
        <home-comp/>
        <about-comp/>
        <resume-comp/>
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue';
import HomeComp from '@/components/HomeComp.vue';
import AboutComp from '@/components/AboutComp.vue';
import ResumeComp from '@/components/ResumeComp.vue';
export default {
    components:{
        NavbarComp,
        HomeComp,
        AboutComp,
        ResumeComp
    }
}
</script>
<style scoped>
    
</style>