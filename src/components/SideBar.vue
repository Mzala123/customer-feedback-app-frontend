<template>
  <!-- <div class="p-relative h-screen bg-white"> -->
    <div class="container mx-auto  h-screen w-full flex">
      <div class="w-1/5 border-r border-lighter px-8 py-2 flex flex-col justify-between">
        <div>
        <button class="h-12 w-12 hover:bg-lightblue ml-2 rounded-full  text-blue">
            <img src="../assets/img/nblogo-blue.png"  alt="logo">
        </button>
        <div class="mt-4">
            <button v-for="item in adminMenu" :key="item.name" @click="login, name = item.name" :class="`focus:outline-none flex hover:text-blue items-start px-4 py-3
             hover:bg-lightblue rounded-full mr-auto mb-3 ${name === item.name ? 'text-blue bg-lightblue' : '' }`">
              <component :is="item.icon" class="h-7 w-7 mr-4 text-2xl text-left"></component>
              <p class="text-xl font-normal text-left">{{ item.title }}</p>
              
            </button>
        </div>
        <div class="border border-lighter mt-12 mb-12">

        </div>

        <button class="flex items-center ml-2 ">
          <img src="../assets/img/J-Cole.jpg" class="w-12 h-12 object-cover rounded-full border border-lighter" alt="">

        </button>
      </div>

        
      <div>
       
      </div>

      </div>
    </div>
  <!-- </div> -->

  

</template>

<script>
import { ref } from "vue";
import {HomeIcon, UserPlusIcon, UserGroupIcon, UserIcon} from '@heroicons/vue/24/outline'

export default{
  components: { HomeIcon, UserPlusIcon},
  
  setup() {
   
    const adminMenu = ref([
           {title:'Dashboard', icon: HomeIcon, name:'dashboard'},
           {title:'Users list', icon: UserGroupIcon, name:'user-list'},
           {title:'Profile', icon: UserIcon, name:'admin-profile-settings'},
           {title:'Create User', icon: UserPlusIcon, name:'add-list'}   
    ]
    )
    const name = ref('dashboard')

    const login = ()=>{
      router.push({path:"/login"})
    }

    return {
    adminMenu,
    name,
    login
    
    };
  },
};
</script>


