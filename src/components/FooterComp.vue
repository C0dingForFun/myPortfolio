<template>
    <footer>
        <div class="text-center footer">
            <div class="pt-2">
                <h2>LET'S GET IN TOUCH</h2>
            </div>
            <div>
                <i class="lab la-github"></i>
                <i class="lab la-linkedin"></i>
                <i class="lab la-behance"></i>
            </div>
        </div>
        <div class="dark  text-center">
            All Rights Reserved © Gwiba Mabandla
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    footer{
        height:auto;
        color:aliceblue;
    }
    .footer{
        height:15vh;
        background-color:#104a33;
        
    }
    .dark{
        height:4vh;
        background-color:#082419;
    }
    i{
        font-size:35px;
        padding:1ch;
        width:38px;
        background-color: transparent;

    }
    .la-github{
        transition: 1s;
    }
    .la-linkedin{
        transition: 1s;
    }
    .la-behance{
        transition: 1s;
    }
    .la-github:hover{
        cursor: pointer;
        color:darkgrey;
        width:38px;
        background-color: aliceblue;
        border-radius:50%;
    }
    .la-linkedin:hover{
        cursor: pointer;
        color:blue;
        width:38px;
        background-color: aliceblue;
        border-radius:50%;
    }
    .la-behance:hover{
        cursor: pointer;
        color:lightblue;
        width:38px;
        background-color: aliceblue;
        border-radius:50%;
    }
</style>