<template>
    <div class="text-center py-4">
      <h2 class="text-xl font-semibold">{{ question }}</h2>
      <button @click="selectQuestion" class="mt-2 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
        Select
      </button>
    </div>
  </template>
  
  <script>
  import { inject } from 'vue';
  
  export default {
    props: {
      question: String,
    },
    setup(props) {
      const handleQuestionSelect = inject('handleQuestionSelect');
  
      const selectQuestion = () => {
        handleQuestionSelect(props.question);
      };
  
      return {
        selectQuestion,
      };
    },
  };
  </script>
  
  <style>
  /* Add Tailwind CSS classes here if needed */
  </style>