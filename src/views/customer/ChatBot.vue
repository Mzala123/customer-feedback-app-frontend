<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-semibold mb-4">Virtual Assistant</h1>

    <div class="relative flex flex-col gap-4">
      <div
        v-if="loading"
        class="absolute z-10 bg-white/50 flex justify-center items-center w-full h-full"
      >
        <div class="h-10 w-10 border-2 animate-spin bg-primary-700"></div>
      </div>

      <template v-for="(chat, i) in chats" :key="i">
        <div v-if="chat.t === 1" class="flex justify-start">
          <div class="w-[70%]">
            <div>Assistant</div>
            <div class="p-4 rounded-2xl bg-gray-200">
              {{ chat.text }}
            </div>
          </div>
        </div>
        <div v-else class="flex justify-end">
          <div class="flex flex-col justify-end items-end w-[70%]">
            <div>You</div>
            <div class="p-4 rounded-2xl bg-primary-300">
              {{ chat.text }}
            </div>
          </div>
        </div>
      </template>

      <div v-if="currentQuestion" class="bg-primary-50">
        <Question :question="currentQuestion" />
      </div>
      <div v-else class="bg-primary-50 rounded-2xl w-[70%]">
        <Answer
          :answer="currentAnswer.answer"
          :next-questions="currentAnswer.nextQuestions"
          @select-question="handleQuestionSelect"
        />
      </div>
    </div>
  </div>
</template>

  <script>
import { ref, provide } from "vue";
import Question from "./Question.vue";
import Answer from "./Answer.vue";

export default {
  components: {
    Question,
    Answer,
  },
  setup() {
    const currentQuestion = ref("Greetings");
    const currentAnswer = ref(null);
    const loading = ref(false);

    const chats = ref([]);

    const decisionTree = {
      Greetings: {
        answer: "Hello! How can I assist you with Feedback App?",
        nextQuestions: ["About the Author", "Favorite Book"],
      },
      "About the Author": {
        answer: "The author of the Harry Potter series is J.K. Rowling.",
        nextQuestions: ["Favorite Book"],
      },
      "Favorite Book": {
        answer:'My favorite book in the series is "Harry Potter and the Prisoner of Azkaban".',
        nextQuestions: [],
      },
      // Add more questions and answers as needed
    };

    const handleQuestionSelect = (question) => {
      loading.value = true;
      if (question === "Greetings") {
        chats.value = [];
      }
      setTimeout(() => {
        if (decisionTree.hasOwnProperty(question)) {
          if ("answer" in decisionTree[question]) {
            currentAnswer.value = decisionTree[question];

            chats.value.push({ t: 2, text: question });
            chats.value.push({ t: 1, text: decisionTree[question]["answer"] });

            currentQuestion.value = null;
          } else if ("nextQuestions" in decisionTree[question]) {
            currentQuestion.value = question;
            currentAnswer.value = null;
          }
          loading.value = false;
        }
      }, 1000);
    };

    provide("handleQuestionSelect", handleQuestionSelect);

    return {
      chats,
      loading,
      currentQuestion,
      currentAnswer,
    };
  },
};
</script>
  
  <style>
/* Add Tailwind CSS classes here if needed */
</style>
  