<template>
    <div class="container-fluid overflow-x-hidden align-content-center" id="resume">
        <div class="row mt-3">
            <div class="col-lg-1 col-md-1"></div>
            <div class="col-lg-5 col-md-5 col-sm-12">
                <div class="education">
                    <div class="row">
                        <div class="col-1 timeline">
                            <img src="" alt="">
                        </div>
                        <div class="col-11">
                            <div>hdh</div>
                            <div>hdh</div>
                            <div>hdh</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-5 col-sm-12">
                <div class="experience">
                    <div class="row">
                        <div class="col-1">
                            |
                        </div>
                        <div class="col-11">
                            <div>hdh</div>
                            <div>hdh</div>
                            <div>hdh</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-1 col-md-1"></div>
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
        width:500px;
        height:500px;
        background-color: #125a3e;
        color:aliceblue;
    }
    .experience{
        width:500px;
        height:500px;
        background-color: #125a3e;
        color:aliceblue;
        margin-left:5px;
    }
    .timeline img{
        width:auto;
        height:100%;
    }
</style>