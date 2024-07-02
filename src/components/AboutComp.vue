<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 align-content-center" id="pic">
                <img src="https://c0dingforfun.github.io/portfolioimg/Images/Me/Me.png" class="rounded"/>
            </div>
            <div v-for="myDescription in displayAboutMe()" :key="myDescription" class="col-lg-6 col-md-6 col-sm-12 align-content-center text-white" id="text">
                <div class="text-start mx-auto" style="width:300px;">
                    <h5>Discover</h5>
                    <h2><b>About Me</b></h2>
                    <p>{{myDescription.me}}</p> 
                    <div class="row justify-content-between extra-info">
                        <div class="col-6">
                            <p>Name: {{ myDescription.name }}</p>
                        </div>
                        <div class="col-6">
                            <p>Age: {{ myDescription.age }}</p>
                        </div>
                    </div> 
                </div>
                
                
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
        getData(){
           return this.$store.dispatch('getData')
        }
    },
    mounted(){
        this.getData
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
    h5{
        color:#125a3e; 
    }
    .extra-info{
        width:400px;
        border:solid 2px #125a3e
    }
</style>