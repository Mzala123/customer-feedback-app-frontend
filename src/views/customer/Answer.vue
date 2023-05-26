<template>
    <div class="p-3">
      <!-- <p>{{ answer }}</p> -->
      <div v-if="nextQuestions.length > 0">
        <h3 class="text-lg font-semibold mb-2">Choose option:</h3>
        <ul>
          <li class="flex gap-4 flex-wrap" v-for="question in nextQuestions" :key="question">
            <button @click="selectQuestion(question)" class="border px-6 py-2 rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition-all">{{ question }}</button>
          </li>
        </ul>
      </div>
      <button v-if="!nextQuestions.length" @click="startOver" class="border px-6 py-2 rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition-all">Start Over</button>
    </div>
  </template>
  
  <script>
  import { inject } from 'vue';
  
  export default {
    props: {
      answer: {
        type: String,
        required: true,
      },
      nextQuestions: {
        type: Array,
        default: () => [],
      },
    },
    setup() {
      const handleQuestionSelect = inject('handleQuestionSelect');
  
      const selectQuestion = (question) => {
        if (handleQuestionSelect) {
          handleQuestionSelect(question);
        }
      };
  
      const startOver = () => {
        if (handleQuestionSelect) {
          handleQuestionSelect('Greetings');
        }
      };
  
      return {
        selectQuestion,
        startOver,
      };
    },
  };
  </script>
  
  <style>
  /* Add Tailwind CSS classes here if needed */
  </style>
  