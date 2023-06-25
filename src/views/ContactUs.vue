<template>
    <div class="container mx-auto">
    
        <div class="flex items-center justify-start min-h-screen">
            <div class="bg-white p-8 rounded-lg">
            <h2 class="text-2xl font-semibold mb-6">Contact Us</h2>
            <div class="mb-4">
                <p class="text-lg">Physical Address:</p>
                <p class="text-gray-600">123 Main Street</p>
                <p class="text-gray-600">City, State, ZIP</p>
            </div>
            <div class="mb-4">
                <p class="text-lg">Phone Numbers:</p>
                <p class="text-gray-600">Main: (123) 456-7890</p>
                <p class="text-gray-600">Sales: (123) 456-7891</p>
                <p class="text-gray-600">Support: (123) 456-7892</p>
            </div>
            </div>
        </div>

</div>
<FooterView></FooterView>
</template>


<script>

import {ref} from 'vue'
import FooterView from '../views/FooterView.vue'
export default{
  components:{
   FooterView
  },
  setup(){
    
      
      return{
          
          

      }

  }
}
</script>
