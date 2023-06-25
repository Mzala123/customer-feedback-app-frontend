<template>
    <div class="container mx-auto">
          <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-sm rounded-xl bg-lighest">
                   <div class="rounded-t bg-lighter mb-0 px-6 py-6">
                        <div class="flex justify-center text-center">
                            <h4 class="text-gray-700 text-xl font-semibold items-center">
                              CREATE EMPLOYEE RECORD
                            </h4>
                        </div>
                  </div>
                
                    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div class="flex flex-col items-end md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-6 rounded-lg bg-lighest md:w-1/3">
                            <img :src="profile_photo" class="w-18 mt-6 rounded-lg h-18 object-cover" alt="">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-10 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            
                            
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                                
                                    <span v-if="img_loading" class="text-gray-500 flex flex-row">
                                        <svg class="animate-spin h-5 w-5 mr-1" viewBox="0 0 24 24">
                                                    <circle class="opacity-25 bg-white" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                    <path class="opacity-75 bg-white" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-2c0 3.314-2.686 6-6 6-3.314 0-6-2.686-6-6H6c0 4.411 3.589 8 8 8z"></path>
                                         </svg>
                                        uploading...
                                    </span>
                                    <span v-else class="font-semibold flex flex-row items-center w-96 ml-12 pt-2 pl-16">
                                    <svg aria-hidden="true" class="w-6 h-6 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                   </svg> 
                                        Click to upload
                                    </span>
                                </p>
                           
                                <input accept="image/*" @change="onProfileUpload" id="dropzone-file" type="file" class="hidden" />
                                <input type="text" v-model="profile_photo" class="hidden">
                            </label>
                           
                            </div>

                         <!-- <form action="" @submit.prevent="create_employee_record"> -->
                            <h5 class="text-gray-600 text-sm mt-3 mb-6 font-semibold uppercase">
                                User Information
                            </h5>
                            <div class="flex flex-wrap">

                                <div class="w-full lg:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        National Id</label>
                                        <input v-model="national_id" type="text" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                    </div>
                                </div>

                                <div class="w-full lg:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        Firstname</label>
                                        <input v-model="first_name" type="text" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                    </div>
                                </div>

                                <div class="w-full lg:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        Lastname</label>
                                        <input v-model="last_name" type="text" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                    </div>
                                </div>

                                
                                <div class="w-full lg:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        Gender</label>
                                        <select v-model="gender" class="px-2.5 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="w-full lg:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        User role</label>
                                        <select v-model="user_type" class="px-2.5 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                            <option value="Admin">Admin</option>
                                            <option value="Enquiry Personnel">Enquiry Personnel</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="w-full lg:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        Date of birth</label>
                                        <input v-model="dob" type="date" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                    </div>
                                </div>
                            </div>
                            <hr class="mt-6 border-b-1 border-gray-600">

                            <h5 class="text-gray-600 text-sm mt-3 mb-6 font-semibold uppercase">
                                Contact Information
                            </h5>
                            <div class="flex flex-wrap">

                                <div class="w-full lg:w-12/12 px-4">
                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        Email</label>
                                        <input v-model="email" type="email" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                    </div>

                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        Phonenumber</label>
                                        <input v-model="phone_number" type="number" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                    </div>

                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        Current City</label>
                                        <input v-model="current_city" type="text" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                    </div>

                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        Place of residence </label>
                                        <input v-model="place_residence" type="text" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                    </div>

                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        Address</label>
                                        <textarea v-model="address" type="text" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150"> </textarea>
                                    </div>

                                    <div class="relative w-full mb-3 mt-6 flex justify-end">
                                        
                                        <button @click="reset_form" class="rounded-lg bg-red-600 mr-5 px-3 py-3 text-white w-52 hover:bg-red-700">
                                           Cancel
                                        </button>

                                       <button @click="create_employee_record" :disabled="loading" class="flex justify-center items-center rounded-lg 
                                        bg-medium_light_blue px-3 py-3 text-white w-52 hover:bg-dark_blue">
                                            
                                          <span v-if="loading" class="flex justify-items-center">
                                                <svg class="animate-spin h-5 w-5 mr-1" viewBox="0 0 24 24">
                                                    <circle class="opacity-25 bg-white" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                    <path class="opacity-75 bg-white" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-2c0 3.314-2.686 6-6 6-3.314 0-6-2.686-6-6H6c0 4.411 3.589 8 8 8z"></path>
                                                </svg>
                                                Loading...
                                            </span>
                                          <span v-else class="flex justify-items-center">
                                            <PlusCircleIcon class="h-6 w-6 mr-3"/>
                                            <p> Save </p>
                                          </span>

                                       </button>


                                    </div>
                               
                                </div>

                            </div>

                        <!-- </form> -->
                    </div>
              </div>
          </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import {PlusCircleIcon, UserPlusIcon} from '@heroicons/vue/24/outline'
