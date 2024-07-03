<template>
        <navbar-comp>
            <router-view/>
        </navbar-comp>
        <home-comp/>
        <about-comp/>
        <resume-comp/>
        <skills-comp>
                <template #skills>
                    <div id="skills">
                        <h2 class="text-center pt-5" data-aos="fade-up"> Skills </h2>
                        <div class="row justify-content-evenly mt-5">
                          <div id="html" class="col-lg-3 col-md-6 col-sm-12 skills align-content-center align-content-center" data-aos="zoom-in">
                            <i class="lab la-html5"></i>
                            <h3>HTML5</h3>
                            <p>Advanced</p>
                          </div>
                          <div id="css" class="col-lg-4 col-md-6 col-sm-12 skills align-content-center" data-aos="zoom-in" data-aos-delay="500">
                            <i class="lab la-css3-alt"></i>
                            <h3>CSS3</h3>
                            <p>Advanced</p>
                          </div>
                          <div id="git" class="col-lg-4 col-md-6 col-sm-12 skills align-content-center" data-aos="zoom-in" data-aos-delay="1000"> 
                            <i class="lab la-git"></i>
                            <h3>Git</h3>
                            <p>Advanced</p>
                          </div>
                          <div id="bootstrap" class="col-lg-6 col-md-6 col-sm-12 skills align-content-center" data-aos="zoom-in" data-aos-delay="1500">
                            <i class="lab la-bootstrap"></i>
                            <h3>Bootstrap3</h3>
                            <p>Intermediate</p>
                          </div>
        
                          <div class="row justify-content-evenly mt-5 mt-3">
                            <div id="team"  class="col-lg-4 col-md-6 col-sm-12 skills align-content-center" data-aos="zoom-in" data-aos-delay="500">                  
                              <i class="las la-users"></i>
                              <h3>Team Player</h3>
                             <p>I love working in groups</p>
                            </div>
                            <div id="ears" class="col-lg-4 col-md-6 col-sm-12 skills align-content-center" data-aos="zoom-in" data-aos-delay="1000">                  
                              <i class="las la-assistive-listening-systems"></i>
                              <h3>Good Listener</h3>
                              <p>I enjoy listening to others.</p>
                            </div>
                            <div id="mobile" class="col-lg-4 col-md-6 col-sm-12 skills align-content-center" data-aos="zoom-in" data-aos-delay="1500">                  
                              <i class="las la-mobile"></i>
                              <h3>Responsive</h3>
                              <p>Advanced at creating responsiveness</p>
                            </div>
                            <div id="microphone" class="col-lg-6 col-md-6 col-sm-12 skills align-content-center" data-aos="zoom-in" data-aos-delay="4000">                  
                              <i class="las la-microphone"></i>
                              <h3>Communicate</h3>
                              <p>I am not afraid to voice my opinions.</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </template> 
            </skills-comp>
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue';
import HomeComp from '@/components/HomeComp.vue';
import AboutComp from '@/components/AboutComp.vue';
import ResumeComp from '@/components/ResumeComp.vue';
import SkillsComp from '@/components/SkillsComp.vue';
export default {
    components:{
        NavbarComp,
        HomeComp,
        AboutComp,
        ResumeComp,
        SkillsComp
    }
}
</script>
<style scoped>
    h2{
        color:aliceblue;
    }
    #skills{
        min-height:100vh;
        max-height:auto;
        background-color: #125a3e;
    }
    .skills{
        width:210px;
        height:210px;
        font-size:18px;
        color:aliceblue;
        background-color: #ffc695;
        border-radius:50%;
        z-index:0;
        box-shadow: none;
        text-align: center;
        transition:1s;
    }
    .skills i{
        font-size:50px;
    }

    #html:hover{
        box-shadow: 2px 3px red;
        text-shadow:2px 2px red ;
        transition: 1s;
    }

    #css:hover{
        box-shadow: 2px 3px dodgerblue;
        text-shadow:2px 2px dodgerblue;
        transition: 1s;
    }

    #git:hover{
        box-shadow: 2px 3px orangered;
        text-shadow:2px 2px orangered;
        transition: 1s;
    }

    #bootstrap:hover{
        box-shadow: 2px 3px purple;
        text-shadow:2px 2px purple;
        transition: 1s;
    }

    #team:hover{
        box-shadow: 2px 3px blue;
        text-shadow:2px 2px blue;
        transition: 1s;
    }

    #ears:hover{
        box-shadow: 2px 3px yellowgreen;
        text-shadow:2px 2px yellowgreen;
        transition: 1s;
    }

    #mobile:hover{
        box-shadow: 2px 3px brown;
        text-shadow:2px 2px brown;
        transition: 1s;
    }

    #microphone:hover{
        box-shadow: 2px 3px #696969;
        text-shadow:2px 2px #696969;
        transition: 1s;
    }

    .skills:hover{
        cursor:pointer;
        transition: 1s;
    }

    .skills:hover > .la-html5{
        cursor: pointer;
        color:red;
        background-color: white;
        border-radius:50%;
        box-shadow: 2px 3px red;
    }

    .skills:hover > .la-css3-alt{
        cursor: pointer;
        color:dodgerblue;
        background-color: white;
        border-radius:50%;
        box-shadow: 2px 3px dodgerblue;
    }

    .skills:hover > .la-git{
        cursor: pointer;
        color:orangered;
        background-color: white;
        border-radius:50%;
        box-shadow: 2px 3px orangered;
    }

    .skills:hover > .la-bootstrap{
        cursor: pointer;
        color:purple;
        background-color: white;
        border-radius:50%;
        box-shadow: 2px 3px purple;
    }

    .skills:hover > .la-users{
        cursor: pointer;
        color:blue;
        background-color: white;
        border-radius:50%;
        box-shadow: 2px 3px blue;
    }

    .skills:hover > .la-assistive-listening-systems{
        cursor: pointer;
        color:yellowgreen;
        background-color: white;
        border-radius:50%;
        box-shadow: 2px 3px yellowgreen;
    }

    .skills:hover > .la-mobile{
        cursor: pointer;
        color:brown;
        background-color: white;
        border-radius:50%;
        box-shadow: 2px 3px brown;
    }

    .skills:hover > .la-microphone{
        cursor: pointer;
        color:#696969;
        background-color: white;
        border-radius:50%;
        box-shadow: 2px 3px #696969;
    }
</style>