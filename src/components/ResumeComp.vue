<template>
    <div class="container-fluid overflow-x-hidden align-content-center" id="resume">
        <div class="row mt-3">
            <div class="col-lg-5 col-md-5 col-sm-12">
                <div class="education align-content-center">
                    <h2>Pluh</h2>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-12"></div>
            <div class="col-lg-5 col-md-5 col-sm-12">
                <div class="experience align-content-center">
                    <h2>Pluh</h2>
                </div>
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
    #resume{
        min-height:100vh;
        max-height: auto;
        background-color: #ffc695; 
        color:aliceblue;
    }
    .education{
        width:45vw;
        height:60vh;
        background-color: #125a3e;
        color:aliceblue;
    }
    .experience{
        width:45vw;
        height:60vh;
        background-color: #125a3e;
        color:aliceblue;
        margin-left:5px;
    }
</style>