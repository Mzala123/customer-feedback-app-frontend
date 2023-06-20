<template>
    <div class="container mx-auto mt-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 px-4">
            <div class="bg-lighest rounded-lg mb-6 shadow-md">
                <p class="items-center text-sm my-4 mx-4 text-gray-600">This graph represents your count of queries which have been responded and those which have not.
                    Responded queries are illustrated with a true value on the x axis and those which are yet to be responded have a false value</p>
                <div id="chart1" class="chart-container">
                <apexchart
                    type="bar"
                    :options="feedbackChartOptions"
                    :series="feedbackSeries"
                ></apexchart>
                </div>
            </div>

            <div class="bg-lighest rounded-lg mb-6 shadow-md">
                <p class="items-center text-sm mx-4 my-4 text-gray-600">This graph illustrates count of all queries which you submitted and the count of queries based on their
                     category type i.e a complaint or a suggestion.</p>
                <div id="chart2" class="chart-container">
                <apexchart
                    type="bar"
                    :options="feedbackTypeChartOptions"
                    :series="feedbackTypeSeries"
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
import { useUserStore } from '../../stores/store';
export default{
    components:{
       apexchart : VueApexCharts
    },
    setup(){

        const feedback_category = ref([])
        const feedbackSeries = ref([])
        const userStore = useUserStore();
        const userId = userStore.getUserId;

        const feedback_type = ref([])
        const feedbackTypeSeries = ref([])

        const count = ref(0)

        const feedbackChartOptions = {
            chart: {
                    type: 'bar',
                    height: 300
                    },
                    title: {
                    text: 'Graphical Analysis of responded and unresponded feedbacks',
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
                    }
         }

         const feedbackTypeChartOptions = {
            chart: {
                    type: 'bar',
                    height: 300
                    },
                    title: {
                    text: 'Graphical Analysis of feedbacks based on category type',
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
                    }
         }

        const counts_my_responded_unresponded_feedbacks = ()=>{
            axios
            .get(`${config.API_URL}/counts_my_responded_unresponded_feedbacks/${userId}`)
            .then((response)=>{
                     if(response.status === 200){
                      feedback_category.value = [...response.data]
                      console.log(feedback_category)
                      let _data = []
                      feedback_category.value.forEach(feedback=>{
                        _data.push({
                            y: feedback.totalFeedbacks,
                            x: feedback._id
                        })
                      })
                      feedbackSeries.value = [
                        {
                            name:'count',
                            data: _data
                        }
                      ]
                     }
                })
        }

        const counts_my_feedbacks_by_type = ()=>{
            axios
              .get(`${config.API_URL}/counts_my_feedbacks_by_type/${userId}`)
              .then((response)=>{
                if(response.status === 200){
                    feedback_type.value = [...response.data]
                      console.log(feedback_type)
                      let _data = []
                      feedback_type.value.forEach(feedback=>{
                        _data.push({
                            y: feedback.totalFeedbacks,
                            x: feedback._id
                        })
                      })
                      feedbackTypeSeries.value = [
                        {
                            name:'count',
                            data: _data
                        }
                      ]
                }
              })
        }

        onMounted(()=>{
            counts_my_responded_unresponded_feedbacks()
            counts_my_feedbacks_by_type()
            console.log("okay id "+userId)
         })

        return{
            feedbackChartOptions,
            feedbackSeries,
            feedback_category,
            counts_my_responded_unresponded_feedbacks,
            counts_my_feedbacks_by_type,
            feedbackTypeChartOptions,
            feedbackTypeSeries
        }
    }
}
</script>