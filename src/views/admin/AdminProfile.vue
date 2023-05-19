<template>
    <div class="container mx-auto m-5">
       <div v-if="!is_loading" class="flex flex-wrap mx-4">
          <div class="w-full lg:w-3/12 xl:w-3/12 px-4 h-96">
                     
                <div class="flex flex-col items-center p-4 bg-lighest rounded-md border-t-4 border-medium_light_blue shadow">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="../../assets/img/profile.png" alt="Bonnie image"/>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-gray-800"> {{ users?.first_name }} {{ users?.last_name }}</h5>
                    <span class="font-semibold text-sm text-gray-500 dark:text-gray-600">{{ users?.user_type }}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-600">Employee no: {{ users?.person_no }}</span>
                    <button class="flex px-3 py-2 mt-4 text-sm bg-light_sky_blue hover:shadow-lg rounded-full">
                        Edit Password <PencilIcon class="ml-3 h-5 w-5"></PencilIcon>
                    </button>
                    <p class="text-center text-sm text-gray-600 hover:text-gray-600 leading-6 mt-4">
                        To change your current password,
                        click on the edit profile button!
                        </p>
                    
                </div>
        </div>

        <div class="w-full lg:w-9/12 xl:w-9/12 px-4">
                     
                <div class="bg-lighest p-3 border-t-4 border-medium_light_blue rounded-md shadow">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span clas="text-green-500">
                           <UserIcon class="h-6 w-6"></UserIcon>
                        </span>
                        <span class="tracking-wide">Employee Information</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">First Name</div>
                                <div class="px-4 py-2">{{ users?.first_name }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Last Name</div>
                                <div class="px-4 py-2">{{ users?.last_name }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Gender</div>
                                <div class="px-4 py-2">{{ users?.gender ?? 'N/A' }}</div>
                            </div>

                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email</div>
                                <div class="px-4 py-2"> {{ users?.email }} </div>
                            </div>

                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Contact No.</div>
                                <div class="px-4 py-2">{{ users?.phone_number ?? 'N/A'}}</div>
                            </div>

                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Current Address</div>
                                <div class="px-4 py-2">{{ users?.address ?? 'N/A' }}</div>
                            </div>

                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Place of residence</div>
                                <div class="px-4 py-2">{{ users?.place_residence ?? 'N/A'}}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Current city</div>
                                <div class="px-4 py-2">
                                   {{ users?.current_city }}
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Date of birth</div>
                                <div class="px-4 py-2">{{users?.dob}}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Age</div>
                                <div class="px-4 py-2">{{ users?.age }}</div>
                            </div>
                        </div>
                    </div>
                  
                </div> 

        </div> 
       </div>

         <div v-else class="flex justify-center items-center text-black">
                <!-- <p>im on the middle</p> -->
                <svg class="animate-spin h-5 w-5 mr-1" viewBox="0 0 24 24">
                    <circle class="opacity-25 bg-white" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75 bg-white" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-2c0 3.314-2.686 6-6 6-3.314 0-6-2.686-6-6H6c0 4.411 3.589 8 8 8z"></path>
                  </svg>
                  Fetching data...
         </div>

    </div>
</template>


<script>
import { PencilIcon, UserIcon } from '@heroicons/vue/24/outline';
import { ref, onMounted} from 'vue'
import axios from 'axios';
import config  from '../../../config'
import { useUserStore } from '../../stores/store';

export default{
    components:{
      PencilIcon, UserIcon
    },

    setup(){

        
        const is_loading = ref(false)

        const users = ref(null)

        const userStore = useUserStore();
        const userId = userStore.getUserId;
      

        onMounted(()=>{
           console.log("okay id "+userId)
           read_user_information()
        
        })

        function read_user_information(){
              is_loading.value = true
               axios
                 .get(`${config.API_URL}/read_one_user/${userId}`)
                 .then((response)=>{
                    if(response.status === 200){
                        users.value = response.data
                        console.log(users)
                        is_loading.value = false
                    }
                 })
        }

        return{
            read_user_information,
            users,
            is_loading
        }
    }
}
</script>