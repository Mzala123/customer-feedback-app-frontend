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
        nextQuestions: ["Creating an Account", "Check Account Balance", "Apply for Atm Card"],
      },

      "Creating an Account": {
        answer: "You can create different types of accounts",
        nextQuestions: ["Current Account", "Savings Account"],
      },
      
      "Current Account": {
        answer:'Visit the bank branch.Provide required identification and address proof.Fill out the account opening form.Deposit initial funds if required.Review and sign necessary documents.Receive your account details.Start using your current account.".',
        nextQuestions: [],
      },
        
      "Savings Account": {
        answer:'Visit the bank branch.Provide required identification and address proof.Fill out the account opening form.Deposit initial funds if required.Review and sign necessary documents.Receive your account details.Start using your savings account.',
        nextQuestions: [],
      },

      

      "Check Account Balance": {
        answer:'They are two options for checking the balance,',
        nextQuestions: ["VIA Autoteller Machine","Using MO626"],
      },

      
      "VIA Autoteller Machine": {
        answer:'To check your account balance, insert your ATM card on the Autoteller machine". Then input your corrent PIN, Choose the Check my balance option and you should be able to see your balance',
        nextQuestions: [],
      },

      "Using MO626": {
        answer:'Type *626# on the phone application in your phone. Enter your PIN, Choose the Account transactions option(1). Lastly select Balance Enquiry to check your current balance.',
        nextQuestions: [],
      },


      "Apply for Atm Card": {
        answer:'Visit the bank branch.Request an ATM card application form.Fill out the form with your information.Provide necessary documents (ID, proof of address, etc.).Submit the application form and documents.Wait for processing.Once approved, collect your ATM card from the bank.".',
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
  