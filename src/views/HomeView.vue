<template>
        <navbar-comp>
            <router-view/>
        </navbar-comp>
        <home-comp/>
        <about-comp/>
        <resume-comp/>
        <skills-comp>
                <template #skills >
                    <div id="skills" v-for="skill in displaySkills()" :key="skill">
                        <h2 class="text-center pt-5" data-aos="fade-up"> Skills </h2>
                        <div class="row d-flex justify-content-center py-3">
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills pb-2 align-content-center">
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
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills pb-2 align-content-center">
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
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills pb-2 align-content-center">
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
                        </div>
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills pb-2 align-content-center">
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
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills pb-2 align-content-center">
                                <div>
                                    <i :class="skill.programmingSkills[4].iconClass"></i>
                                </div>
                                <div>
                                    {{ skill.programmingSkills[4].language }}
                                </div>
                                <div>
                                    {{ skill.programmingSkills[4].level }}
                                </div>
                            </div>
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills pb-2 align-content-center">
                                <div>
                                    <i :class="skill.programmingSkills[5].iconClass"></i>
                                </div>
                                <div>
                                    {{ skill.programmingSkills[5].language }}
                                </div>
                                <div>
                                    {{ skill.programmingSkills[5].level }}
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills pb-2 align-content-center">
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
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills pb-2 align-content-center">
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
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills pb-3 align-content-center">
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
            <!-- <section v-if="projects?.length"> -->
            <projects-comp>
                <template #projects >
                    <div class="container-fluid" id="projects">
                        <div class="row gap-2 projects" >
                            <h2>Projects</h2>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="card" style="width: 20rem;" v-for="project in displayProjects()" :key="project" id="projects">
                                    <img :src="project.image" class="card-img-top" loading="lazy">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ project.name }}</h5>
                                        <p class="card-text">{{ project.description }}</p>
                                        <a :href="project.github" target="blank" class="btn btn-primary">Github</a>
                                        <a :href="project.vercel" target="blank" class="btn btn-primary">Live</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </projects-comp>   
        <!-- </section> -->
        <!-- <section v-else class="spinner-border" role="status">Loading Projects...</section> -->
            <contact-comp/>
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue';
import HomeComp from '@/components/HomeComp.vue';
import AboutComp from '@/components/AboutComp.vue';
import ResumeComp from '@/components/ResumeComp.vue';
import SkillsComp from '@/components/SkillsComp.vue';
import ProjectsComp from '@/components/ProjectsComp.vue';
import ContactComp from '@/components/ContactComp.vue';
export default {
    components:{
        NavbarComp,
        HomeComp,
        AboutComp,
        ResumeComp,
        SkillsComp,
        ProjectsComp,
        ContactComp
    },
    methods:{
        displaySkills(){
            return this.$store.state.skills
        },
        displayProjects(){
            return this.$store.state.projects
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
    h2{
        color:aliceblue;
    }
    #skills{
        min-height:100vh;
        max-height:auto;
        background-color: #125a3e;
        
    }
    .skills{
        width:25vw;
        height:28vh;
        font-size:100%;
        color:aliceblue;
        background-color: #ffc695;
        margin:1ch;
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
    .card{
        display:grid;
        grid-template-columns: minmax(auto-fill, repeat(300px 1fr));
        background-color: #125a3e;
        color:aliceblue;
    }
</style>