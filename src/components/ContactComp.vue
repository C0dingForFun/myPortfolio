<template >
    <div class="container-fluid" id="contact">
        <div class="container-fluid align-items-center">
            <div class="container" data-aos="fade-up">       
                  <div>
                      <h2 data-aos="fade-up">Contact</h2>
                  </div>
                <div class="row d-flex align-items-center mt-4">
                  <div class="col-lg-4 text-center">
                    <div data-aos="fade-up">
                      <div>
                        <i class="las la-map-marker" ></i>
                        <h4>Location:</h4>
                        <a href="https://www.google.com/maps/place/Mitchells+Plain,+Cape+Town/@-34.0484351,18.5617394,13z/data=!3m1!4b1!4m6!3m5!1s0x1dcc4721e60ec221:0xd3097704b4edb9ac!8m2!3d-34.0485946!4d18.6056873!16zL20vMGJycXN5?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D" target="blank">Mitchell's Plain</a>
                      </div>

                      <div>
                      <i class="lar la-envelope"></i>
                        <h4>Email:</h4>
                       <a href="mailto:gwibantulini8@gmail.com" target="blank">gwibantulini8@gmail.com</a>
                      </div>
                      <div>
                        <i class="las la-phone"></i>
                        <h4>Call:</h4>
                        <a href="tel:+21 71 122 8132" target="blank">+21 71 122 8132</a>
                      </div>
                    </div>
                  </div>
        
                  <div class="col-lg-8 mt-5 mt-lg-0 mt-md-0 mt-sm-0">
                    <form action="https://formspree.io/f/xjvnzvav" method="POST" role="form">
                      <div class="row">
                        <div class="col-md-6 form-group">
                          <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" v-model="name">
                        </div>
                        <div class="col-md-6 form-group mt-3 mt-md-0">
                          <input type="text" name="surname" class="form-control" id="surname" placeholder="Your Surname" v-model="surname">
                        </div>
                      </div>
                      <div class="form-group mt-3">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" v-model="email">
                      </div>
                      <div class="form-group mt-3">
                        <textarea class="form-control" name="message" rows="5" placeholder="Message" v-model="message"></textarea>
                      </div>
                      <div class="text-center mt-4 send mb-2">
                        <button type="submit" @click.prevent="check()">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {toast} from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
   
export default {
  data() {
    return {
      name:'',
      surname:'',
      email:'',
      message:''
    }
  },
    methods: {
      check(){
        if(this.name  != '' && this.surname != '' && this.email != '' && this.message != '') {
                if(this.email.includes('@')){
                    toast("Meassage sent successfully", {
                        "theme": "dark",
                        "type": "success",
                        "dangerouslyHTMLString": true,
                        autoClose: 2000,
                        position: toast.POSITION.BOTTOM_CENTER
                    })
                }
                else{
                    toast("Please include the '@' sign", {
                        "theme": "dark",
                        "type": "error",
                        "dangerouslyHTMLString": true,
                        autoClose: 2000,
                        position: toast.POSITION.BOTTOM_CENTER,
                    })
                }
            }
            else{
                toast("Please fill in the whole form", {
                    "theme": "dark",
                    "type": "error",
                    "dangerouslyHTMLString": true,
                    autoClose: 2000,
                    position: toast.POSITION.BOTTOM_CENTER,
                })
            }
        }
    },
}
</script>
<style scoped>
    #contact{
        width:100vw;
        min-height:100vh;
        max-height:auto;
        background-color: #ffc695;
        color: aliceblue;
    }
    #contact a{
        text-decoration: none;
        color: aliceblue;
    }
    #contact a:hover{
        text-decoration: underline;
        color: aliceblue;
    }
    #contact i{
        font-size:30px;
        color:#125a3e;
    }
    input{
      background-color: #125a3e;
    }
    textarea{
      background-color: #125a3e;
    }
    button{
        color: aliceblue;
        border-radius:5px;
        background-color: #125a3e;
        border:solid 1px transparent;
        padding:0.3em;
        transition:0.7s;
    }
    button:hover{
        background-color:#ffc695;
        color:#125a3e;
        border:solid 1px #125a3e;
        transform: translateY(-7px);
    }
</style>