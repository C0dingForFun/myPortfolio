<template>
    <div class="container-fluid" id="home">
        <div class="row" style="width:100vw">
            <div class="col-lg-6 col-md-6 col-sm-12 align-content-center" id="pic">
                <h4 data-aos="fade-up">Hi there, I am ...</h4> 
                <h1 data-aos="fade-up" data-aos-delay="500"><b>Gwiba Mabandla</b></h1>
                <h4 data-aos="fade-up" data-aos-delay="1000">I am an aspiring Software Developer.</h4>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 align-content-center" id="text">
                <img src="https://c0dingforfun.github.io/portfolioimg/Images/Landing/myLanding.png" class="rounded" data-aos="fade-up" />
            </div>
        </div>
    </div>
   
</template>
<script>
export default {

}
</script>
<style scoped>
    #pic{
        /* width:50vw; */
        min-height:100vh;
        max-height: auto;
        background-color:#ffc695;
        color:aliceblue;
    }
    #text img{
        width:48%;
        height:auto;
        box-shadow:8px 8px 8px rgb(0,0,0,0.5);
    }
    #text{
        /* width:49vw; */
        min-height:100vh;
        max-height: auto;
        background-color: #125a3e;
        color:aliceblue;
        box-shadow:8px 8px 8px rgb(0,0,0,0.5);
        z-index:1;
    }
</style>