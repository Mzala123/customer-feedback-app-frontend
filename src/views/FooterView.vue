<template>
    <div>
        <footer class="bg-medium_light_blue">
        <div class="container flex flex-col-reverse justify-between 
        px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
            <!--Logo and social links container-->
            <div class="flex flex-col-reverse items-center justify-between 
              space-y-12 md:flex-col md:space-y-0 md:items-start">
              
             <div class="mx-auto my-6 text-center text-white md:hidden">
                Copyright &copy; 2023, All Rights Reserved
             </div> 
              <!--Logo-->
                <div class="flex items-center space-x-1">
                    <img src="../assets/img/nblogo.png" class="h-10" alt="">
                    <span class="font-normal text-white text-xs pb-1.5 pr-1">Feedback app</span>
                </div>
                <!--Social links container icons-->
                <div class="flex justify-center space-x-4">
                    <a href="">
                        <img src="../assets/img/icon-facebook.svg" alt="" class="h-8">
                    </a>
                    <a href="">
                        <img src="../assets/img/icon-twitter.svg" alt="" class="h-8">
                    </a>
                    <a href="">
                        <img src="../assets//img/icon-instagram.svg" alt="" class="h-8">
                    </a>
                    <a href="">
                        <img src="../assets/img/icon-youtube.svg" alt="" class="h-8">
                    </a>
                </div>
            </div>
            <!--List container-->
            <div class="flex justify-around space-x-32">
                <div class="flex flex-col space-y-3 text-white">
                    <router-link
                    v-for="link in home_Links"
                    :key="link.title"
                    v-bind:to="{name: link.name}"
                    class="text-sm px-5 bg-transparent text-white rounded-lg hover:text-white_slate focus:outline-none focus:shadow-outline"
                    >
                    {{ link.title }}
                    </router-link>
                </div>
                <div class="flex flex-col space-y-3 text-white">
                    <router-link
                    class="hover:text-brightRed"
                    :to="'/login'"
                    >
                    Sign In
                    </router-link>
                   
                    <router-link
                    class="hover:text-brightRed"
                    :to="'/register-account'"
                    >
                    Register
                    </router-link>
                   
                 </div>
            </div>
            <!--input container-->
              <div class="flex flex-col justify-between">
                <div class="hidden text-white md:block">
                    Copyright &copy; 2023, All Rights Reserved
                </div>
              </div>
        </div>
    </footer>
    </div>
</template>

<script>
import {ref} from 'vue'
export default{
    setup(){

        const home_Links = ref([
      { title: "Home", name: "home" },
      { title: "Our Staff", name: "our-stuff" },
      { title: "About Us", name: "about-us" },
      { title: "Contact us", name: "contact-us" },
    ]);

        return{
        home_Links
        }
    }
}

</script>
