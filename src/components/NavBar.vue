<template>
  <nav>
  <div class="h-16 bg-medium_light_blue fixed w-full left-0 top-0 z-50">
    <div
      class="container mx-auto flex flex-row items-center justify-between py-5 px-5"
    >
      <div class="flex space-x-4">
        <router-link :to="'/'" class="flex items-center space-x-1">
          <img src="../assets/img/nblogo.png" class="w-10 h-10" alt="">
          <span class="font-normal text-white text-xs pb-1.5 pr-1">Feedback app</span>
        </router-link>
      </div>
      <div class="hidden md:flex space-x-1">
        <router-link
          v-for="link in home_Links"
          :key="link.title"
          v-bind:to="{name: link.name}"
          class="text-sm px-5 bg-transparent text-white rounded-lg hover:text-white_slate focus:outline-none focus:shadow-outline"
          
        >
          {{ link.title }}
        </router-link>
      </div>
      <div class="hidden md:flex items-center space-x-2">
        <!--sign up button-->
        <router-link
          class="px-6 py-2 text-sm text-center bg-white rounded-full hover:px-7 font-semibold"
          :to="'/login'"
        >
          Login
        </router-link>
        <router-link
          class="px-6 py-2 text-sm text-center bg-amber text-white rounded-full hover:px-7 font-semibold"
          :to="'/register-account'"
          >Register</router-link>
      </div>
      <!--show button hamburger on mobile menu -->
      <div class="md:hidden flex items-center">
        <button class="" @click="showMobileMenu=!showMobileMenu ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              stroke-width="1.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <!--mobile menu-->
  <div class="bg-medium_light_blue mt-16">
   <div class="container mx-auto md:hidden items-center pb-4 duration-700 ease-in-out" v-show="showMobileMenu" :class="[showMobileMenu ? 'left-0' : 'left -[-100%]' ]">
    <router-link 
          v-for="link in home_Links"
          :key="link.name"
          v-bind:to="{name: link.name}"
          class="block py-3 px-5 text-sm hover:text-white_slate text-white"
        >
          {{ link.title }}
    </router-link>

    <router-link
          class="block px-5 py-3 mx-3 my-4 text-sm text-center bg-white rounded-full font-semibold"
          v-bind:to="'/login'"
        >
          Login
    </router-link>
    <router-link
          class="block px-5 py-3 mx-3 mt-2 text-sm text-center bg-amber rounded-full font-semibold"
          v-bind:to="'/register-account'"
        >
          Register
    </router-link>

   </div>
  </div>
  </nav>
   
    <router-view></router-view>
 
  

</template>

<script>
import { ref } from "vue";
export default {
  setup() {

    const showMobileMenu = ref(false);

    const home_Links = ref([
      { title: "Home", name: "home" },
      { title: "Our Staff", name: "our-stuff" },
      { title: "About Us", name: "about-us" },
      { title: "Contact us", name: "contact-us" },
    ]);

    const openHamburger = () => {};

    return {
      home_Links,
      openHamburger,
      showMobileMenu,
    };
  }


};
</script>
