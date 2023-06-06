<template>
    <div class="container mx-auto m-5 rounded-lg border-1 border-gray-600 px-3">

                <div class="w-full  flex justify-between">
                    <div>
                        <button @click="exportUserList" class="rounded-lg bg-medium_light_blue hover:bg-dark_blue hover:shadow-md w-48 
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

          <div class="flex">
            <router-link :to="'/view_user_details/'+_id">
              <EyeIcon class="stroke-gray-700 mr-2 h-5 w-5"></EyeIcon>
            </router-link>

            <router-link :to="'/update_user/'+_id">
              <PencilIcon class="stroke-blue mr-2 h-5 w-5"></PencilIcon>
            </router-link>

           <button @click="deleteUser(_id)">
              <ArchiveBoxArrowDownIcon class="stroke-red-700 mr-2 h-5 w-5"></ArchiveBoxArrowDownIcon>
          </button>
        </div>

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
import config  from './../../../config'
import Swal from 'sweetalert2';
import { DocumentArrowDownIcon, TrashIcon, EyeSlashIcon, EyeIcon,PencilIcon, ArchiveBoxArrowDownIcon } from '@heroicons/vue/24/outline';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'


export default{
    components:{DocumentArrowDownIcon, TrashIcon, EyeSlashIcon, PencilIcon, EyeIcon, ArchiveBoxArrowDownIcon
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

     const exportUserList = ()=>{
          const doc = new jsPDF()
          const rows = []
          users.value.forEach(list =>{
            const temp = [list.national_id, list.first_name+' '+list.last_name,list.email, list.gender, list.age, list.address]
            rows.push(temp)
          })
          doc.text("Organisation | National Bank of Malawi",10, 10)
          doc.text('Users report',10,20)
          doc.line(0,35,400,35)
          autoTable(doc,{
            head: [['National Id', 'Name of client', 'Email', 'Gender','Age', 'Address']],
                margin:{top:50},
                body:[...rows]
          })
          doc.save('NB|Clients list.pdf')
     }

     const deleteUser = (user_id)=>{
          Swal.fire({
                title: 'Are you sure?',
                text: `You are about to archive this record. This action cannot be undone.`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                confirmButtonText: 'Yes, archive!'
            }).then((result)=>{
                if(result.isConfirmed){
                       axios
                        .put(`${config.API_URL}/remove_user_via_update/${user_id}`)
                        .then((response)=>{
                            if(response.status === 204){
                                list_of_employees()
                            }
                        })
                }else if(result.dismiss === Swal.DismissReason.cancel){
                    console.log("Okay cancelled")
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

        return{
         headers,
        // items,
         is_loading,
         list_of_employees,
         deleteUser,
         
         users,
         searchValue,
         searchField,
         exportUserList

        }
    }
}




</script>