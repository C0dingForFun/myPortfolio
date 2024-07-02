<template>
    <div class="container-fluid overflow-x-hidden" id="resume">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 align-content-center" id="green">
                
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 align-content-center" id="peach">
                <img src="https://c0dingforfun.github.io/portfolioimg/Images/Landing/myLanding.png" class="rounded"/>
            </div>
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
        color:aliceblue;
    }
    /* #pic img{
        width:48%;
        height:auto;
    } */
    #peach{
        min-height:100vh;
        max-height: auto;
        background-color: #ffc695;
        color:aliceblue;
        
    }
</style>