<template>
    <div class="container mx-auto m-5 rounded-lg border-1 border-gray-600 px-3">
         <div class="w-full  flex justify-between">
                     <div>
                         <button @click="export_my_responded_queries" class="rounded-lg mr-2 bg-medium_light_blue hover:bg-dark_blue hover:shadow-md w-48 
                         flex items-center text-white py-3 px-2">
                            <DocumentArrowDownIcon class="h-6 w-6 mr-3 stroke-white"></DocumentArrowDownIcon>
                             <p>Export</p> 
                         </button>
                     </div>
                     <div class="relative w-96 mb-6">
                         <!-- <label class="block text-gray-600 text-sm font-semibold mb-2">
                         Employee Id</label> -->
                         <input type="text" v-model="searchValue" placeholder="search" class="px-3 py-3 my-2 placeholder-black text-gray-700 border border-gray-700
                         bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                     </div>
         </div>
 
 
         <div v-if="!is_loading">
         <EasyDataTable
             :headers="headers"
             :items="feedbacks"
             :search-field="searchField"
             :search-value="searchValue"
         >
         <template #item-action="{_id}">
 
        </template>
        
     </EasyDataTable>
        </div>
        <div v-else class="animate-pulse text-center py-16 text-sm">
             Fetching data...
        </div>
     </div>
 </template>
 
 <script>
 import { ref, onMounted} from 'vue'
 import axios from 'axios';
 import config  from '../../../config'
 import { useUserStore } from '../../stores/store';
 import Swal from 'sweetalert2';
 import { DocumentArrowDownIcon, TrashIcon, EyeSlashIcon, EyeIcon,PencilIcon, ArchiveBoxArrowDownIcon } from '@heroicons/vue/24/outline';
 import jsPDF from 'jspdf'
 import autoTable from 'jspdf-autotable'
 
 export default{
    components:{
     DocumentArrowDownIcon
    },
     setup(){
         const userStore = useUserStore();
         const userId = userStore.getUserId;
         const feedbacks = ref([]);
         const searchField = ref("");
         const searchValue = ref("");
         const is_loading = ref(false)
         const headers = ([
                 { text: "Feedback Type", value: "type", sortable: true },
                 { text: "Feedback Title", value: "title"},
                 { text: "Description", value: "description"},
                 { text: "Date submitted", value: "date_submitted", sortable: true },
                 { text: "Submitted by", value: "feedBackDocs.email", sortable: true },
                 { text: "Response  Description", value: "response_description", sortable: true },
                 { text: "Response Time", value: "response_submission_date", sortable: true },
             ])
 
         onMounted(()=>{
            console.log("okay id "+userId)
            get_list_my_responded_queries()
         })
 
         const get_list_my_responded_queries = ()=>{
                is_loading.value = true
                 axios
                   .get(`${config.API_URL}/my_responded_queries_list/${userId}`)
                   .then((response)=>{
                     if(response.status === 200){
                        //  feedbacks.value = response.data
                        feedbacks.value = response.data.map((item) => ({
                        ...item,
                        response_description: item.response.length > 0 ? item.response[0].response_description : "",
                        response_submission_date: item.response.length > 0 ? item.response[0].submission_date : "",
                        }));
                         is_loading.value = false
                          console.log(feedbacks.value)
                     }
                   }).catch((error)=>{
                     const{status} = error.response
                     if(status === 404){
                         Swal.fire({
                                 title:"Error",
                                 text: "Failed to load feedback records!",
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
 
            const export_my_responded_queries = ()=>{
                const doc = new jsPDF({
                    orientation: "landscape",
                  })

                 const rows = []
                 feedbacks.value.forEach(list=>{
                    const temp = [list.type, list.title, list.description, list.date_submitted, list.feedBackDocs.email+' '+list.feedBackDocs.first_name+' '+list.feedBackDocs.last_name,
                             list.response[0].response_description, list.response[0].submission_date ]
                    rows.push(temp)
                 })
                 doc.text("Organisation | National Bank of Malawi",10, 10)
                 doc.text('Responded queries report',10,20)
                    doc.line(0,35,400,35)
                    autoTable(doc,{
                        head: [['Feedback type', 'Feedback title', 'Description', 'Date submitted','Submitted by', 'Response Description', 'Response submission date']],
                            margin:{top:50},
                            body:[...rows],
                             theme:'plain'
                    })
                    doc.save('NB|responded queries list.pdf') 
            }
 
 
         return{
             feedbacks,
                searchField,
                searchValue,
                is_loading,
                headers,
                get_list_my_responded_queries,
                export_my_responded_queries
         }
     }
 }
 
 </script>
 
 <style>
 
 </style>