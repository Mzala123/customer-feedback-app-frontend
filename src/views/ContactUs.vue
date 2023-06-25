<template>
    <div class="container mx-auto">
    
        <div class="flex items-center justify-start min-h-screen">
            <div class="bg-white p-8 rounded-lg">
            <h2 class="text-2xl font-semibold mb-6">Contact Us</h2>
            <div class="mb-4">
                <p class="text-lg">Physical Address:</p>
                <p class="text-gray-600">234 ,Lilongwe</p>
                <p class="text-gray-600">capital city</p>
            </div>
            <div class="mb-4">
                <p class="text-lg">Phone Numbers:</p>
                <p class="text-gray-600">Main: (265)880025627</p>
                <p class="text-gray-600">enquiry: (265) 999546185</p>
                <p class="text-gray-600">EMAIL: NBMcustomersoft@gmail.com</p>
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