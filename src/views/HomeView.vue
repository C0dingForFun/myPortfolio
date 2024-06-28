<template>
    <div class="container-fluid">
        <navbar-comp>
            <router-view/>
        </navbar-comp>
        <section class="overflow-x-hidden">
            <home-comp/>
        </section>
    </div>
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
    .container-fluid{
        background: teal;
    }
</style>