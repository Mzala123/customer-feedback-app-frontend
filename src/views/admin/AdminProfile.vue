<template>
 <div class="container mx-auto m-5">
    <div class="relative flex flex-col gap-4">
         
        <div v-if="is_loading"
            class="absolute z-10 mt-10 bg-white/50 flex justify-center items-center w-full h-full"
            >
            <div class="h-10 w-10 border-2 animate-spin bg-blue"></div>
        </div>


       <div v-if="!is_loading" class="flex flex-wrap mx-4">
          <div class="w-full lg:w-3/12 xl:w-3/12 px-4 h-96">
                     
                <div class="flex flex-col items-center p-4 bg-lighest rounded-md border-t-4 border-medium_light_blue shadow">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="../../assets/img/profile.png" alt="Bonnie image"/>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-gray-800"> {{ users?.first_name }} {{ users?.last_name }}</h5>
                    <span class="font-semibold text-sm text-gray-500 dark:text-gray-600">{{ users?.user_type }}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-600">Employee no: {{ users?.person_no }}</span>
                    <button @click="openModal" class="flex px-3 py-2 mt-4 text-sm bg-light_sky_blue hover:shadow-lg rounded-full">
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
                                <div class="px-4 py-2 overflow-auto"> {{ users?.email }} </div>
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

      </div>
    </div>

    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="modal-overlay fixed inset-0 bg-gray-500 opacity-75"></div>

      <div class="modal-container bg-white  mx-auto rounded shadow-lg z-50">
        <div class="modal-content py-4 text-left px-6">
          <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">Edit Password</p>
            <button @click="closeModal" class="modal-close cursor-pointer z-50">
            <XMarkIcon class="h-5 w-5 stroke-red-600"></XMarkIcon>
            </button>
          </div>

          <div>
            <!-- Modal content goes here -->
           
            <div class="flex flex-wrap mx-2">

                <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block text-gray-600 text-sm font-semibold mb-2">
                        Enter new password</label>
                        <input v-model="password" type="password" class="px-3 py-3 placeholder-black text-gray-700
                        bg-white rounded text-sm border border-gray-700 shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                    </div>
                </div>

                <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block text-gray-600 text-sm font-semibold mb-2">
                        Confirm password</label>
                        <input v-model="passcode" type="password" class="px-3 py-3 placeholder-black text-gray-700
                        bg-white rounded text-sm border border-gray-700  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                    </div>
                 </div>

                 <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                        <button @click="update_user_password" :disabled="loading" class="w-full flex justify-center text-center bg-medium_light_blue hover:bg-dark_blue 
                        rounded-lg text-white py-3 font-medium"> 
                        
                        <span v-if="loading" class="flex justify-items-center">
                        <svg class="animate-spin h-5 w-5 mr-1" viewBox="0 0 24 24">
                            <circle class="opacity-25 bg-white" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75 bg-white" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-2c0 3.314-2.686 6-6 6-3.314 0-6-2.686-6-6H6c0 4.411 3.589 8 8 8z"></path>
                        </svg>
                        Loading...
                        </span>
                        <span v-else>
                          save
                        </span>
                    </button>
                  </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

</template>


<script>
import { PencilIcon, UserIcon, XMarkIcon} from '@heroicons/vue/24/outline';
import { ref, onMounted} from 'vue'
import axios from 'axios';
import config  from '../../../config'
import { useUserStore } from '../../stores/store';
import Swal from 'sweetalert2';

export default{
    components:{
      PencilIcon, UserIcon, XMarkIcon
    },

    setup(){

        
        const is_loading = ref(false)
        const users = ref(null)

        const password = ref(null)
        const passcode = ref(null)

        const userStore = useUserStore();
        const userId = userStore.getUserId;

        const isModalOpen = ref(false);

        const loading = ref(false)

        const openModal = () => {
        isModalOpen.value = true;
        };

        const closeModal = () => {
        isModalOpen.value = false;
        };
      

        onMounted(()=>{
           console.log("okay id "+userId)
           read_user_information()
        
        })

        const update_user_password = ()=>{
            
            if(!password.value || !passcode.value){
                Swal.fire({
                text:"Please fill in all required fields!",
                icon:"warning",
                dangerMode: true
                })
            }else if(password.value !== passcode.value){
                  Swal.fire({
                    text:"Make sure that the passwords are similar!",
                    icon:"warning",
                    dangerMode: true
                    })
            }else{
                   loading.value = true
                    axios
                        .put(`${config.API_URL}/update_user_password/${userId}`,
                        {
                        password: password.value
                        }
                        ).then((response)=>{
                            if(response.status === 200){
                            Swal.fire({
                                title:"Information",
                                text: response.data.message,
                                icon: "success",
                            }).then((ok)=>{
                                if(ok){
                                    isModalOpen.value = false;
                                }
                            })
                             loading.value = false
                            }
                        })
                }
            }

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
            update_user_password,
            users,
            is_loading,
            isModalOpen,
            openModal,
            closeModal,
            password,
            passcode,
            loading
        }
    }
}
</script>