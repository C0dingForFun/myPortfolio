<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 align-content-center" id="pic">
               <h2>MXM</h2> 
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 align-content-center" id="text">
                <h2>Text</h2> 
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
        min-height:100vh;
        max-height: auto;
        background-color:#125a3e;
        color:aliceblue;
    }
    #text{
        min-height:100vh;
        max-height: auto;
        background-color: #ffc695;
        color:aliceblue;
        
    }
    #landing{
        z-index:0;
        position:absolute;
        left:0;
        right:0;
        bottom:90px;
        width:80vw;
        height:200px;
        background-color: rgb(0,0,0,0.5);
    }
</style>