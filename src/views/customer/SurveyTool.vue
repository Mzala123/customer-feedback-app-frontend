<template>
    <div class="container">
      <div class="w-full lg:w-8/12 px-4 mx-6 mt-6">
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <h4 class="flex items-center font-semibold px-4 pt-6 pb-8">
            SURVEY TOOL
          </h4>
          <p class="text-sm px-4 mb-3">
            Toggle to switch to either English or Chichewa
          </p>
          <div class="mx-4 py-3 bg-lighest w-58 rounded-lg flex justify-center">
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                v-model="language"
                class="sr-only peer"
                @click="toggleLanguage"
              />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span class="ml-3 text-sm font-medium text-black dark:text-gray-300">
                {{ language ? 'Sinthani chilankhulo' : 'Switch language' }}
              </span>
            </label>
          </div>
  
          <div class="w-full lg:w-12/12 px-4 pt-6">
            <div class="relative w-full mb-3">
              <label
                class="block text-gray-600 text-sm font-semibold mb-2"
                :for="getFeedbackTitleId"
              >
                {{ translation.feedbackTitle }}
              </label>
              <input
                v-model="title"
                :id="getFeedbackTitleId"
                type="text"
                class="px-3 py-3 placeholder-black text-gray-700 bg-lighest rounded text-sm shadow-sm focus:outline-none w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
  
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block text-gray-600 text-sm font-semibold mb-2"
                :for="getFeedbackTypeId"
              >
                {{ translation.feedbackType }}
              </label>
              <select
                v-model="type"
                :id="getFeedbackTypeId"
                class="px-2.5 py-3 placeholder-black text-gray-700 bg-lighest rounded text-sm shadow-sm focus:outline-none w-full ease-linear transition-all duration-150"
              >
                <option value="Complaint">{{ translation.complaint }}</option>
                <option value="Suggestion">{{ translation.suggestion }}</option>
              </select>
            </div>
          </div>
  
          <div class="w-full lg:w-12/12 px-4">
            <label
              class="block text-gray-600 text-sm font-semibold mb-2"
              :for="getFeedbackDescriptionId"
            >
              {{ translation.feedbackDescription }}
            </label>
            <textarea
              v-model="description"
              :id="getFeedbackDescriptionId"
              rows="4"
              class="px-3 py-3 placeholder-black text-gray-700 bg-lighest rounded text-sm shadow-sm focus:outline-none w-full ease-linear transition-all duration-150"
            ></textarea>
          </div>


          <div class=" w-full lg:w-12/12 px-4 mt-3 flex flex-col">
          <div>
            <label
              class="block text-gray-600 text-sm font-semibold mb-2"
              :for="getFeedbackDescriptionId"
            >
              {{ translation.question1 }}
            </label>
          </div>
          <div class="flex flex-row">
          <div v-for="star in totalStars" :key="star" class="flex flex-row star" @click="selectRating(star)">
            <svg
              class="star-icon"
              :class="{ 'filled': star <= selectedRating }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2L14.55 8.39L21 9.13L16.24 13.34L17.47 20.87L12 17.5L6.53 20.87L7.76 13.34L3 9.13L9.45 8.39L12 2Z"
              />
            </svg>
          </div>
          <div class="selected-rating">
            <span>Selected Rating:</span>
            <span>{{ selectedRating }}</span>
            <input class="hidden" type="number" v-model="selectedRating">
          </div>
        </div>
        </div>


        <!--Question two-->
        <div class=" w-full lg:w-12/12 px-4 mt-8 flex flex-col">
          <div>
            <label
              class="block text-gray-600 text-sm font-semibold mb-2"
              :for="getFeedbackDescriptionId"
            >
              {{ translation.question2 }}
            </label>
          </div>
          <div class="flex flex-row">
          <div v-for="star in totalStars" :key="star" class="flex flex-row star" @click="selectRating1(star)">
            <svg
              class="star-icon"
              :class="{ 'filled': star <= selectedRating1 }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2L14.55 8.39L21 9.13L16.24 13.34L17.47 20.87L12 17.5L6.53 20.87L7.76 13.34L3 9.13L9.45 8.39L12 2Z"
              />
            </svg>
          </div>
          <div class="selected-rating">
            <span>Selected Rating:</span>
            <span>{{selectedRating1 }}</span>
            <input class="hidden" type="number" v-model="selectedRating1">
          </div>
        </div>
        </div>
  

           <!--Question threww-->
           <div class=" w-full lg:w-12/12 px-4 mt-8 flex flex-col">
          <div>
            <label
              class="block text-gray-600 text-sm font-semibold mb-2"
              :for="getFeedbackDescriptionId"
            >
              {{ translation.question3 }}
            </label>
          </div>
          <div class="flex flex-row">
          <div v-for="star in totalStars" :key="star" class="flex flex-row star" @click="selectRating2(star)">
            <svg
              class="star-icon"
              :class="{ 'filled': star <= selectedRating2 }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2L14.55 8.39L21 9.13L16.24 13.34L17.47 20.87L12 17.5L6.53 20.87L7.76 13.34L3 9.13L9.45 8.39L12 2Z"
              />
            </svg>
          </div>
          <div class="selected-rating">
            <span>Selected Rating:</span>
            <span>{{selectedRating2 }}</span>
            <input class="hidden" type="number" v-model="selectedRating2">
          </div>
        </div>
        </div>
  
         
            <div class="relative w-full mb-3 mt-6 flex justify-end px-4">

                <button @click="reset_form" class="rounded-lg bg-red-600 mr-5 px-3 py-3 text-white w-48 hover:bg-red-700">
                    <p>   {{ translation.cancel }} </p>
                </button>

                <button @click="create_feedback" :disabled="loading" class="flex justify-center items-center rounded-lg 
                bg-medium_light_blue px-3 py-3 text-white w-48 hover:bg-dark_blue">
                    
                    <span v-if="loading" class="flex justify-items-center">
                        <svg class="animate-spin h-5 w-5 mr-1" viewBox="0 0 24 24">
                            <circle class="opacity-25 bg-white" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75 bg-white" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-2c0 3.314-2.686 6-6 6-3.314 0-6-2.686-6-6H6c0 4.411 3.589 8 8 8z"></path>
                        </svg>
                        Loading...
                    </span>
                    <span v-else class="flex justify-items-center">
                    <PlusCircleIcon class="h-6 w-6 mr-3"/>
                    <p>   {{ translation.submit }} </p>
                    </span>

                </button>
            </div>
         
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { ref, computed } from 'vue';
import config  from '../../../config'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useUserStore } from '../../stores/store';
import router from "../../router";
import {PlusCircleIcon, UserPlusIcon} from '@heroicons/vue/24/outline'
    
  export default {
    components:{
        PlusCircleIcon,UserPlusIcon
    },
    name: 'FeedbackForm',
    setup() {
      const language = ref(false); // English is default
      const title = ref('');
      const type = ref('');
      const description = ref('');
      const loading = ref(false)

        const userStore = useUserStore();
        const userId = userStore.getUserId;

        const totalStars = 5;
        const selectedRating = ref(0);

        const selectRating = (rating) => {
          selectedRating.value = rating;
        };

        const selectedRating1 = ref(0)
        const selectRating1 = (rating)=>{
          selectedRating1.value = rating
        }

        const selectedRating2 = ref(0)
        const selectRating2 = (rating)=>{
          selectedRating2.value = rating
        }


  
      const translations = {
        en: {
          feedbackTitle: 'Feedback Title',
          feedbackType: 'Feedback Type',
          complaint: 'Complaint',
          suggestion: 'Suggestion',
          feedbackDescription: 'Feedback Description',
          question1:"How satisfied are you with the accessibility and availability of the bank's branch network and ATMs?",
          question2:"How satisfied are you with the level of security provided by the bank for your transactions and personal information?",
          question3:"How likely are you to recommend the National Bank of Malawi to family, friends, or colleagues?",
          submit: 'Submit',
          cancel: 'Cancel'
        },
        ch: {
          feedbackTitle: 'Mutu wa Ndemanga',
          feedbackType: 'Ntundu wa ndemanga',
          complaint: 'Dandaulo',
          suggestion: 'Lingaliro',
          feedbackDescription: 'Kafotokoza ka ndemanga',
          question1:"Kodi ndinu okhutira bwanji ndi kupezeka kwa nthambi ya ATM?",
          question2:"Kodi ndinu okhutira bwanji ndi chitetezo  chomwe bankiyi imapereka?",
          question3:"Kodi mungalimbikitse  amzanu kuti ayambe kugwiritsa ntchito bankiyi?",
          submit: 'Tumiza',
          cancel:'Siya'
        },
      };
  
      const translation = computed(() =>
        language.value ? translations.ch : translations.en
      );
  
     
      const getFeedbackTitleId = computed(() => {
        return language.value ? 'feedbackTitleChichewa' : 'feedbackTitle';
      });
  
      const getFeedbackTypeId = computed(() => {
        return language.value ? 'feedbackTypeChichewa' : 'feedbackType';
      });
  
      const getFeedbackDescriptionId = computed(() => {
        return language.value
          ? 'feedbackDescriptionChichewa'
          : 'feedbackDescription';
      });
  
      const toggleLanguage = () => {
        language.value = !language.value;
      };
  
      const create_feedback = ()=>{
           if(!title.value || !description.value || !type.value){
            loading.value = true
             Swal.fire({
              text:"Please fill in all required fields!",
              icon:"warning",
              dangerMode: true
             })
             loading.value = false
           }else{
            loading.value = true
            console.log("The rating is "+selectedRating.value)
              //         const accessibilityRating = parseInt(selectedRating.value);
              //       const securityRating = parseInt(selectedRating1.value);
              // const recommendationRating = parseInt(selectedRating2.value);
             axios
              .post(`${config.API_URL}/feedback`,
              {
                title: title.value,
                type: type.value,
                description: description.value,
                userId: userId,
                selectedRating :selectedRating.value,
                selectedRating1 : selectedRating1.value,
                selectedRating2 : selectedRating2.value 

              }).then((response)=>{
                if(response.status === 201){
                       Swal.fire({
                                title:"Information",
                                text: response.data.message,
                                icon: "warning",
                             })

                            title.value = "",
                            type.value =""
                            description.value =""
                            selectedRating.value=""
                            selectedRating1.value=""
                            selectedRating2.value=""
                            loading.value = false    
                }

              }).catch((error)=>{
                 const{status} = error.response
                    if(status === 404){
                        Swal.fire({
                                title:"Information",
                                text: "Failed to submit a feedback!",
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


        const reset_form =()=>{
            title.value = "",
            type.value =""
            description.value =""
            selectedRating.value=""
            selectedRating1.value=""
            selectedRating2.value=""

        }

    
  
      return {
        language,
        translation,
        title,
        type,
        description,
        getFeedbackTitleId,
        getFeedbackTypeId,
        getFeedbackDescriptionId,
        toggleLanguage,
        create_feedback,
        reset_form,
        loading,

        totalStars,
        selectedRating,
        selectRating,


        selectedRating1,
        selectRating1,

        selectedRating2,
        selectRating2

      };
    },
  };
  </script>
  

  <style scoped>
.rating-form {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.star {
  cursor: pointer;
}

.star-icon {
  width: 24px;
  height: 24px;
  transition: fill 0.2s;
}

.star-icon.filled {
  fill: #DC3E;
}

.selected-rating {
  font-weight: bold;
}
</style>