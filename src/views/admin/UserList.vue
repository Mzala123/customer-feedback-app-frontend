<template>
    <div class="container mx-auto m-5 rounded-lg border-1 border-gray-600 px-3">

                <div class="w-full  flex justify-between">
                    <div>
                        <button class="rounded-lg bg-medium_light_blue hover:bg-dark_blue hover:shadow-md w-48 
                        flex items-center text-white py-3 px-2">
                           <DocumentArrowDownIcon class="h-6 w-6 mr-3"></DocumentArrowDownIcon>
                            <p>Export</p> 
                        </button>
                    </div>
                    <div class="relative w-96 mb-6">
                        <!-- <label class="block text-gray-600 text-sm font-semibold mb-2">
                        Employee Id</label> -->
                        <input type="text" v-model="searchValue" placeholder="search" class="px-3 py-3 placeholder-black text-gray-700 border border-gray-700
                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                    </div>
                </div>


       <div v-if="!is_loading">
        <EasyDataTable
            :headers="headers"
            :items="users"
            :search-field="searchField"
            :search-value="searchValue"
        >
        <template #item-action="{_id}">
           <button @click="deleteUser(_id)">
              <TrashIcon class="stroke-red-700 ml-2 h-5 w-5"></TrashIcon>
          </button>
       </template>
    </EasyDataTable>
       </div>
       <div v-else class="animate-pulse text-center py-16 text-sm">
            Fetching data...
       </div>
    </div>
</template>

<script>
//import  from "vue3-easy-data-table"
import {ref, onMounted, reactive} from 'vue'
import axios from 'axios';
import config  from '../../../config'

import { DocumentArrowDownIcon, TrashIcon } from '@heroicons/vue/24/outline';

export default{
    components:{DocumentArrowDownIcon, TrashIcon
    },
    setup(){


        const is_loading = ref(false)
        const users = ref([])
        const searchField = ref("");
        const searchValue = ref("");


        const headers = ([
      { text: "Email", value: "email", sortable: true },
      { text: "User role", value: "user_type"},
      { text: "First name", value: "first_name"},
      { text: "Last name", value: "last_name", sortable: true },
      { text: "Gender", value: "gender", sortable: true },
      { text: "Age", value: "age", sortable: true },
       {text: "Actions", value: "action", sortable: true }

    ])

   onMounted(()=>{
       list_of_employees()
    })

     const list_of_employees = ()=>{
        is_loading.value = true
        axios
         .get(`${config.API_URL}/employee_list`)
         .then((response)=>{
             users.value = response.data
             console.log(users.value)
             is_loading.value = false
    
         }).catch(()=>{
            is_loading.value = false
         })
     }

     const deleteUser = (user_id)=>{
        console.log(user_id)
     }

        return{
         headers,
        // items,
         is_loading,
         list_of_employees,
         deleteUser,
         
         users,
         searchValue,
         searchField 

        }
    }
}




</script>