<template>
    <div class="container mx-auto">
        <!--Testimonial-->
        <section id="testimonials flex-grow">
        <!--container to heading and testm blocks-->
        <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
            <!--Heading-->
            <h2 class="text-4xl font-bold text-center">
                Our team | Profile
            </h2>
            <!--Testimonials container-->
            <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
                <!--Testimonial 1-->
                <div class="flex flex-col items-center p-6 space-y-6 rounded-lg
                bg-lighest md:w-1/3">
                    <img src="../assets/img/jcole.jpg" class="w-48 -mt-14 rounded-full h-48 object-cover" alt="">
                    <h5 class="text-lg font-bold">Anisha Li</h5>
                    <p class="text-sm text-darkGrayishBlue">
                        "Manage has superchanged our team's workflow. The ability to
                        maintain visibility on larger milestones at all times keeps
                        everyone motivated".
                    </p>
                </div>

                <!--Testimonial 2-->
                <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg
              bg-lighest md:flex md:w-1/3">
                    <img src="../assets/img/kendal.jpg" class="w-48 -mt-14 rounded-full h-48 object-cover" alt="">
                    <h5 class="text-lg font-bold">Ali Bravo</h5>
                    <p class="text-sm text-darkGrayishBlue">
                        "Manage has superchanged our team's workflow. The ability to
                        maintain visibility on larger milestones at all times keeps
                        everyone motivated".
                    </p>
                </div>

                <!--Testimonial 3-->
                <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg
            bg-lighest md:flex md:w-1/3">
                    <img src="../assets/img/profile.png" class="w-48 -mt-14 rounded-full h-48 object-cover" alt="">
                    <h5 class="text-lg font-bold">Richard Watts</h5>
                    <p class="text-sm text-darkGrayishBlue">
                        "Manage has superchanged our team's workflow. The ability to
                        maintain visibility on larger milestones at all times keeps
                        everyone motivated".
                    </p>
                </div>

            </div>
          
        </div>
    </section>
   
   </div>

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