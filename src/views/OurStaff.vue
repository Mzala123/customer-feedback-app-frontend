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
                bg-lighest md:w-1/3 mb-12">
                    <img src="../assets/img/shuppie.jpeg" class="w-48 -mt-14 rounded-full h-48 object-cover" alt="">
                    <h5 class="text-lg font-bold">Shuppie Kaoza</h5>
                    <p class="text-sm font-bold"> Systems adminstrator</p>
                    <p class="text-sm text-darkGrayishBlue">
                    "Our Administrator is a key member of our team, responsible for overseeing the smooth operation of our customer support system.
                     With their strong organizational skills and attention to detail, they ensure that customer inquiries are efficiently managed and addressed.
                     They play a vital role in maintaining the integrity and functionality of our feedback software, enabling us to provide timely
                     and effective support to our customers.".
                    </p>
                </div>

                <!--Testimonial 2-->
                <div class="flex flex-col items-center p-6 space-y-6 rounded-lg
                bg-lighest md:w-1/3 mb-12">
                    <img src="../assets/img/hyston.jpeg" class="w-48 -mt-14 rounded-full h-48 object-cover" alt="">
                    <h5 class="text-lg font-bold">Hyston Kayange</h5>
                    <p class="text-sm font-bold">Enquiry Personnel</p>
                    <p class="text-sm text-darkGrayishBlue">
                    "Our Enquiries Personnel are the frontline representatives of our company, 
                    dedicated to assisting you with any questions or concerns you may have.
                    With their extensive knowledge of our products/services and excellent communication skills,
                    they are equipped to provide accurate and comprehensive information to help you make informed decisions.
                    They are committed to resolving your inquiries promptly and ensuring your satisfaction throughout the process.".
                    </p>
                </div>

                <!--Testimonial 3-->
                <div class="flex flex-col items-center p-6 space-y-6 rounded-lg
                bg-lighest md:w-1/3  mb-12 ">
                    <img src="../assets/img/lolly.jpeg" class="w-48 -mt-14 rounded-full h-48 object-cover" alt="">
                    <h5 class="text-lg font-bold"> Lolly Mkandawire</h5>
                    <p class="text-sm font-bold">Enquiry Personnel</p>
                    <p class="text-sm text-darkGrayishBlue">
                     "Our Assistant Enquiry Personnel work closely with our Enquiries Personnel to provide you with exceptional support.
                     They are quick learners, eager to expand their knowledge and contribute to the team's success.
                     With their friendly and approachable demeanor, they create a welcoming environment for customers, making it easier for you to reach out and seek assistance. 
                     Their dedication to delivering high-quality service and their willingness to go the extra mile make them valuable members of our team.".
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