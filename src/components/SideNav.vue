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



        <div v-show="user_type === 'Customer'"  class="flex flex-row mt-5 px-5">
          <router-link :to="'/chat_bot'" class="h-12 rounded-full bg-light_sky_blue font-semibold hover:shadow-md px-3 py-3 flex items-center w-auto">
                 <ChatBubbleOvalLeftEllipsisIcon class="h-7 w-7 mr-2"/>
                 <p class="block text-sm ml-1">Chat</p>
            </router-link>
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


        <div  v-show="user_type === 'Enquiry Personnel'" class="mt-4">
             <router-link @click="name = item.name" :class="`flex items-center focus:outline-none hover:text-blue hover:border-l-2 border-blue px-8 py-2 w-full 
             hover:bg-lighter mr-auto mb-3 ${name === item.name ? 'text-blue  bg-lighter border-l-2 border-blue' : '' }`"
             v-for="item of enquiryMenu" 
             :key="item.name" 
             v-bind:to="{name: item.name}">
                <component :is="item.icon" class="h-6 w-6 mr-4 text-left"></component>
                <p class="text-sm font-normal text-left">{{ item.title }}</p>
            </router-link> 

            <div class="border border-lighter mt-8 mb-12 mx-2"></div>
        </div> 


       <!-- dropdown menu-->
       


       <!--end of dropdown menu-->


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
           <div class="relative">
            <button @click="isDropdownOpen = !isDropdownOpen" class="flex rounded-full bg-lighter hover:bg-lightblue px-1 py-1 items-center">
                <img :src="users?.profile_photo" class="h-8 w-8 rounded-full" alt="">
                <!-- <p class="pl-2"> Mtende Mwanza </p> -->
            </button>


            <div v-if="isDropdownOpen" class="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                     
                     <div class="flex flex-col items-left p-4 ">
                        <div class="flex items-center">
                         <img class="w-8 h-8 mb-3 rounded-full shadow-lg object-cover" :src="users?.profile_photo" alt="Bonnie image"/>
                         <h5 class="mb-1 ml-4 text-sm font-medium text-gray-900 dark:text-gray-800"> {{ users?.first_name }} {{ users?.last_name }}</h5>
                        </div>
                         <span v-if="user_type === 'Customer'" class="font-semibold text-sm text-gray-500 dark:text-gray-600"> Customer Account no: {{ users?.person_no }}</span>
                         <span v-else class="text-sm text-gray-500 dark:text-gray-600">Employee no: {{ users?.person_no }}</span>
                        <div class="my-5 border-b border-lighter"></div>
                        <router-link v-bind:to="'/login'" class="flex items-center text-sm w-full bg-lighest py-2 px-2 hover:shadow-md rounded-lg">
                            <!-- <ArrowLeftIcon class="h-8 w-8"></ArrowLeftIcon> -->
                            <component :is="icons.signout" class="h-6 w-6 mr-4 text-left"></component>
                             Sign Out
                        </router-link>

                         
                     </div>
             
              <!-- Dropdown menu content -->
            </div>
                    

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
import {HomeIcon, UserPlusIcon, UserGroupIcon, UserIcon,PlusCircleIcon, ChatBubbleOvalLeftIcon, ChatBubbleOvalLeftEllipsisIcon,
     Bars3CenterLeftIcon, Bars3Icon, PlusIcon, BellIcon, ArrowLongLeftIcon, ArrowLeftIcon, ArchiveBoxIcon,InformationCircleIcon,
     QuestionMarkCircleIcon

    } from '@heroicons/vue/24/outline'
import router from '../router';
import { useUserStore } from '../stores/store';
import axios from 'axios';
import config from '../../config'

export default{
    components:{
      Bars3CenterLeftIcon, Bars3Icon, UserPlusIcon, PlusIcon, PlusCircleIcon, ArrowLongLeftIcon, ArrowLeftIcon,
      ChatBubbleOvalLeftIcon, ChatBubbleOvalLeftEllipsisIcon, ArchiveBoxIcon, InformationCircleIcon
    },
    setup(){

    const user_type = ref("")
     const users = ref(null)

    const userStore = useUserStore();
    const userId = userStore.getUserId;

    const isDropdownOpen = ref(false);
    const icons = [
      {name:'icon', signout:ArrowLeftIcon}
    ]
    const adminMenu = ref([
           {title:'Dashboard', icon: HomeIcon, name:'admin-dashboard'},
        // {title:'Notification', icon: BellIcon, name:'user-list'},
           {title:'Profile', icon: UserIcon, name:'admin-profile-settings'},
           {title:'Users list', icon: UserGroupIcon, name:'user-list'},
           {title:'Archived Accounts', icon: ArchiveBoxIcon, name:'archived-accounts'},

    ]);

    const customerMenu = ref([
           {title:'Dashboard', icon: HomeIcon, name:'customer-dashboard'},
           {title:'Survey Tool', icon: PlusIcon, name:'survey-tool'},
           {title:'Responded Queries', icon: QuestionMarkCircleIcon, name:'my-responded-queries'},
           {title:'Unresponded Queries', icon: QuestionMarkCircleIcon, name:'my-unresponded-queries'},
           {title:'Profile', icon: UserIcon, name:'admin-profile-settings'},

    ]);

  
    const enquiryMenu = ref([
           {title:'Dashboard', icon: HomeIcon, name:'enquiry-dashboard'},
           {title:'Survey Timeline', icon: InformationCircleIcon, name:'survey-issues'},
           {title:'Responded Queries', icon: QuestionMarkCircleIcon, name:'responded-suverys'},
           {title:'UnResponded Queries', icon: QuestionMarkCircleIcon, name:'unresponded-suverys'},
           {title:'Profile', icon: UserIcon, name:'admin-profile-settings'}
          
    ]);

        function read_user_information(){
               axios
                 .get(`${config.API_URL}/read_one_user/${userId}`)
                 .then((response)=>{
                    if(response.status === 200){
                        users.value = response.data
                        console.log(users)
                       // is_loading.value = false
                    }
                 })
        }
  

    onMounted(()=>{
       user_type.value = sessionStorage.getItem("role")
       read_user_information()
       console.log(user_type)
       console.log("the user id is "+userId)
    })



    const name = ref('dashboard')
    const isOpen = ref(true)

    const login = ()=>{
      router.push({path:'/login'})
    }

    return {
    adminMenu,
    customerMenu,
    enquiryMenu,
    name,
    login,
    isOpen,
    user_type,
    userId,
    isDropdownOpen,
    icons,
    read_user_information,
    users
    
    };

    }
}
</script>