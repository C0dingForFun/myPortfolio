<template>
    <div class="container-fluid overflow-hidden align-content-center" id="resume" v-for="resume in displayEducation()" :key="resume">
        <div class="row mt-5" v-for="work in displayWork()" :key="work">
            <h2 class=" text-white" data-aos="fade-up">Resume</h2>
            <div class="col-lg-5 col-md-5 col-sm-12 mb-2" data-aos="fade-up" data-aos-delay="500">
                <div class="education ">
                    <div class="row" >
                        <div class="col-1 timeline">
                            <img :src="resume.eduTimeline">
                        </div>
                        <div class="col-11">
                            <div class="spine_road mt-2">
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
            <div class="col-lg-5 col-md-5 col-sm-12 mb-2" data-aos="fade-up" data-aos-delay="500">
                <div class="experience">
                    <div class="row">
                        <div class="col-1 timeline">
                            <img :src="resume.workTimeline">
                        </div>
                        <div class="col-11 work mt-2">
                            <img :src="work.image"/>
                            <p>{{ work.placeOfWork }}</p>
                            <p>{{ work.year}}</p>
                            <h4><b>Contact:</b></h4>
                            <p>{{work.contact[0].name}}</p>
                            <p>{{work.contact[0].position}}</p>        
                            <p>{{work.contact[0].cell}}</p>
                            <p>{{work.contact[0].email}}</p>
                        </div>
                    </div>
                </div> 
            </div>   
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
            return this.$store.state.workExp
        }
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
    .container-fluid {
        display: flex;
        justify-content: center;
    }
    .education{
        width:500px;
        height:502px;
        background-color: #125a3e;
        color:aliceblue;
        margin-left: 15vw;
    }
    .experience{
        width:500px;
        height:502px;
        background-color: #125a3e;
        color:aliceblue;
        margin-left: 10vw;
    }
    .timeline img{
        width:100px;
        height:510px;
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
    @media only screen and (max-width:720px) {
    .education{
        width:500px;
        height:502px;
        background-color: #125a3e;
        color:aliceblue;
        margin:auto;
    }
    .experience{
        width:500px;
        height:502px;
        background-color: #125a3e;
        color:aliceblue;
        margin:auto;
    }
    }
    @media only screen and (max-width:600px) {
    #resume{
        min-height:100vh;
        max-height: auto;
        background-color: #ffc695; 
        color:aliceblue;
    }
    .education{
        width:300px;
        height:502px;
        background-color: #125a3e;
        color:aliceblue;
        margin:auto;
    }
    .experience{
        width:300px;
        height:502px;
        background-color: #125a3e;
        color:aliceblue;
        margin:auto;
    }
    .timeline img{
        width:80px;
        height:510px;
    }
    .spine_road img{
        width:30px;
        height:30px;
        border-radius:50%;
    }
    .college img{
        width:30px;
        height:30px;
        border-radius:50%;
    }
    .lca img{
        width:30px;
        height:30px;
        border-radius:50%;
    }
    .work img{
        width:30px;
        height:30px;
        border-radius:50%;
    }
}
</style>