<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12" id="pic">
               <h2>Pic</h2> 
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12" id="text">
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
        background-color:teal;

    }
    #text{
        min-height:100vh;
        max-height: auto;
        background-color: orange;
    }
    .row{
        /* background-color: teal; */
        /* padding:100px 10%; */
    }
</style>