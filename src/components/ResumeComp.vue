<template>
    <div class="container-fluid overflow-hidden align-content-center justify-content-center" id="resume" v-for="resume in displayEducation()" :key="resume">
        <div class="row mt-3" v-for="work in displayWork()" :key="work">
            <h2 class=" text-white mb-5" data-aos="fade-up">Resume</h2>
            <div class="col-lg-6 col-md-5 col-sm-12">
                <div class="education mt-2">
                    <div class="row">
                        <div class="col-1 timeline">
                            <img :src="resume.eduTimeline">
                        </div>
                        <div class="col-11">
                            <div class="spine_road">
                                <img :src="resume.placeOfInstitution[0].image"/>
                                <p>{{ resume.placeOfInstitution[0].nameOfInstitution}}</p>
                                <p>{{ resume.placeOfInstitution[0].year}}</p>
                                <p>{{ resume.placeOfInstitution[0].techBackground}}</p>
                            </div>
                            <div class="college">
                                <img :src="resume.placeOfInstitution[1].image"/>
                                <p>{{ resume.placeOfInstitution[1].nameOfInstitution}}</p>
                                <p>{{ resume.placeOfInstitution[1].year}}</p>
                                <p>{{ resume.placeOfInstitution[1].course}}</p>
                            </div>
                            <div class="lca">
                                <img :src="resume.placeOfInstitution[2].image"/>
                                <p>{{ resume.placeOfInstitution[2].nameOfInstitution}}</p>
                                <p>{{ resume.placeOfInstitution[2].year}}</p>
                                <p>{{ resume.placeOfInstitution[2].course}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-5 col-sm-12">
                <div class="experience mt-2">
                    <div class="row">
                        <div class="col-1 timeline">
                            <img :src="resume.workTimeline">
                        </div>
                        <div class="col-11 work">
                            <img :src="resume.placeOfInstitution[0].image"/>
                                <p>{{ resume.placeOfInstitution[0].nameOfInstitution}}</p>
                                <p>{{ resume.placeOfInstitution[0].year}}</p>
                                <p>{{ resume.placeOfInstitution[0].techBackground}}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-1 col-md-1"></div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        displayEducation(){
            return this.$store.state.education
        },
        displayWork(){
            return this.$store.state.education
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
<style>
    #resume{
        min-height:100vh;
        max-height: auto;
        background-color: #ffc695; 
        color:aliceblue;
    }
    .education{
        width:500px;
        height:502px;
        background-color: #125a3e;
        color:aliceblue;
    }
    .experience{
        width:500px;
        height:502px;
        background-color: #125a3e;
        color:aliceblue;
        margin-left:5px;
    }
    .timeline img{
        width:100px;
        height:510px;
    }
    .spine_road{
        position: relative;
        /* top:8vh; */
    }
    .college{
        position: relative;
        /* top:18vh; */
    }
    .lca{
        position: relative;
        /* top:30vh; */
    }
    .spine_road img{
        width:50px;
        height:50px;
        border-radius:50%;
    }
    .college img{
        width:50px;
        height:50px;
        border-radius:50%;
    }
    .lca img{
        width:50px;
        height:50px;
        border-radius:50%;
    }
    .work img{
        width:50px;
        height:50px;
        border-radius:50%;
    }

</style>