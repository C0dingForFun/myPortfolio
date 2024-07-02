<template>
    <div class="container-fluid" id="resume">
        <div div="row">
            <div class="col-lg-6 col-md-6 col-sm-12 align-content-center" id="green">
               <h2>hi</h2> 
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 align-content-center" id="peach">
               <h2>hello</h2> 
            </div>
            <!-- <div class="col-lg-3 col-md-3 col-sm-12 align-content-center" id="green">hola</div>
            <div class="col-lg-3 col-md-3 col-sm-12 align-content-center" id="peach">molo</div> -->
            <!-- <h2>Resume</h2> -->
        </div>
    </div>
</template>
<script>
export default {
    // methods:{
    //     displayAboutMe(){
    //         return this.$store.state.aboutMe
    //     }
    // },
    // computed:{
    //     getData(){
    //        return this.$store.dispatch('getData')
    //     }
    // },
    // mounted(){
    //     this.getData
    // }
}
</script>
<style>
    /* #resume{
        min-height:100vh;
        max-height: auto;
        /* background-color: #ffc695; 
        color:aliceblue;
    } */
    #green{
        min-height:100vh;
        max-height: auto;
        background-color:#125a3e;
    }
    #peach{
        min-height:100vh;
        max-height: auto;
        background-color:#ffc695;
    }
    h2{
        color:aliceblue;
    }
</style>