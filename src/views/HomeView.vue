<template>
   <div class="container flex flex-col-reverse md:flex-row items center px-6 mx-auto space-y-0 md:space-y-0">
            <!--Left item-->
            <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left mt-6">
                    Bring everyone together to build better products
                </h1>
                <p class="max-w-sm text-gray-600 md:text-left">
                    Manage makes it simple for software teams to plan
                    day-to-day tasks while keeping the larger team goals
                    in view.
                </p>
                <div class="flex justify-center md:justify-start">
                    <a href="#" class="md:block p-3 px-6 pt-2 text-white bg-medium_light_blue rounded-full 
                    baseline hover:bg-brightRedLight">
                        Get Started
                    </a>
                </div>
            </div>
            <div class="md:w-1/2">
                 <img src="./../assets/img/People in bank interior.jpeg" alt="okay"> 
            </div>
    </div>
    <!--Feature Section-->
    <section>
        <div class="container flex flex-col px-4 mx-auto mt-10 
          space-y-12 md:space-y-0 md:flex-row">
            <div class="flex flex-col space-y-12 md:w-1/2">
                <h2 class="max-w-md text-4xl font-bold text-center
             md:text-left">
                    What's different about National Bank?
                </h2>
                <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    Manage provides all the functionality your team needs,
                    without the complexity. Our Software is tailor-made for modern digital
                    product teams.
                </p>
            </div>
            <div class="flex flex-col space-y-8 md:w-1/2">
                <!--numbered list-->
                <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 
                 md:flex-row">
                    <!--heading-->
                    <div class="rounded-l-full bg-lightblue 
                   md:bg-transparent">
                        <div class="flex items-center space-x-2">
                            <div class="px-4 py-2 text-white rounded-full md:py-1
                     bg-medium_light_blue">
                                01
                            </div>
                            <h3 class="text-base font-bold md:mb-4 md:hidden">
                                Track company-wide progress
                            </h3>
                        </div>
                    </div>

                    <div>
                        <h3 class="hidden mb-4 text-lg font-bold md:block">
                            Track company-wide progress
                        </h3>
                        <p class="text-darkGrayishBlue">
                            See how your day-to-day tasks fit into the wider
                            vision. Go from tracking progress at the milestone level all the way
                            done to the smallest of details. Never lose sight of the
                            bigger picture again.
                        </p>
                    </div>

                </div>
                <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 
                 md:flex-row">
                    <!--heading-->
                    <div class="rounded-l-full bg-lightblue 
                   md:bg-transparent">
                        <div class="flex items-center space-x-2">
                            <div class="px-4 py-2 text-white rounded-full md:py-1
                            bg-medium_light_blue">
                                02
                            </div>
                            <h3 class="text-base font-bold md:mb-4 md:hidden">
                                Advanced built-in reports
                            </h3>
                        </div>
                    </div>

                    <div>
                        <h3 class="hidden mb-4 text-lg font-bold md:block">
                            Advanced built-in reports
                        </h3>
                        <p class="text-darkGrayishBlue">
                            Set internal delivery estimates and track progress toward
                            company goals. Our customisable dashboard helps you build
                            out the reports you need to keep key stakeholders informed.
                        </p>
                    </div>

                </div>
                <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 
                md:flex-row">
                    <!--heading-->
                    <div class="rounded-l-full bg-lightblue 
                   md:bg-transparent">
                        <div class="flex items-center space-x-2">
                            <div class="px-4 py-2 text-white rounded-full md:py-1
                            bg-medium_light_blue">
                                03
                            </div>
                            <h3 class="text-base font-bold md:mb-4 md:hidden">
                                Everything you need in one place
                            </h3>
                        </div>
                    </div>

                    <div>
                        <h3 class="hidden mb-4 text-lg font-bold md:block">
                            Everything you need in one place
                        </h3>
                        <p class="text-darkGrayishBlue">
                            Stop juming from one service to another to
                            communicate, store files, track tasks and share
                            documents. Manage offers an all-in-one team productivity
                            solution.

                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>

  <div class="mt-8">
    <FooterView></FooterView>
  </div>

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
