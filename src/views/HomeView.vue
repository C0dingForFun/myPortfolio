<template>
        <navbar-comp>
            <router-view/>
        </navbar-comp>
        <home-comp/>
        <about-comp/>
        <skills-comp>
                <template #skills >
                    <div id="skills" v-for="skill in displaySkills()" :key="skill">
                        <h2 class="text-center pt-5" data-aos="fade-up"> Skills </h2>
                        <div class="row justify-content-center py-3">
                            <div class="col-lg-4 col-col-md-4 col-sm-12 pb-2 align-content-center">
                                <div class="skills py-4">
                                    <div>
                                        <i :class="skill.programmingSkills[0].iconClass"></i>
                                    </div>
                                    <div>
                                        {{ skill.programmingSkills[0].language }}
                                    </div>
                                    <div>
                                        {{ skill.programmingSkills[0].level }}
                                    </div>   
                                </div>
                                
                                <div>
                                    <i :class="skill.programmingSkills[1].iconClass"></i>
                                </div>
                                <div>
                                    {{ skill.programmingSkills[1].language }}
                                </div>
                                <div>
                                    {{ skill.programmingSkills[1].level }}
                                </div>
                                <div>
                                    <i :class="skill.programmingSkills[0].iconClass"></i>
                                </div>
                                <div>
                                    {{ skill.programmingSkills[0].language }}
                                </div>
                                <div>
                                    {{ skill.programmingSkills[0].level }}
                                </div>
                                <div>
                                    <i :class="skill.programmingSkills[0].iconClass"></i>
                                </div>
                                <div>
                                    {{ skill.programmingSkills[0].language }}
                                </div>
                                <div>
                                    {{ skill.programmingSkills[0].level }}
                                </div>
                            </div>
                            <div class="col-lg-4 col-col-md-4 col-sm-12 pb-2 align-content-center">
                                <div class="skills py-4 mx-auto">
                                    <div>
                                    <i :class="skill.softSkills[0].iconClass"></i>
                                </div>
                                <div>
                                    {{ skill.softSkills[0].softSkill }}
                                </div>
                                <div>
                                    {{ skill.softSkills[0].description }}
                                </div>
                                </div>
                                
                            </div>
                            <div class="skills col-lg-4 col-col-md-4 col-sm-12 pb-2 align-content-center">
                                <div>
                                    <i :class="skill.softSkills[0].iconClass"></i>
                                </div>
                                <div>
                                    {{ skill.softSkills[0].softSkill }}
                                </div>
                                <div>
                                    {{ skill.softSkills[0].description }}
                                </div>
                                <div>
                                    <i :class="skill.softSkills[1].iconClass"></i>
                                </div>
                                <div>
                                    {{ skill.softSkills[1].softSkill }}
                                </div>
                                <div>
                                    {{ skill.softSkills[1].description }}
                                </div>
                                <div>
                                    <i :class="skill.softSkills[2].iconClass"></i>
                                </div>
                                <div>
                                    {{ skill.softSkills[2].softSkill }}
                                </div>
                                <div>
                                    {{ skill.softSkills[2].description }}
                                </div>
                            </div>
                        </div>
            </div>
        </template> 
    </skills-comp>
        <resume-comp/>
        <projects-comp>
            <template #projects>
                <div class="container-fluid pt-5" id="projects" v-if="displayProjects()">
                    <div class="row projects mb-5" >
                        <h2 class="mt-5" data-aos="fade-up">Projects</h2>
                        <div class="row mt-2">
                            <div class=" card mt-3 col-lg-4 col-md-4 col-sm-12" v-for="project in displayProjects()" :key="project" id="projects" data-aos="fade-up" data-aos-delay="300">
                                <img :src="project.image" class="card-img-top" loading="lazy">
                                <div class="card-body">
                                    <h5 class="card-title">{{ project.name }}</h5>
                                    <p class="card-text">{{ project.description }}</p>
                                    <a :href="project.github" target="blank" class="btn">Github</a> 
                                    <a :href="project.vercel" target="blank" class="btn">Live</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <SpinnerComp/>
                </div>
            </template>
        </projects-comp>
        <contact-comp/>
        <footer-comp/>
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue';
import HomeComp from '@/components/HomeComp.vue';
import AboutComp from '@/components/AboutComp.vue';
import ResumeComp from '@/components/ResumeComp.vue';
import SkillsComp from '@/components/SkillsComp.vue';
import ProjectsComp from '@/components/ProjectsComp.vue';
import ContactComp from '@/components/ContactComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
components:{
    NavbarComp,
    HomeComp,
    AboutComp,
    ResumeComp,
    SkillsComp,
    ProjectsComp,
    ContactComp,
    FooterComp,
    SpinnerComp
},
    methods:{
        displaySkills(){
            return this.$store.state.skills
        },
        displayProjects(){
            return this.$store.state.projects
        },
        displayTestimonials(){
            return this.$store.state.testimonials
        }
},
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
<style scoped>
    #position{
        position:static ;
    }
    h2{
        text-align: center;
        color:aliceblue;
    }
    #skills{
        min-height:100vh;
        max-height:auto;
        background-color: #125a3e;
        
    }
    .skills{
        width:15vw;
        height:25vh;
        font-size:100%;
        color:aliceblue;
        background-color: #ffc695;
        margin: auto;
        /* margin:1ch; */
        padding: 0%;
        border-radius:50%;
        transition:1s;
    }
    .skills:hover{
        text-shadow:5px 5px #125a3e;
        cursor:pointer;
        box-shadow:10px 10px 10px 10px rgb(0,0,0,0.5)
    }
    .skills i{
        font-size:5vw;
    }
    #projects{
        margin:auto;
        background-color: #125a3e;
        color:aliceblue;
    }
    #projects .card{
        background-color: #ffc695;
        width:18rem;
        border:none;
        height:23rem;
    }
    #projects .card img{
        width:100%;
        height:20vh;
    }
    .btn{
        background-color: #125a3e;
        margin:0.1em;
        transition: 1s;
        color:aliceblue;
        font-weight: 600;
    }
    .btn:hover{
        background-color: #229668;
        color:#ffc695;
        font-weight: 600;
    }

@media only screen and (max-width:600px){
    .skills{
        width:20vw;
        height:20vh;
    }
}
</style>