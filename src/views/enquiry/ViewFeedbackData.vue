<template>
       <div class="container mx-auto m-5">
            <div v-if="is_loading"
                class="absolute z-10 mt-10 bg-white/50 flex justify-center items-center w-full h-full"
                >
                <div class="h-10 w-10 border-2 animate-spin bg-blue"></div>
            </div>

            <!-- <div class="mt-3 mb-6 ml-8">
            <router-link :to="'/user_list'" class="bg-light_sky_blue text-sm w-20 font-medium px-2 py-2 rounded-full flex items-center hover:shadow-md">
                    <ArrowSmallLeftIcon class="h-6 w-6 mr-2"></ArrowSmallLeftIcon>
                    Back
            </router-link>
            </div> -->
            <div v-if="!is_loading" class="container mx-auto px-10 space-y-0">
                 <h3 class=" max-w-md text-2xl font-bold uppercase mt-6">
                       {{ feedbacks?.title }}
                 </h3>
                 <p class="max-w-md pt-4">
                    <span class=" text-lg font-semibold underline text-gray-500"> {{ feedbacks?.type }} | From - {{ feedbacks?.feedbackDocs?.first_name }}  {{ feedbacks?.feedbackDocs?.last_name }} </span>
                 </p>
                 <p class="max-w-md pt-2 text-gray-600 md:text-left flex flex-col">
                    <span class="font-bold py-2">Description</span>
                    <span class="text-sm text-gray-700"> {{ feedbacks?.description }} </span>
                 </p>
                 <p class="max-w-md pt-4 text-gray-600 md:text-left">
                    <span class="text-sm text-gray-900">How satisfied are you with the accessibility and availability of the banks branch network and ATMs 
                        </span>
                    </p>
                 <div class="flex flex-row">

                 <div v-for="star in totalStars" class="flex flex-row">
                    <svg
                    class="star-icon"
                    :class="{ 'filled':  star <= feedbacks?.How_satisfied_are_you_with_the_accessibility_and_availability_of_the_banks_branch_network_and_ATMs }"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    >
                    <path
                        d="M12 2L14.55 8.39L21 9.13L16.24 13.34L17.47 20.87L12 17.5L6.53 20.87L7.76 13.34L3 9.13L9.45 8.39L12 2Z"
                    />
                    </svg>
                    <!-- <span class="text-sm text-gray-500"> {{ feedbacks.}} </span> -->
                </div>
                </div>


                <p class="max-w-md pt-4 text-gray-600 md:text-left">
                    <span class="text-sm text-gray-900">How satisfied are you with the level of security provided by the bank for your transactions and personal information?
                        </span>
                    </p>
                 <div class="flex flex-row">

                 <div v-for="star in totalStars" class="flex flex-row">
                    <svg
                    class="star-icon"
                    :class="{ 'filled':  star <= feedbacks?.How_satisfied_are_you_with_the_level_of_security_provided_by_the_bank_for_your_transactions_and_personal_information }"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    >
                    <path
                        d="M12 2L14.55 8.39L21 9.13L16.24 13.34L17.47 20.87L12 17.5L6.53 20.87L7.76 13.34L3 9.13L9.45 8.39L12 2Z"
                    />
                    </svg>
                    <!-- <span class="text-sm text-gray-500"> {{ feedbacks.}} </span> -->
                </div>
                </div>


                <p class="max-w-md pt-4 text-gray-600 md:text-left">
                    <span class="text-sm text-gray-900">How likely are you to recommend the National Bank of Malawi to family friends or colleagues
                        </span>
                    </p>
                 <div class="flex flex-row">

                 <div v-for="star in totalStars" class="flex flex-row">
                    <svg
                    class="star-icon"
                    :class="{ 'filled':  star <= feedbacks?.How_likely_are_you_to_recommend_the_National_Bank_of_Malawi_to_family_friends_or_colleagues }"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    >
                    <path
                        d="M12 2L14.55 8.39L21 9.13L16.24 13.34L17.47 20.87L12 17.5L6.53 20.87L7.76 13.34L3 9.13L9.45 8.39L12 2Z"
                    />
                    </svg>
                    <!-- <span class="text-sm text-gray-500"> {{ feedbacks.}} </span> -->
                </div>
                </div>

            </div>
       </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import config from '../../../config'
import { useRoute } from 'vue-router';


import { ArrowSmallLeftIcon } from '@heroicons/vue/24/outline';

export default{
    components:{
     ArrowSmallLeftIcon
    },
    setup(){

        const feedbacks = ref([])
        const is_loading = ref(false)
        const route = useRoute()

        const totalStars = 5;

        const read_one_feedback_by_pk = (id)=>{
            is_loading.value = true
            axios
              .get(`${config.API_URL}/read_one_feedback_by_pk/`+id)
              .then((response)=>{
                feedbacks.value = response.data
                console.log(feedbacks.value)
                is_loading.value = false
              }).catch((error)=>{
                is_loading.value = false
              })
            
        }
        onMounted(()=>{
            read_one_feedback_by_pk(route.params.id)
        })
        return{
            feedbacks,
            is_loading,
            read_one_feedback_by_pk,
            totalStars
        }
    }
}
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