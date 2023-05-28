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
                        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-gray-700"> {{ feedback.title }} <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">| From : {{ feedback.feedBackDocs.first_name }}</span></h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Submitted on {{ feedback.date_submitted }}</time>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ feedback.description }}</p>

                        <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-medium_light_blue border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 
                        focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        <EnvelopeOpenIcon class="h-6 w-6 mr-2"></EnvelopeOpenIcon>
                         Respond</button>
                    </li>
                </ol>


            </div>
        </div>
    </div>
</template>

<script>

import {ref, onMounted} from 'vue'
import {PlusCircleIcon, UserPlusIcon,EnvelopeOpenIcon } from '@heroicons/vue/24/outline'
import config  from '../../../config'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useUserStore } from '../../stores/store';

export default{
    components:{
        EnvelopeOpenIcon
    },
      setup(){

        const feedbacks = ref([])

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

        onMounted(()=>{
            list_feedback_unanswered()
        })

        return{
            list_feedback_unanswered,
            feedbacks
           
        }
    }
}

</script>