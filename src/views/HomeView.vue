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
                        <div class="row">
                            <div class="col-lg-4 col-col-md-4 col-sm-12">
                                
                            </div>
                            <div class="col-lg-4 col-col-md-4 col-sm-12">
                                
                            </div>
                            <div class="col-lg-4 col-col-md-4 col-sm-12">
                                
                            </div>
                            <div class="col-lg-4 col-col-md-4 col-sm-12">

                            </div>
                            <div class="col-lg-4 col-col-md-4 col-sm-12">
                                
                            </div>
                            <div class="col-lg-4 col-col-md-4 col-sm-12">

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-col-md-4 col-sm-12">

                            </div>
                            <div class="col-lg-4 col-col-md-4 col-sm-12">
                                
                            </div>
                            <div class="col-lg-4 col-col-md-4 col-sm-12"></div>
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