<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg">
      <h2 class="text-2xl font-semibold mb-6">About Us</h2>
      <p class="mb-4">Welcome to the National Bank of Malawi's Customer Feedback Software!
      we as National Bank of Malawi, 
 believe in the power of customer feedback to drive continuous improvement and enhance the banking experience for our valued customers.
 Our customer feedback software serves as a dedicated platform for you to share your thoughts, suggestions, and concerns, 
 enabling us to better understand your needs and expectations.

.</p>
     <h2 class="text-2xl font-semibold mb-6">Our Mission</h2>
      <p class="mb-4">Our mission is to actively listen to our customers and leverage their feedback to continually 
        refine our services, deliver exceptional customer experiences, 
        and remain at the forefront of banking excellence in Malawi.</p>

      <p class="mb-4">We recognize that your feedback is valuable in shaping our strategies, policies, 
        and service offerings. By sharing your experiences and suggestions,
         you play an integral role in helping us enhance our products and services, streamline processes,
          and exceed your expectations..</p>
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