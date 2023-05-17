<template>
    <div class="container mx-auto mt-8">
        <div class="flex flex-wrap">
           
            <div class="w-full lg:w-4/12 xl:w-3/12 px-4">
                      <div class="relative flex flex-col min-w-0 break-words border-t-4 border-blue bg-white rounded-lg mb-6 xl:mb-0 shadow-md">
                         <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                               <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                  <h5 class="text-blueGray-400 uppercase font-bold text-sm">System Users</h5>
                                  <span class="font-bold text-2xl">{{ all_users_count }}</span>
                               </div>
                               <div class="relative w-auto pl-4 flex-initial">
                                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue">
                                       <UserGroupIcon class="h-12 w-12"></UserGroupIcon>
                                  </div>
                               </div>
                            </div>
                            <!-- <p class="text-sm text-blueGray-500 mt-4"><span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 3.48%</span><span class="whitespace-nowrap">Since last month</span></p> -->
                         </div>
                      </div>
            </div>

            <div v-for="user in user_count_role" :key="user._id" class="w-full lg:w-4/12 xl:w-3/12 px-4">
                      <div class="relative flex flex-col min-w-0 break-words border-t-4 border-medium_light_blue bg-white rounded-lg mb-6 xl:mb-0 shadow-md">
                         <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                               <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                  <h5 class="text-blueGray-400 uppercase font-bold text-sm">{{ user._id }}</h5>
                                  <span class="font-bold text-2xl">{{ user.user_type_count }}</span>
                               </div>
                               <div class="relative w-auto pl-4 flex-initial">
                                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-medium_light_blue">
                                    
                                    <UserIcon v-if="user._id === 'Admin'" class="h-12 w-12"></UserIcon> 
                                    <UserCircleIcon v-if="user._id === 'Enquiry Personnel'" class="h-12 w-12"></UserCircleIcon> 
                                    <UsersIcon v-if="user._id === 'Customer'" class="h-12 w-12"></UsersIcon> 

                                  </div>
                               </div>
                            </div>
                            <!-- <p class="text-sm text-blueGray-500 mt-4"><span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 3.48%</span><span class="whitespace-nowrap">Since last month</span></p> -->
                         </div>
                      </div>
            </div>



        </div>
    </div>
</template>

<script>
import {HomeIcon, UserGroupIcon, UserIcon, UserCircleIcon, UsersIcon} from '@heroicons/vue/24/outline'
import {onMounted, ref} from 'vue'
import config  from '../../../config'
import axios from 'axios';
import Swal from 'sweetalert2';
import router from "../../router";
export default{

    components:{
       HomeIcon,
       UserGroupIcon,
       UserIcon,
       UserCircleIcon,
       UsersIcon
    },

    setup(){

        const all_users_count = ref(0) 
        const user_count_role = ref(0)
        const icons = [
           {titles:"one", icon:UserIcon},
           {titles:"two", icon:UserCircleIcon},
           {titles:"three", icon:UsersIcon},
        ]
        

        //read_count_all_users_in_system

        const count_all_users = ()=>{
            axios
              .get(`${config.API_URL}/read_count_all_users_in_system`)
              .then((response)=>{
                if(response.status === 200){
                       all_users_count.value = response.data.count
                       console.log(all_users_count.value)
                }
              })
        }

        const users_count_based_on_role = function(){
             axios
               .get(`${config.API_URL}/read_users_count_by_userrole`)
               .then((response)=>{
                  if(response.status === 200){
                          user_count_role.value = response.data
                          console.log(user_count_role)
                  }
               })
        }

        onMounted(()=>{
            count_all_users(),
            users_count_based_on_role()
       })

        return{
            count_all_users,
            all_users_count,
            user_count_role,
            icons,
            users_count_based_on_role

        }
    }
}
</script>