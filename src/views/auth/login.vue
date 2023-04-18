<template>
  
    <div class="h-screen bg-gray_darkish  relative flex flex-col space-y-10 justify-center items-center">
       <div class="bg-white md:shadow-lg sm:shadow-none rounded p-6 w-96">
            <h1 class="text-2xl font-bold leading-normal ">Welcome to</h1>
            <div class="text-sm">Clientelle feedback app</div> 
            <form class="space-y-5 mt-5">
               <div class="mb-4 relative">
                <input id="email" v-model="useremail" class="w-full rounded px-3 border border-gray-500 pt-5 pb-2 focus:outline-none input active:outline-none" type="text" autofocus>
                <label for="email" class="label absolute mb-0 -mt-2.5 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text">Enter username</label>
               </div>

               <div class="relative flex items-center border border-gray-500 focus:ring focus:border-blue-500 rounded">
                <input id="password" class="w-full rounded px-3 pt-5 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500" type="password"/>
                <label for="password" class="label absolute mb-0 -mt-2.5 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text">Password</label>
                <a class="text-sm font-bold text-blue-700 hover:bg-blue-100 rounded-full px-2 py-1 mr-1 leading-normal cursor-pointer">show</a>
               </div>

               <div class="-m-2">
                <a class="font-bold text-medium_light_blue hover:text-blue hover:underline p-2 rounded-full" href="#">Forgot password?</a>
               </div>

              <button @click="login" class="w-full text-center bg-medium_light_blue hover:bg-blue rounded-full text-white py-3 font-medium">Sign in
                 
              </button>

              <p>Not a Customer?<a class="text-medium_light_blue font-semibold hover:text-blue hover:underline p-2 rounded-full" href="#">Register now</a></p>

            </form>
       </div>
    </div>
 
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const useremail = ref(null)
    const password  = ref(null)

    const login = ()=>{
          
    }

    return {
         useremail,
         password,
         login

    };
  },
};
</script>

<style>
        * {
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
        }
</style>