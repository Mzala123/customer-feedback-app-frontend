<template>
    <div class="container mx-auto mt-8">
        <div class="flex flex-wrap">
           
            <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
                      <div class="relative flex flex-col min-w-0 break-words border-l-4 border-t-2 border-blue bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                         <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                               <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                  <h5 class="text-blueGray-400 uppercase font-bold text-xs">System Users</h5>
                                  <span class="font-bold text-xl">{{ all_users_count }}</span>
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

        </div>
    </div>
</template>

<script>
import {HomeIcon, UserGroupIcon} from '@heroicons/vue/24/outline'
import {onMounted, ref} from 'vue'
import config  from '../../../config'
import axios from 'axios';
import Swal from 'sweetalert2';
import router from "../../router";
export default{

    components:{
       HomeIcon,
       UserGroupIcon 
    },

    setup(){

        const all_users_count = ref(0) 

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

        onMounted(()=>{
            count_all_users()
       })

        return{
            count_all_users,
            all_users_count

        }
    }
}
</script>