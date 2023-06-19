<template>
  <div class="container mx-auto px-4 sm:px-8">
      
     <h1>home</h1>   

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
