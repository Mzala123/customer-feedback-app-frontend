<template>
    <div class="container mx-auto ">
    <h2>our stuff</h2>
    <div class="h-16 bg-white shadow-sm fixed w-full left-0 top-0 fixed  ">
   <button class="bg-medium_light_blue py-2 px-4 text-white rounded-md m-4 w-64" @click="increment">
    add
    <div v-show="spinner"
  class="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
</div>
</button>

  </div>
</div>
   
</template>
<script>
import {ref} from 'vue'
import { reactive } from 'vue';

export default {
  setup() {
    const spinner = ref(false)

    const increment = ()=>{
        spinner.value = !spinner.value
    }
    return {
      spinner,
      increment
    };

  },
};
</script>