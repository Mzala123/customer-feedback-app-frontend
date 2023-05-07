<template>
  <div class="flex h-screen">
 
    <!--sidebar-->
    
    <div class="w-96 border-r border-lighter flex flex-col ml-4">
        <div class="flex flex-row mt-5">
            <button class="h-12 w-12 rounded-full hover:bg-lightblue">
                <img src="../assets/img/nblogo-blue.png"  alt="logo">
            </button>
            <span class="text-xs mt-2 font-semibold">feedback app</span>
        </div>
        <div class="mt-4 mr-2">
             <router-link class="flex focus:outline-none hover:text-blue items-start px-4 py-3 w-full 
             hover:bg-lightblue rounded-full mr-auto mb-3"
             v-for="item of adminMenu" 
             :key="item.name" 
             v-bind:to="{name: item.name}">
                <component :is="item.icon" class="h-7 w-7 mr-4 text-2xl text-left"></component>
               <p class="text-lg font-normal text-left">{{ item.title }}</p>
            </router-link> 

            <div class="border border-lighter mt-8 mb-12"></div>
           
        </div>
         
   </div>
    <!--end of sidebar-->

    <!--content--> 
    <div class="block w-full">
        <!--header-->
        <div class="flex h-16 border-b border-lighter">
            header
        </div>
        <!--end of header-->
        
        <!--middle content-->
        <div>
           <router-view></router-view>
        </div>
        <!--end middle contend-->

    </div>
    <!--end middle content-->   
  </div>
</template>

<script>
import { ref } from "vue";
import {HomeIcon, UserPlusIcon, UserGroupIcon, UserIcon} from '@heroicons/vue/24/outline'
import router from '../router';
export default{
    setup(){

       
    const adminMenu = ref([
           {title:'Dashboard', icon: HomeIcon, name:'admin-dashboard'},
           {title:'Users list', icon: UserGroupIcon, name:'user-list'},
           {title:'Profile', icon: UserIcon, name:'admin-profile-settings'},
           {title:'Create User', icon: UserPlusIcon, name:'add-user'}   
    ]);

    const name = ref('dashboard')
    const isOpen = ref(true)

    const login = ()=>{
      router.push({path:'/login'})
    }

    return {
    adminMenu,
    name,
    login,
    isOpen
    };
    }
}
</script>