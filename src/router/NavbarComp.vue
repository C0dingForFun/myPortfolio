<template>   
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/">Education</router-link> |
        <router-link to="/">Projects</router-link> |
        <router-link to="/">Contact</router-link> |
        <router-link to="/">Testimonials</router-link>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    nav {
    padding: 30px;
}

nav a {
  font-weight: bold;
  color: black;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>