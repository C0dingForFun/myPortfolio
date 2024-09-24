<template>
        <navbar-comp>
            <router-view/>
        </navbar-comp>
        <home-comp/>
        <about-comp/>
        <skills-comp>
                <template #skills >
                    <div id="skills" v-for="skill in displaySkills()" :key="skill.id">
                        <div class="text-center pt-5 mb-5" data-aos="fade-up"> </div>
                        <div class="row justify-content-center py-3">
                            <div class="col-lg-5 col-col-md-4 col-sm-12 pb-2 align-content-center">
                                <h3 class="text-white text-center mb-5" data-aos="fade-up">Programming Skills</h3>
                                <div class="row">
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
                                   <div class="skills py-4">
                                       <div>
                                           <i :class="skill.programmingSkills[1].iconClass"></i>
                                       </div>
                                       <div>
                                           {{ skill.programmingSkills[1].language }}
                                       </div>
                                       <div>
                                           {{ skill.programmingSkills[1].level }}
                                       </div>
                                   </div> 
                                   <div class="skills py-4">
                                       <div>
                                           <i :class="skill.programmingSkills[2].iconClass"></i>
                                       </div>
                                       <div>
                                           {{ skill.programmingSkills[2].language }}
                                       </div>
                                       <div>
                                           {{ skill.programmingSkills[2].level }}
                                       </div>
                                   </div>
                                   <div class="skills py-4">
                                       <div>
                                           <i :class="skill.programmingSkills[3].iconClass"></i>
                                       </div>
                                       <div>
                                           {{ skill.programmingSkills[3].language }}
                                       </div>
                                       <div>
                                           {{ skill.programmingSkills[3].level }}
                                       </div>
                                   </div>
                                </div>
                            </div>
                            <div class="col-lg-5 col-col-md-4 col-sm-12 pb-2 align-content-center">
                                <h3 class="text-white text-center mb-5" data-aos="fade-up">Soft Skills</h3>
                                <div class="row">
                                    <div class="skills">
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
                                    <div class="skills">
                                        <div>
                                            <i :class="skill.softSkills[1].iconClass"></i>
                                        </div>
                                        <div>
                                            {{ skill.softSkills[1].softSkill }}
                                        </div>
                                        <div>
                                            {{ skill.softSkills[1].description }}
                                        </div>
                                    </div>
                                    <div class="skills">
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
                                    <div class="skills">
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
                        </div>
            </div>
        </template> 
    </skills-comp>
        <resume-comp/>
        <projects-comp>
            <template #projects>
                <div class="pb-4 pt-5" v-if="displayProjects()" id="projects">
                    <h2 class="mb-2 mt-5" data-aos="fade-up">Projects</h2>
                    <div class="container-fluid pt-5" id="project" >
                            <div class="row mt-2" v-for="project in displayProjects()" :key="project.id">
                                <div class="card mt-3 col-lg-4 col-md-4 col-sm-12 mx-2" data-aos="fade-up">
                                    <img :src="project.image" class="card-img-top pt-2" loading="lazy">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ project.name }}</h5>
                                        <p class="card-text">{{ project.description }}</p>
                                        <a :href="project.github" target="blank" class="btn">Github</a> 
                                        <a :href="project.live" target="blank" class="btn">Live</a>
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
        background-color: #125a3e;
        
    }
    .skills{
        width:15vw;
        height:25vh;
        font-size:100%;
        color:aliceblue;
        background-color: #ffc695;
        margin: auto;
        padding: 0%;
        border-radius:50%;
        transition:1s;
    }
    .skills:hover{
        text-shadow:5px 5px #125a3e;
        cursor:pointer;
        box-shadow:8px 8px 8px 10px rgb(0,0,0,0.5)
    }
    .skills i{
        font-size:5vw;
    }
    #projects{
        background-color: #125a3e;
    }
    #project {
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
        margin:auto;
        width:100vw;
    }
    #projects .card{
        background-color: #ffc695;
        color:aliceblue;
        width:18rem;
        border:none;
        height:23rem;
        transition:0.6s;
    }
    #projects .card:hover{
        background-color: #229668;
        cursor: pointer;
        box-shadow:1px 8px 8px 8px rgb(0,0,0,0.5);
    }
    #projects h2{
        margin-top:5vh;
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
        background-color: #ffc695;
        color:aliceblue;
        font-weight: 600;
    }

@media only screen and (max-width:800px){
    #projects {
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
        margin:auto;
        width:100vw;
    }
}
@media only screen and (max-width:600px){
    .skills{
        width:20vw;
        height:20vh;
    }
    #projects {
        display:grid;
        grid-template-columns: repeat(1, 1fr);
        place-items: center;
        margin:auto;
        width:100vw;
    }
}
</style>