<template>
    <footer>
        <div class="text-center footer">
            <div class="pt-2">
                <h2>LET'S GET IN TOUCH</h2>
            </div>
            <div class="text-decoration-none">
                <a href="https://github.com/C0dingForFun?tab=repositories" target="blank"><i class="lab la-github"></i></a>
                <a href="https://www.linkedin.com/in/gwiba-mabandla-314326293" target="blank"><i class="lab la-linkedin"></i></a>
                <a href="https://www.behance.net/gwibantulini/projects" target="blank"><i class="lab la-behance"></i></a>
            </div>
        </div>
        <div class="dark text-center">
            All Rights Reserved<i class="las la-copyright pt-1"></i>Gwiba Mabandla {{ year() }}
        </div>
    </footer>
</template>
<script>
export default {
    methods:{
        year(){
            const y = new Date();
            return y.getFullYear();
        }
    }
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
        color:rgb(129, 122, 122);
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
        color:#11f1fd;
        width:38px;
        background-color: aliceblue;
        border-radius:50%;
    }
    .la-copyright{
        font-size: 18px;
    }
    a i{
        color:aliceblue;
    }
    @media only screen and (max-width:600px){
        .footer{
            padding-top:5px;
            height:15vh;
            background-color:#104a33; 
        }
        .dark{
            height:5vh;
            font-size:12px;
         }
    }
</style>