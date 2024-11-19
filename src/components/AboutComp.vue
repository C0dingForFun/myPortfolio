<template>
    <div id="about" v-for="myDescription in displayAboutMe()" :key="myDescription">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 align-content-center" id="pic">
                <img :src='myDescription.image' class="rounded" data-aos="fade-left"/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 align-content-center text-white" id="text">
                <div class="text-start mx-auto me">
                    <h5 data-aos="fade-left">Discover</h5>
                    <h2 data-aos="fade-left" data-aos-delay="100"><b>About Me</b></h2>
                    <p data-aos="fade-left" data-aos-delay="200">{{myDescription.me}}</p> 
                    <div class="row justify-content-between extra-info rounded" data-aos="fade-left" data-aos-delay="400">
                        <div class="col-6">
                            <p> <span>Name:</span> {{ myDescription.name }}</p>
                            <p><span>Hobbies:</span> {{ myDescription.hobbies }}</p>
                        </div>
                        <div class="col-6">
                            <p><span>Age:</span> {{ myDescription.age }}</p>
                            <p><span>Aspiring:</span> {{ myDescription.aspiringToBe }}</p>
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
        box-shadow:8px 8px 8px rgb(0,0,0,0.5);
        z-index:1;
    }
    #pic img{
        width:48%;
        height:auto;
        box-shadow: 8px 8px 8px rgb(0,0,0,0.5);
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
        width:410px;
        background-color:#125a3e;
        box-shadow:10px 10px 10px rgb(0,0,0,0.5); 
    }
    a{
        width:200px;
        height:35px;
        background-color: #ffc695;
        color:aliceblue;
        transition: 1s;
        text-decoration: none;
    }
    a:hover{
        transform: scale(1.05);
        box-shadow: 8px 8px 8px rgb(0,0,0,0.5);
        background-color: black;
    }
    span{
        color:#ffc695;
        font-weight: 900;
    }
    .me{
        width:420px;
    }
    @media only screen and (max-width:600px) {
        #text{
            margin: auto;
        }
        .extra-info{
                width:300px;
                background-color:#125a3e;
                box-shadow:10px 10px 10px rgb(0,0,0,0.5); 
                margin:auto;
            } 
        .me{
            width:300px;
        }
    }
</style>