import config  from '../../../config'
import axios from 'axios';
import Swal from 'sweetalert2';
import router from "../../router";

export default{
    components:{
        UserPlusIcon, PlusCircleIcon
    },
    setup(){


        const national_id = ref(null)
        const first_name = ref(null)
        const last_name = ref(null)
        const email = ref(null)
        const gender = ref(null)
        const dob = ref(null)
        const phone_number = ref(null)
        const profile_photo = ref(`${config.defaultImage}`)
        const address = ref(null)
        const place_residence = ref(null)
        const current_city = ref(null)
        const user_type = ref(null)
        const loading = ref(false)
        const img_loading = ref(false)


         function create_employee_record(){
           
            if(!national_id.value || !first_name.value|| !last_name.value || !email.value || !gender.value){
             loading.value = true
             Swal.fire({
              text:"Please fill in all required fields!",
              icon:"warning",
              dangerMode: true
             })
             loading.value = false
          }else{
             loading.value = true
             axios
               .post(`${config.API_URL}/register`,
               {
                national_id: national_id.value,
                first_name: first_name.value,
                last_name: last_name.value,
                email: email.value,
                gender: gender.value,
                dob: dob.value,
                phone_number: phone_number.value,
                profile_photo: profile_photo.value,
                address: address.value,
                place_residence: place_residence.value,
                current_city: current_city.value,
                user_type: user_type.value
               }
               ).then((response)=>{
                  if(response.status === 200){
                    Swal.fire({
                                title:"Information",
                                text: response.data.message,
                                icon: "warning",
                             })
                    loading.value = false

                  }else if(response.status === 201){
                    Swal.fire({
                                title:"Information",
                                text: "Employee Created Successfully!",
                                icon: "success",
                             })
                             .then((ok=>{
                              loading.value = false
                              if(ok){
                                 router.push({path:"/user_list"})
                              }  

                             }))
                  }
               }).catch((error)=>{
                 const{status} = error.response
                    if(status === 404){
                        Swal.fire({
                                title:"Information",
                                text: "Failed to create an Employee record!",
                                icon: "error",
                             })
                    }else{
                        Swal.fire({
                                title:"Information",
                                text: "Check your network connection!",
                                icon: "warning",
                             })
                    }
               })
          }
         }

         const onProfileUpload = (e) => {
                const file = e.target.files[0];
                if (!file) {
                    console.log('No file selected');
                    return;
                }

                img_loading.value = true;
                const formData = new FormData();
                formData.append('picture', file);

                axios
                    .post(`${config.API_URL}/upload_image`, formData)
                    .then((response) => {
                    profile_photo.value = response.data.image_url;
                    console.log("The image URL is: " + profile_photo.value);
                    img_loading.value = false;
                    })
                    .catch((error) => {
                    console.log('Error:', error);
                    img_loading.value = false;
                    });
         };

         const reset_form = ()=>{
            national_id.value = ""
            first_name.value = ""
            last_name.value =""
            email.value =""
            gender.value =""
            dob.value =""
            phone_number.value =""
            //profile_photo.value =""
            address.value =""
            place_residence.value =""
            current_city.value =""
            user_type.value = ""
         }

        return{
            national_id,
            first_name,
            last_name,
            email,
            gender,
            dob,
            phone_number,
            profile_photo,
            address,
            place_residence,
            current_city,
            user_type,
            create_employee_record,
            loading,
            reset_form,
            onProfileUpload,
            img_loading
        }
    }
}
</script>