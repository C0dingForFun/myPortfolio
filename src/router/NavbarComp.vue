<template>   
    <nav class="navbar navbar-expand-lg fixed-top shadow d-flex justify-content-end">
        <div class="navbar-nav">
            <router-link to="#home">Home</router-link>
            <router-link to="#about">About</router-link>
            <router-link to="#education">Education</router-link>
            <router-link to="#projects">Projects</router-link>
            <router-link to="#testimonials">Testimonials</router-link>
            <router-link to="#contact">Contact</router-link> 
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    nav {
        padding: 30px;
        background-color: green;
    }

    nav a {
        padding: 10px;
        font-weight: bold;
        font-size:20px;
        color:white;
        text-decoration: none;
        transition: 1s;
    }
    nav a:hover{
        text-shadow:5px 5px black;
    }

    /* nav a.router-link-exact-active {
        color: #42b983;
    } */

    /* #home{}
    #about{}
    #projects{}
    #education{}
    #testimonials{}
    #contact{} */

</style>