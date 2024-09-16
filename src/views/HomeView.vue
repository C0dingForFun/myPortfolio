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
        <projects-comp>
            <section v-if="!$store.state.projects" class="spinner-border" role="status">Loading Projects...</section>
            <template #projects >
                <div class="container-fluid" id="projects">
                    <div class="row projects" >
                        <h2>Projects</h2>
                        <div class="row">
                            <div class=" card col-lg-5 col-md- col-sm-12" style="width: 20rem;" v-for="project in displayProjects()" :key="project" id="projects">
                                <img :src="project.image" class="card-img-top" loading="lazy">
                                <div class="card-body">
                                    <h5 class="card-title">{{ project.name }}</h5>
                                    <p class="card-text">{{ project.description }}</p>
                                    <a :href="project.github" target="blank" class="btn btn-dark">Github</a> 
                                    <a :href="project.vercel" target="blank" class="btn btn-dark">Live</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </projects-comp>   
        <testimonials-comp>
            <template #b1>
                <button id="position" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
            </template>
            <template #testimonials>
                <div class="container-fluid align-items-center"  id="testimonials">
                    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                        <h2 class="text">Testimonials</h2>
                        <div class="carousel-inner">
                            <div class="carousel-item testimonials" v-for="(testimonial,index) in displayTestimonials()" :key="testimonial" :class="{'active':index==0}">
                                <div class="row w-100">
                                    <div class="col-2">
                                        <img :src="testimonial.image" class="d-block bg-white">
                                    </div>
                                    <div class="col-10 pt-4">
                                        <span>
                                            <b>{{ testimonial.name }}<br>
                                            {{ testimonial.position }}</b>
                                        </span>
                                    </div>
                                </div>
                                <div class="pt-3">
                                    {{ testimonial.message }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template #b2>
                <button id="position" class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </template>
        </testimonials-comp>
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
export default {
components:{
    NavbarComp,
    HomeComp,
    AboutComp,
    ResumeComp,
    SkillsComp,
    ProjectsComp,
    ContactComp,
    FooterComp
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
        },
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
    #projects > .card{
        background-color: #ffc695;
    }
    #projects{
        margin:auto;
        background-color: #125a3e;
        color:aliceblue;
    }
    #testimonials{
        min-height:80vh;
        max-height:auto;
        background-color: #229668;
    }
    span{
        margin-right: 20px;
    }
    .testimonials{
        height:33vh;
        background-color:#125a3e;
        color:aliceblue;
        border-radius:15px;
    }
    .testimonials img{
        width: 100px;
        height:100px;
        border-radius:50%;
    }

@media only screen and (max-width:600px){
    
}
</style>