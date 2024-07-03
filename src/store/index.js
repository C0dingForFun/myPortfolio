import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe:null,
    education:null,
    workExp:null,
    skills:null,
    projects:null,
    testimonials:null,
  },
  getters: {
  },
  mutations: {
    setAboutMe(state, payload){
      state.aboutMe = payload
    },
    setEducation(state, payload){
      state.education = payload
    },
    setWorkExp(state, payload){
      state.workExp = payload
    },
    setSkills(state, payload){
      state.skills = payload
    },
    setProjects(state, payload){
      state.projects = payload
    },
    setTestimonials(state, payload){
      state.testimonials = payload
    }
    
  },
  actions: {
    async getData({commit}){
      try {
        let fetchedInfo = await fetch('https://c0dingforfun.github.io/firstAPI/data/data.json')
      let myData = await fetchedInfo.json()
      let {aboutMe,projects,education,skills,workExp,testimonials} = myData
      commit('setAboutMe', aboutMe)  
      commit('setEducation', education)  
      commit('setWorkExp', workExp)  
      commit('setSkills', skills)  
      commit('setProjects', projects)  
      commit('setTestimonials', testimonials) 
      } 
      catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
