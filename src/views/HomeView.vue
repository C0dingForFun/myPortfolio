<template>
    <section>
        <navbar-comp>
            <router-view/>
        </navbar-comp>
    </section>

    <section>
        <home-comp>
            
        </home-comp>

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
<style lang="">
    
</style>