<template>
  <div class="container mx-auto mt-28">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-sm rounded-xl bg-lighest">
                 <div class="rounded-t bg-lighter mb-0 px-6 py-6">
                      <div class="flex justify-center text-center">
                          <h4 class="text-gray-700 text-xl font-semibold items-center">
                            CREATE CUSTOMER ACCOUNT
                          </h4>
                      </div>
                </div>
              
                  <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <form action="" @submit.prevent="create_employee_record">
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

                          

                              <div class="w-full lg:w-12/12 px-4">
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

                                  <div class="relative w-full mb-3 mt-6">
                                     <button class="flex justify-center items-center rounded-lg bg-medium_light_blue px-3 py-3 text-white w-full hover:bg-dark_blue">
                                          <PlusCircleIcon class="h-6 w-6 mr-3"/>
                                          <p> Save </p>
                                     </button>
                                  </div>
                             
                              </div>

                          </div>

                      </form>
                  </div>
            </div>
        </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import {HomeIcon, UserPlusIcon, UserGroupIcon, UserIcon,PlusCircleIcon,
   Bars3CenterLeftIcon, Bars3Icon, PlusIcon, BellIcon} from '@heroicons/vue/24/outline'
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
      const profile_photo = ref(null)
      const address = ref(null)
      const place_residence = ref(null)
      const current_city = ref(null)
      const user_type = ref(null)


       function create_employee_record(){
          if(!national_id.value || !first_name.value|| !last_name.value || !email.value || !gender.value){
           Swal.fire({
            text:"Please fill in all required fields!",
            icon:"warning",
            dangerMode: true
           })
        }else{
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

                }else if(response.status === 201){
                  Swal.fire({
                              title:"Information",
                              text: "Customer record created Successfully!",
                              icon: "success",
                           })
                           .then((ok=>{
                            if(ok){
                               router.push({path:"/login"})
                            }      
                           }))
                }
             }).catch((error)=>{
               const{status} = error.response
                  if(status === 404){
                      Swal.fire({
                              title:"Information",
                              text: "Failed to create a customer record!",
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
          create_employee_record
      }
  }
}
</script>