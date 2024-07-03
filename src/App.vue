<template>
  <NavBarComp/>
    <router-view/>
  <NavBarComp/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
body{
  overflow-x:hidden;
}
#app {
  font-family: "Comic Neue", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
