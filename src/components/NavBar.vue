<template>
  <nav>
  <div class="h-16 bg-navy_blue">
    <div
      class="container mx-auto flex flex-row items-center justify-between py-5 px-5"
    >
      <div class="flex space-x-4">
        <a href="" class="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-8 h-8"
          >
            <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
            <path
              fill-rule="evenodd"
              d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
              clip-rule="evenodd"
            />
            <path
              d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"
            />
          </svg>
          <span class="font-semibold text-white text-lg">CLient</span>
        </a>
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
        <a
          class="px-6 py-2 text-sm text-center bg-white rounded-full"
          href="/about"
        >
          Login
        </a>
        <a
          class="px-6 py-2 text-sm text-center bg-amber text-white rounded-full"
          href="#"
          >Register</a
        >
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
  <div class="bg-navy_blue">
   <div class="container mx-auto md:hidden items-center pb-4 duration-700 ease-in-out" v-show="showMobileMenu" :class="[showMobileMenu ? 'left-0' : 'left -[-100%]' ]">
    <a
          v-for="link in home_Links"
          :key="link.name"
          
          class="block py-3 px-5 text-sm hover:text-white_slate text-white"
        >
          {{ link.title }}
    </a>

    <a
          class="block px-5 py-3 mx-3 my-4 text-sm text-center bg-white rounded-full"
          href="#"
        >
          Login
    </a>
    <a
          class="block px-5 py-3 mx-3 mt-2 text-sm text-center bg-amber rounded-full"
          href="#"
        >
          Register
    </a>

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
