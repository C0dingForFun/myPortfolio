<template>
        <navbar-comp>
            <router-view/>
        </navbar-comp>
        <home-comp/>
        <about-comp/>
        <resume-comp/>
        <!-- <skills-comp>
                <template #skills>
                    <section class="skills">
                    <h2 class="text-center" data-aos="zoom-in"> Skills </h2>
                    <div class="row justify-content-evenly mt-5">
                      <div id="html" class="col-lg-4 col-md-6 col-sm-12 skills " data-aos="zoom-in">
                        <i class="lab la-html5"></i>
                        <h3>HTML5</h3>
                        <p>Advanced</p>
                      </div>
                      <div id="css" class="col-lg-4 col-md-6 col-sm-12 skills" data-aos="zoom-in" data-aos-delay="500">
                        <i class="lab la-css3-alt"></i>
                        <h3>CSS3</h3>
                        <p>Advanced</p>
                      </div>
                      <div id="git" class="col-lg-4 col-md-6 col-sm-12 skills" data-aos="zoom-in" data-aos-delay="1000"> 
                        <i class="lab la-git"></i>
                        <h3>Git</h3>
                        <p>Advanced</p>
                      </div>
                      <div id="bootstrap" class="col-lg-4 col-md-6 col-sm-12 skills" data-aos="zoom-in" data-aos-delay="1500">
                        <i class="lab la-bootstrap"></i>
                        <h3>Bootstrap3</h3>
                        <p>Intermediate</p>
                      </div>
    
                      <div class="row justify-content-evenly mt-5 mt-3">
                        <div id="team"  class="col-lg-4 col-md-6 col-sm-12 skills" data-aos="zoom-in" data-aos-delay="500">                  
                          <i class="las la-users"></i>
                          <h3>Team Player</h3>
                         <p>I love working in groups</p>
                        </div>
                        <div id="ears" class="col-lg-4 col-md-6 col-sm-12 skills" data-aos="zoom-in" data-aos-delay="1000">                  
                          <i class="las la-assistive-listening-systems"></i>
                          <h3>Good Listener</h3>
                          <p>I enjoy listening to others.</p>
                        </div>
                        <div id="mobile" class="col-lg-4 col-md-6 col-sm-12 skills" data-aos="zoom-in" data-aos-delay="1500">                  
                          <i class="las la-mobile"></i>
                          <h3>Responsive</h3>
                          <p>Advanced at creating responsiveness</p>
                        </div>
                        <div id="microphone" class="col-lg-4 col-md-6 col-sm-12 skills" data-aos="zoom-in" data-aos-delay="4000">                  
                          <i class="las la-microphone"></i>
                          <h3>Communicate</h3>
                          <p>I am not afraid to voice my opinions.</p>
                        </div>
                      </div>
                    </div>
                </section>
                </template> -->
            <!-- </skills-comp> -->
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue';
import HomeComp from '@/components/HomeComp.vue';
import AboutComp from '@/components/AboutComp.vue';
import ResumeComp from '@/components/ResumeComp.vue';
// import SkillsComp from '@/components/SkillsComp.vue';
export default {
    components:{
        NavbarComp,
        HomeComp,
        AboutComp,
        ResumeComp,
        // SkillsComp
    }
}
</script>
<style scoped>
    h2{
        color:aliceblue;
    }
    section{
        min-height:100vh;
        max-height:auto;
    }
    .skills{
        
        background-color: #125a3e;
    }
</style>