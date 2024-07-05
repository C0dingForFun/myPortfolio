<template>
  <NavBarComp/>
  <router-view/>
  <NavBarComp/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
body{
  overflow-x:hidden;
  width:100vw;
}
#app {
  font-family: "Comic Neue", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x:hidden;
  scroll-behavior: smooth;
}
@media screen {
  
}
</style>
<script>
export default {
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