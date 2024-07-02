<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 align-content-center" id="pic">
                <img src="https://c0dingforfun.github.io/portfolioimg/Images/Landing/myLanding.png" class="rounded"/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 align-content-center text-white" id="text" v-for="myDescription in displayAboutMe()" :key="myDescription">
                <h2>{{myDescription.me}}</h2>

            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        displayAboutMe(){
            return this.$store.state.aboutMe
        }
    },
    computed:{
        getAboutMe(){
           return this.$store.dispatch('getData')
        }
    },
    mounted(){
        this.getData()
    }
}
</script>
<style scoped>
    #pic{
        min-height:100vh;
        max-height: auto;
        background-color:#125a3e;
        color:aliceblue;
    }
    #pic img{
        width:48%;
        height:auto;
    }
    #text{
        min-height:100vh;
        max-height: auto;
        background-color: #ffc695;
        color:aliceblue;
        
    }
</style>