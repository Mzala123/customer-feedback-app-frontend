<template>
  
    <div class="h-screen bg-gray_darkish  relative flex flex-col space-y-10 justify-center items-center">
       <div class="bg-white md:shadow-md sm:shadow-none rounded p-6 w-96">
            <h1 class="text-2xl font-bold leading-normal ">Welcome to</h1>
            <div class="text-sm">NBM Customer feedback app</div> 
            <form class="space-y-5 mt-5" @submit.prevent="login">
              <div class="relative w-full mb-3">
              <label class="block text-blueGray-600  mb-1">
                Enter username
              </label>
              <input type="text" v-model="email" class="w-full border border-gray-500 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none">
            </div>


               <div class="relative w-full mb-3">
                <label class="block text-blueGray-600  mb-1">
                 Enter password
               </label>
               <input v-model="password" class="w-full border border-gray-500 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none" type="password"/>
               </div>
                

               <div class="-m-2">
                <a class="font-bold text-medium_light_blue hover:text-blue hover:underline p-2 rounded-full" href="#">Forgot password?</a>
               </div>

              <button class="w-full text-center bg-medium_light_blue hover:bg-dark_blue 
              rounded-full text-white py-3 font-medium">Sign in
                 
              </button>
            </form>
       </div>
       <p>Not a Customer?<a class="text-medium_light_blue font-semibold hover:text-blue hover:underline p-2 rounded-full" href="#">Register now</a></p>
    </div>
 
</template>

<script>
import { ref } from "vue";
import router from "../../router";
import Swal from 'sweetalert2'
import axios from 'axios';
import config  from '../../../config'


export default {
  setup() {
    const email = ref(null)
    const password  = ref(null)
    const alert_fill_fields = ref(false)

    const login = ()=>{
       
          if(!email.value || !password.value){
             Swal.fire({
              text:"Please fill in all required fields!",
              icon:"warning",
              dangerMode: true
             })
          }else{
            axios
              .post(`${config.API_URL}/login`,
              {
                email: email.value,
                password: password.value
              }
              ).then((response)=>{
                  if(response.status === 200){
                     sessionStorage.setItem("Authorization", response.data.token)
                     sessionStorage.setItem("user", JSON.stringify(response.data.user))
                     let user = JSON.parse(sessionStorage.getItem("user"))
                     let user_type = user.user_type
                     let userid = user._id

                     sessionStorage.setItem("role", user_type)
                     console.log("the userrole is "+sessionStorage.getItem("role"))
                     sessionStorage.setItem("userid", userid)

                     if(user_type === "Admin"){
                      router.push({path:"/sidenav"})
                     }else if(user_type === "Customer"){
                      router.push({path:"/sidenav"})
                     }else if(user_type === "Enquiry Personnel"){
                      //router.push({path:"/sidenav"})
                     }
                  }
              }).catch((error)=>{
                const{status} = error.response
                           if(status === 401){
                             Swal.fire({
                                text: "Incorrect credentials!",
                                icon: "warning",
                                dangerMode: true,
                             })
                           }else{
          
                            Swal.fire({
                                text: "Check your network connection!",
                                icon: "warning",
                                dangerMode: true,
                             })
                           }
              })
          }
        
          //router.push({path:"/sidenav"})
    };

    return {
         email,
         password,
         alert_fill_fields,
         login
    };
  },
};
</script>

<style>
        /* *{
            margin:0;
            padding:0;
        }
        .input {
            transition: border 0.2s ease-in-out;
            min-width: 280px
        }
        .input:focus+.label,
        .input:active+.label,
        .input.filled+.label {
            font-size: .75rem;
            transition: all 0.2s ease-out;
            top: -0.3rem;
            color: #6b7280;
        }
        .label {
            transition: all 0.2s ease-out;
            top: 0.4rem;
            left: 0;
        } */
</style>