<template>
    <div class="container mx-auto m-5 rounded-lg border-1 border-gray-600 px-3">

                <div class="w-full lg:w-4/12 justify-items-end">
                    <div class="relative w-full mb-6">
                        <label class="block text-gray-600 text-sm font-semibold mb-2">
                        Employee Id</label>
                        <input type="text" v-model="search" placeholder="search" class="px-3 py-3 placeholder-black text-gray-700 border border-gray-700
                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                    </div>
                </div>


       <div v-if="!is_loading">
        <EasyDataTable
            :headers="headers"
            :items="users"
            :search="search"
            class="text-lg "

        />
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

export default{

    setup(){


        const is_loading = ref(false)
        const users = ref([])
        const search = ref("")

        const headers = ([
      { text: "Email", value: "email", sortable: true },
      { text: "First name", value: "first_name"},
      { text: "Last name", value: "last_name", sortable: true },
      { text: "Gender", value: "gender", sortable: true },
      { text: "Age", value: "age", sortable: true }

    ])

    const items = ref([
      { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
    //   { "name": "James", "height": 180, "weight": 75, "age": 21 },
    //   { "name": "Jordan", "height": 181, "weight": 73, "age": 22 }
    ]);


   onMounted(()=>{
        create_bambo()
    })

     const create_bambo = ()=>{
        is_loading.value = true
        axios
         .get('http://localhost:3000/api/employee_list')
         .then((response)=>{
             users.value = response.data
             console.log(users.value)
             is_loading.value = false
    
         }).catch(()=>{
            is_loading.value = false
         })
      
     
     }
        return{
         headers,
         items,
         is_loading,
         create_bambo,
         users,
         search
        }
    }
}




</script>