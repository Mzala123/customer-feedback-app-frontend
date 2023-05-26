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
              <input type="email" v-model="email" class="w-full border border-gray-500 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none">
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

              <button :disabled="loading" class="w-full flex justify-center text-center bg-medium_light_blue hover:bg-dark_blue 
                rounded-full text-white py-3 font-medium"> 
                
                <span v-if="loading" class="flex justify-items-center">
                  <svg class="animate-spin h-5 w-5 mr-1" viewBox="0 0 24 24">
                    <circle class="opacity-25 bg-white" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75 bg-white" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-2c0 3.314-2.686 6-6 6-3.314 0-6-2.686-6-6H6c0 4.411 3.589 8 8 8z"></path>
                  </svg>
                  Loading...
                </span>
                <span v-else>
                  Sign in
                </span>
              </button>

            </form>
       </div>
       <p>Not a Customer?<router-link :to="'/register-account'" class="text-medium_light_blue font-semibold hover:text-blue hover:underline p-2 rounded-full" href="#">Register now</router-link></p>
    </div>
 
</template>

<script>
import { ref } from "vue";
import router from "../../router";
import Swal from 'sweetalert2'
import axios from 'axios';
import config  from '../../../config'
import {useUserStore} from '../../stores/store'


export default {
  setup() {
    const email = ref(null)
    const password  = ref(null)
    const alert_fill_fields = ref(false)
    const userStore = useUserStore()
    const loading = ref(false)

    const login = ()=>{
          loading.value = true
          if(!email.value || !password.value){
             Swal.fire({
              text:"Please fill in all required fields!",
              icon:"warning",
              dangerMode: true
             })
             loading.value = false
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

                     userStore.userId = user._id
                     userStore.persistUserId();
                   
                     sessionStorage.setItem("role", user_type)
                     console.log("the userrole is "+sessionStorage.getItem("role"))
                     sessionStorage.setItem("userid", userid)
                     console.log("the userid is "+sessionStorage.getItem("userid"))

                     if(user_type === "Admin"){
                      router.push({path:"/admin_dashboard"})
                     }else if(user_type === "Customer"){
                      router.push({path:"/customer_dashboard"})
                     }else if(user_type === "Enquiry Personnel"){
                      //router.push({path:"/sidenav"})
                     }
                   
                     loading.value = false

                  }

              }).catch((error)=>{
                const{status} = error.response
                           if(status === 401){
                             Swal.fire({
                                text: "Incorrect credentials!",
                                icon: "warning",
                                dangerMode: true,
                             })
                        loading.value = false
                           }else{
          
                            Swal.fire({
                                text: "Check your network connection!",
                                icon: "warning",
                                dangerMode: true,
                             })

                             loading.value = false
                         }
              })
          }
        
          //router.push({path:"/sidenav"})
    };

    return {
         email,
         password,
         alert_fill_fields,
         login,
         loading
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