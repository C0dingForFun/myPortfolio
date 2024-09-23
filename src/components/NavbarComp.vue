<template>   
    <nav class="navbar navbar-expand-lg fixed-top shadow">
                <div class="container-fluid">
                    <img src="https://c0dingforfun.github.io/portfolioimg/Images/Logo/Logo.png" alt="My Logo" loading="lazy">
                    <button class="navbar-toggler mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">                    
                      <span class="text-white p-2" style="font-size:30px;">&#9776;</span>                      
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style="width:50vw;background-color: rgb(18, 120, 62,0.8);">
                      <div class="offcanvas-header">
                        <img src="https://c0dingforfun.github.io/portfolioimg/Images/Logo/Logo.png" alt="My Logo" loading="lazy">
                        <button type="button" class="btn-close bg-white pt-2" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                      </div>
                      <div class="offcanvas-body text-center">                   
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-5 p-3 f-3">                     
                          <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#home"> <button data-bs-dismiss="offcanvas" aria-label="Close">Home</button></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#about"> <button data-bs-dismiss="offcanvas" aria-label="Close">About</button></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#resume"> <button data-bs-dismiss="offcanvas" aria-label="Close">Education & Experience</button></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#projects"> <button data-bs-dismiss="offcanvas" aria-label="Close">Projects</button></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#contact"> <button data-bs-dismiss="offcanvas" aria-label="Close">Contact</button></a>
                          </li>                     
                        </ul>                    
                      </div>
                    </div>
                  </div>
              </nav>       
</template>
<script>

export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeMount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const nav = document.getElementsByClassName('navbar')[0];
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  }
}
</script>
<style scoped>
    nav {
      background-color:transparent;
    }
    nav a button{
        font-weight: bold;
        border: none;
        background: none;
        font-size:25px;
        color:white;
        text-decoration: none;
        transition: 1s;
    }
    nav a button:hover{
        color:white;
        text-shadow:4px 4px black;
    }
    .nav-item .nav-link a button.active{
        color:black !important;
        text-shadow:4px 4px black;
    }
    nav img{
      width:60px;
      height:60px;
      filter: drop-shadow(3px 3px #229668);
    }
    .navbar.scrolled{
      background-color: #229668;
      transition: 0.8s;
    }

</style>