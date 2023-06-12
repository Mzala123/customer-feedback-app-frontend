<template>
    <div>
      
        <div class="w-full lg:w-8/12 px-4 mx-6 mt-6">
            
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                 <h4 class="my-8 text-gray-700 font-semibold underline"> LIST OF SURVEY REVIEWS AND QUERIES</h4>
                            
                <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
                    <li v-for="feedback in feedbacks" :key="feedback._id" class="mb-10 ml-6" >            
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-gray-700"> {{ feedback.title }} 
                        <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">| From : {{ feedback.feedBackDocs.first_name }} {{ feedback.feedBackDocs.last_name }}</span></h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Submitted on {{ feedback.date_submitted }}</time>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ feedback.description }}</p>

                        <button @click="openModal(feedback._id)" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-medium_light_blue border 
                        border-gray-200 rounded-lg hover:bg-dark_blue hover:text-blue-700 focus:z-10 focus:ring-4 
                        focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 
                        dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        <EnvelopeOpenIcon class="h-6 w-6 mr-2"></EnvelopeOpenIcon>
                         Respond</button>
                    </li>
                </ol>


            </div>
        </div>
    </div>



    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="modal-overlay fixed inset-0 bg-gray-500 opacity-75"></div>

      <div class="modal-container bg-white  mx-auto rounded shadow-lg z-50">
        <div class="modal-content py-4 text-left px-6">
          <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">Add Response</p>
            <button @click="closeModal" class="modal-close cursor-pointer z-50">
            <XMarkIcon class="h-5 w-5 stroke-red-600"></XMarkIcon>
            </button>
          </div>

          <div>
            <!-- Modal content goes here -->
           
            <div class="flex flex-wrap mx-2 w-96">

                <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block text-gray-600 text-sm font-semibold mb-2">
                         Response description</label>
                        <textarea v-model="response_description" type="text" class="px-3 py-3 placeholder-black text-gray-700
                        bg-white rounded text-sm border border-gray-700 shadow-sm focus:outline-none w-full ease-linear transition-all duration-150"> </textarea>
                    </div>
                </div>

               

                 <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                        <button @click="create_response" :disabled="loading" class="w-full flex justify-center text-center bg-medium_light_blue hover:bg-dark_blue 
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

import {ref, onMounted} from 'vue'
import {PlusCircleIcon, UserPlusIcon,EnvelopeOpenIcon,XMarkIcon} from '@heroicons/vue/24/outline'
import config  from '../../../config'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useUserStore } from '../../stores/store';

export default{
    components:{
        EnvelopeOpenIcon, XMarkIcon
    },
      setup(){

        const feedbacks = ref([])
        const response_description = ref(null)
        const feedback_id = ref(null)

        const isModalOpen = ref(false);
        const loading = ref(false)

        const openModal = (feedbackId) => {
          isModalOpen.value = true;
          feedback_id.value = feedbackId
          return feedbackId;
        };

        const closeModal = () => {
        isModalOpen.value = false;
        };

        const userStore = useUserStore();
        const userId = userStore.getUserId;


        const list_feedback_unanswered = ()=>{
            axios
              .get(`${config.API_URL}/feedback_unresponded_list`)
              .then((response)=>{
                if(response.status === 200){
                    feedbacks.value = response.data
                    console.log(feedbacks.value)
                }
              })

        }

        const create_response = ()=>{
           
            console.log("okay okay "+userId)
            console.log('feedback id is '+feedback_id.value);
             if(!response_description.value){
                Swal.fire({
                text:"Please fill in all required fields!",
                icon:"warning",
                dangerMode: true
                })
             }else{
                loading.value = true
                axios
                  .post(`${config.API_URL}/feedback/${feedback_id.value}/create_response`,
                   {
                    response_description: response_description.value,
                    userId: userId
                   }
                ).then((response)=>{
                    if(response.status === 201){
                      Swal.fire({
                        title:'Information',
                        text: response.data.message,
                        icon:'success'
                      }).then((ok)=>{
                        if(ok){
                            isModalOpen.value = false
                        }
                      })
                      loading.value = false
                      list_feedback_unanswered()
                    }
                }).catch((error)=>{
                    const{status} = error.response
                    if(status === 404){
                        Swal.fire({
                                title:"Error",
                                text: "Failed to create response to feedback!",
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

        onMounted(()=>{
            list_feedback_unanswered()
            console.log('my user id is '+userId)
        })

        return{
            list_feedback_unanswered,
            feedbacks,
            loading,
            openModal,
            closeModal,
            isModalOpen,
            response_description,
            create_response,
            feedback_id
           
        }
    }
}

</script>