<template>
    <div class="container mx-auto mt-8">
        <p class="mx-4 text-gray-600 underline text-lg uppercase">
            Customer Category According to gender
        </p>
            <p class="text-sm mx-4 mb-6 text-gray-500">
              Below is a list our customers categorised according to their gender
            </p>
     
      <div class="flex flex-wrap mt-4">
        
        <div v-for="gender_count in customer_gender" :key="gender_count._id" class="w-full lg:w-4/12 xl:w-4/12 px-4">
                      <div class="relative flex flex-col min-w-0 break-words border-t-4 border-medium_light_blue bg-lighest rounded-lg mb-6 xl:mb-0 shadow-md">
                         <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                               <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                  <h5 class="text-gray-600 uppercase font-bold text-sm">{{ gender_count._id }}</h5>
                                  <span class="text-2xl">{{ gender_count.totalCustomers }}</span>
                               </div>
                               <div class="relative w-auto pl-4 flex-initial">
                                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-medium_light_blue">
                                    
                                    <!-- <UserIcon v-if="gender_count._id === 'Admin'" class="h-12 w-12"></UserIcon> 
                                    <UserCircleIcon v-if="gender_count._id === 'Enquiry Personnel'" class="h-12 w-12"></UserCircleIcon> 
                                    <UsersIcon v-if="gender_count._id === 'Customer'" class="h-12 w-12"></UsersIcon>  -->

                                  </div>
                               </div>
                            </div>
                            <!-- <p class="text-sm text-blueGray-500 mt-4"><span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 3.48%</span><span class="whitespace-nowrap">Since last month</span></p> -->
                         </div>
                      </div>
            </div>
      </div>
      <div class="flex flex-wrap mt-8">
        <div class="w-full lg:w-6/12 xl:w-5/12 bg-lighest rounded-lg mb-6 shadow-md mx-4">
                <p class="items-center uppercase my-4 text-gray-600">Graphical analysis of feedbacks based on category</p>
                <div id="chart2" class="chart-container">
                    <apexchart
                    type="line"
                    :options="feedbackChartOptions"
                    :series="feedbackSeries"
                    ></apexchart>
                </div>
        </div>

        <div class="w-full lg:w-6/12 xl:w-5/12 bg-lighest mx-4 rounded-lg mb-6 shadow-md">
                <p class="items-center uppercase my-4 text-gray-600">Graphical analysis of feedbacks based on customer gender</p>
                <div id="chart2" class="chart-container">
                    <apexchart
                    type="bar"
                    :options="genderFeedbackChartOptions"
                    :series="genderFeedbackSeries"
                    ></apexchart>
                </div>
        </div>

      </div>
    </div>
    </template>
    
    <script>
import {HomeIcon, UserGroupIcon, UserIcon, UserCircleIcon, UsersIcon} from '@heroicons/vue/24/outline'
import {onMounted, ref} from 'vue'
import config  from '../../../config'
import axios from 'axios';
import VueApexCharts from 'vue3-apexcharts'
    export default{

    components:{
       HomeIcon,
       UserGroupIcon,
       UserIcon,
       UserCircleIcon,
       UsersIcon,
       apexchart : VueApexCharts
    },
        setup(){

            const customer_gender = ref([]); 
            const feedback_category = ref([])
            const gender_feedback_category = ref([])
            const count = ref(0)

            const feedbackSeries = ref([])
            const genderFeedbackSeries = ref([])
            const feedbackChartOptions = {
                chart: {
                    // height: 300,
                    // width: 300,
                    type: 'line',
                    zoom: {
                        enabled: false,
                    },
                    },
                    dataLabels: {
                    enabled: true,
                    },
                    stroke: {
                    curve: 'smooth',
                    },
                    title: {
                    text: 'Feedbacks by Category',
                    align: 'left',
                    },
                    grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'],
                        opacity: 0.5,
                    },
                    },
              }

            const genderFeedbackChartOptions = {
                chart: {
                    type: 'bar',
                    height: 300
                    },
                    title: {
                    text: 'Feedbacks received based on customer gender',
                    align: 'left',
                    },
                    dataLabels: {
                    enabled: true
                    },
                    grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'],
                        opacity: 0.5,
                    },
                    },plotOptions: {
                    bar: {
                    colors: {
                        ranges: [
                        {
                            from: 0,
                            to: 1,
                            color: '#FF0000', // Change the color of bars here
                        },
                        {
                            from: 1,
                            to: 2,
                            color: '#00FF00', // Change the color of bars here
                        },
                        // Add more color ranges as needed
                        ],
                    },
                    },
                },
                            }


            const total_customers_by_gender = ()=>{
                axios
                 .get(`${config.API_URL}/total_count_customer_by_gender`)
                 .then((response)=>{
                    if(response.status === 200){
                           customer_gender.value = response.data
                           console.log(customer_gender)
                    }
                 })
            }

            const count_feedbacks_by_type = ()=>{
               axios
                 .get(`${config.API_URL}/count_feedbacks_by_type`)
                 .then((response)=>{
                    if(response.status === 200){
                       feedback_category.value = [...response.data]
                       let _data = []
                       feedback_category.value.forEach(feedback =>{
                        _data.push({
                            y: feedback.totalFeedbacks,
                            x: feedback._id
                        })
                       })
                       feedbackSeries.value = [
                        {
                            name: 'count',
                            data: _data
                        }
                       ]
                    }
                 })
            }


            const count_feedbacks_by_customer_gender = ()=>{
                axios
                .get(`${config.API_URL}/count_feedbacks_by_customer_gender`)
                .then((response)=>{
                      gender_feedback_category.value = [...response.data]
                      let _data = []
                      gender_feedback_category.value.forEach(gender_feedback=>{
                        _data.push({
                            y: gender_feedback.totalFeedbacks,
                            x: gender_feedback._id
                        })
                      })
                      genderFeedbackSeries.value = [
                        {
                            name:'count',
                            data:_data
                        }
                      ]
                })
            }

            onMounted(()=>{
                total_customers_by_gender(),
                count_feedbacks_by_type(),
                count_feedbacks_by_customer_gender()
            })
            return{
                customer_gender,
                total_customers_by_gender,
                count_feedbacks_by_type,
                feedback_category,
                feedbackChartOptions,
                feedbackSeries,
                genderFeedbackChartOptions,
                gender_feedback_category,
                genderFeedbackSeries,
                count_feedbacks_by_customer_gender
            }
        }
    }
    </script>

<style>

.chart-container {
  flex-basis: 50%; /* Each chart container takes 50% of the available width */
  padding: 1rem; /* Adjust the padding as desired */
}
</style>