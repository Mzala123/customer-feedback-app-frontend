<template>
  <div class="container mx-auto px-4 sm:px-8">
      
     <h1>home</h1>   
     <button
    class="bg-medium_light_blue hover:bg-medium_light_blue text-white font-bold py-2 px-4 rounded"
    :disabled="loading"
    @click="simulateLoading"
  >
    <span v-if="loading" class="flex justify-items-center">
      <svg class="animate-spin h-5 w-5 mr-1" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-2c0 3.314-2.686 6-6 6-3.314 0-6-2.686-6-6H6c0 4.411 3.589 8 8 8z"></path>
      </svg>
      Loading...
    </span>
    <span v-else>
      Submit
    </span>
  </button>

 </div>
</template>

<script>

import {ref} from 'vue'

export default{
    setup(){
 
         const loading = ref(false);
         const simulateLoading = () => {
            loading.value = true;

            // Simulate an asynchronous operation
            setTimeout(() => {
                loading.value = false;
            }, 2000);
            };

        return{
            loading,
            simulateLoading

        }

    }
}
</script>
