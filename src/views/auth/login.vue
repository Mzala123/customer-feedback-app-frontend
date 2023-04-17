<template>
  <div class="container mx-auto">
    <p>Trial by fire</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      
    };
  },
};
</script>

<style>
        * {
            margin:0;
            padding:0;
        }
        .input {
            transition: border 0.2s ease-in-out;
            min-width: 280px
        }
        .input:focus+.label,
        .input:active+.label,
        .input.filled+.label {
            font-size: .75rem;
            transition: all 0.2s ease-out;
            top: -0.3rem;
            color: #6b7280;
        }
        .label {
            transition: all 0.2s ease-out;
            top: 0.4rem;
            left: 0;
        }
</style>