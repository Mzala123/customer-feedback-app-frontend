<template>
    <div class="container mx-auto m-5">
       <div class="flex flex-wrap mx-4">
          <div class="w-full lg:w-3/12 xl:w-3/12 px-4 h-96">
                     
                <div class="flex flex-col items-center p-4 bg-lighest rounded-md border-t-4 border-medium_light_blue shadow">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="../../assets/img/profile.png" alt="Bonnie image"/>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-gray-800"> {{ users?.first_name }} {{ users?.last_name }}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-600">{{ users?.user_type }}</span>
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
                                <div class="px-4 py-2">{{ users?.phone_number }}</div>
                            </div>

                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Current Address</div>
                                <div class="px-4 py-2">{{ users?.address }}</div>
                            </div>

                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Place of residence</div>
                                <div class="px-4 py-2">{{ users?.place_residence }}</div>
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

      
        const users = ref(null)

        const userStore = useUserStore();
        const userId = userStore.getUserId;
      

        onMounted(()=>{
           console.log("okay id "+userId)
           read_user_information()
        
        })

        function read_user_information(){
             
               axios
                 .get(`${config.API_URL}/read_one_user/${userId}`)
                 .then((response)=>{
                    if(response.status === 200){
                        users.value = response.data
                        console.log(users)
                    }
                 })
        }

        return{
            read_user_information,
            users
        }
    }
}
</script>