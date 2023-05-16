<template>
  <div class="">
 
    <!--sidebar-->
    
    <div class="w-80 h-screen flex flex-col fixed container shadow-sm mx-auto transition-all duration-300 top-0 bg-lighest z-50 pt-16"
     :class="[isOpen? 'left-0' : '-left-80']">

         <div v-if="user_type === 'Admin'" class="flex flex-row mt-5 px-5">
            <router-link :to="'/add_user'" class="h-12 rounded-xl bg-light_sky_blue font-semibold hover:shadow-md px-3 py-3 flex items-center w-auto">
                 <PlusCircleIcon class="h-6 w-6 mr-2"/>
                 <p class="block text-sm ml-1">Employee</p>
            </router-link>
           
        </div> 
        <div v-if="user_type === 'Admin'" class="mt-4">
             
             <router-link @click="name = item.name" :class="`flex items-center focus:outline-none hover:text-blue hover:border-l-2 border-blue px-8 py-2 w-full 
             hover:bg-lighter mr-auto mb-3 ${name === item.name ? 'text-blue  bg-lighter border-l-2 border-blue' : '' }`"
             v-for="item of adminMenu" 
             :key="item.name" 
             v-bind:to="{name: item.name}">
                <component :is="item.icon" class="h-6 w-6 mr-4 text-left"></component>
                <p class="text-sm font-normal text-left">{{ item.title }}</p>
            </router-link> 

            <div class="border border-lighter mt-8 mb-12 mx-2"></div>
        </div>


        <div  v-show="user_type === 'Customer'" class="mt-4">
             <router-link @click="name = item.name" :class="`flex items-center focus:outline-none hover:text-blue hover:border-l-2 border-blue px-8 py-2 w-full 
             hover:bg-lighter mr-auto mb-3 ${name === item.name ? 'text-blue  bg-lighter border-l-2 border-blue' : '' }`"
             v-for="item of customerMenu" 
             :key="item.name" 
             v-bind:to="{name: item.name}">
                <component :is="item.icon" class="h-6 w-6 mr-4 text-left"></component>
                <p class="text-sm font-normal text-left">{{ item.title }}</p>
            </router-link> 

            <div class="border border-lighter mt-8 mb-12 mx-2"></div>
        </div> 

         
   </div>
    <!--end of sidebar-->

    <!--content--> 
    <div class="w-full transition-all duration-500" :class="[isOpen? 'md:pl-80' : 'pl-0']">
        <!--header-->
        <div   class=" flex w-full justify-between h-16 fixed bg-lighest left-0 top-0 transition-all duration-300 z-[99]  items-center px-8 shadow-sm border-b border-lighter">
           <div class="flex item-center">
               <button @click="isOpen = !isOpen" class="">
                 <Bars3Icon class="h-7 w-7"/>
               </button>
               
                <button class="h-14 w-14 rounded-full ml-2">
                    <img src="../assets/img/nblogo-blue.png"  alt="logo">
                </button>
                <h1 class="block text-xl font-semibold text-gray-500 flex items-center">Feedback</h1>
              
           </div>
           <div>
            <button class="flex rounded-full bg-lighter hover:bg-lightblue px-1 py-1 items-center">
                <img src=".././assets/img/kendal.jpg" class="h-8 w-8 rounded-full" alt="">
                <!-- <p class="pl-2"> Mtende Mwanza </p> -->
            </button>
           </div>
        </div>
        <!--end of header-->
        
        <!--middle content-->
        <div class="pt-16 bg-white rounded-lg">
           <router-view> </router-view>
        </div>
        <!--end middle contend-->

    </div>
    <!--end middle content-->   
  </div>
</template>

<script>
import { ref, onMounted} from "vue";
import {HomeIcon, UserPlusIcon, UserGroupIcon, UserIcon,PlusCircleIcon,
     Bars3CenterLeftIcon, Bars3Icon, PlusIcon, BellIcon} from '@heroicons/vue/24/outline'
import router from '../router';
export default{
    components:{
      Bars3CenterLeftIcon, Bars3Icon, UserPlusIcon, PlusIcon, PlusCircleIcon
    },
    setup(){

    const user_type = ref("")

    const adminMenu = ref([
           {title:'Dashboard', icon: HomeIcon, name:'admin-dashboard'},
        // {title:'Notification', icon: BellIcon, name:'user-list'},
           {title:'Profile', icon: UserIcon, name:'admin-profile-settings'},
           {title:'Users list', icon: UserGroupIcon, name:'user-list'}
    ]);

    const customerMenu = ref([
           {title:'Dashboard', icon: HomeIcon, name:'customer-dashboard'},
         // {title:'Notification', icon: BellIcon, name:'user-list'},
          //  {title:'Profile', icon: UserIcon, name:'customer-profile-settings'},
          //  {title:'Users list', icon: UserGroupIcon, name:'user-list'}
    ]);

    //sessionStorage.setItem("role", user_type)

    onMounted(()=>{
       user_type.value = sessionStorage.getItem("role")
       console.log(user_type)
    })


    const name = ref('dashboard')
    const isOpen = ref(true)

    const login = ()=>{
      router.push({path:'/login'})
    }

    return {
    adminMenu,
    customerMenu,
    name,
    login,
    isOpen,
    user_type
    };

    }
}
</script>