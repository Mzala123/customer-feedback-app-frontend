<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg">
      <h2 class="text-2xl font-semibold mb-6">About Us</h2>
      <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis tortor nec eros
        vestibulum, a euismod tellus consectetur. Duis consectetur nisl a libero volutpat, nec egestas purus
        ultricies. Vestibulum consequat felis sit amet aliquam facilisis. Proin sed urna non metus rhoncus
        accumsan. Mauris malesuada tempor ex, et tincidunt eros vulputate vel. In hac habitasse platea
        dictumst. Quisque suscipit consequat ultricies.</p>
      <p class="mb-4">Praesent volutpat rhoncus malesuada. Vestibulum quis fermentum leo. Sed consectetur
        massa at massa tincidunt, nec lacinia velit maximus. Duis congue elit in purus dignissim, id
        aliquam risus lacinia. Pellentesque consectetur lobortis ex vel rhoncus. Proin ultricies
        consectetur nulla, eu sollicitudin nisi pulvinar et. Curabitur lobortis felis ac velit lacinia
        consequat. Phasellus ut lorem ac lectus viverra convallis. Aenean at enim eget mauris
        ultricies efficitur eu in tellus.</p>
      <p class="mb-4">Nam ut gravida sapien. Nunc ullamcorper nunc sem, sed gravida nisi vestibulum a.
        Integer nec mi lacus. Curabitur congue, ligula id viverra venenatis, mi lectus lacinia
        felis, in fringilla odio turpis id est. Phasellus dapibus facilisis augue, a sagittis dui
        facilisis eget. Fusce elementum iaculis volutpat. Proin fringilla consequat ante id
        sollicitudin.</p>
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
