<template>   
    <nav id="nav" class="navbar navbar-expand-lg fixed-top shadow">
                <div class="container-fluid">
                    <img src="https://c0dingforfun.github.io/portfolioimg/Images/Logo/MyLogo.png" alt="My Logo" height="100px" width="100px" loading="lazy">
                    <button class="navbar-toggler mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">                    
                      <span class="text-white p-2" style="font-size:35px;">&#9776;</span>                      
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style="background-color:#1D1D1D;">
                      <div class="offcanvas-header">
                        <div></div>
                        <button type="button" class="btn-close bg-white pt-2" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                      </div>
                      <div class="offcanvas-body text-center">                   
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 p-3 f-3">                     
                          <li id="n" class="nav-item">
                            <a class="nav-link" aria-current="page" href="#home">Home</a>
                          </li>
                          <li id="n" class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                          </li>
                          <li id="n" class="nav-item">
                            <a class="nav-link" href="#education">Education</a>
                          </li>
                          <li id="n" class="nav-item">
                            <a class="nav-link" href="#projects">Projects</a>
                          </li>
                          <li id="n" class="nav-item">
                            <a class="nav-link" href="#testimonials">Testimonials</a>
                          </li>
                          <li id="n" class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                          </li>                     
                        </ul>                    
                      </div>
                    </div>
                  </div>
              </nav>       
</template>
<script>
export default {
    
}
</script>
<style scoped>
    nav {
        background-color:transparent;
        
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
        color:white;
        text-shadow:4px 4px black;
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