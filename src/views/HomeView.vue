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
                        <div class="row d-flex justify-content-center py-3 m-3">
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills align-content-center">
                                <div>
                                    <i :class="skill.programmingSkills[0].iconClass"></i>
                                </div>
                                {{ skill.programmingSkills[0].level }}
                            </div>
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills align-content-center">
                                <div>
                                    <i :class="skill.programmingSkills[1].iconClass"></i>
                                </div>
                                {{ skill.programmingSkills[1].level }}
                            </div>
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills align-content-center">
                                <div>
                                    <i :class="skill.programmingSkills[2].iconClass"></i>
                                </div>
                                {{ skill.programmingSkills[2].level }}
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills align-content-center">
                                <div>
                                    <i :class="skill.programmingSkills[3].iconClass"></i>
                                </div>
                                {{ skill.programmingSkills[3].level }}
                            </div>
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills align-content-center">
                                <div>
                                    <i :class="skill.programmingSkills[4].iconClass"></i>
                                </div>
                                {{ skill.programmingSkills[4].level }}
                            </div>
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills align-content-center">
                                <div>
                                    <i :class="skill.programmingSkills[5].iconClass"></i>
                                </div>
                                {{ skill.programmingSkills[5].level }}
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills align-content-center">
                                <div>
                                    <i :class="skill.softSkills[0].iconClass"></i>
                                </div>
                            </div>
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills align-content-center">
                                <div>
                                    <i :class="skill.softSkills[1].iconClass"></i>
                                </div>
                            </div>
                            <div class="col-lg-4 col-col-md-4 col-sm-12 skills align-content-center">
                                <div>
                                    <i :class="skill.softSkills[2].iconClass"></i>
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
    },
    methods:{
        displaySkills(){
            return this.$store.state.skills
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
        width:210px;
        /* height:210px; */
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
    .skills:hover{
        cursor:pointer;
        transition: 1s;
    }
</style>