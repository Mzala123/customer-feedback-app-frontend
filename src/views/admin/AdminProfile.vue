<template>
    <div class="container mx-auto m-5">
       <div class="flex flex-wrap mx-4">
        <div class="w-full lg:w-3/12 xl:w-3/12 px-4 h-96">
                     
                <div class="flex flex-col items-center p-4 bg-lighest rounded-md border-t-4 border-medium_light_blue shadow">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="../../assets/img/profile.png" alt="Bonnie image"/>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-gray-800">Bonnie Green</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-600">Visual Designer</span>
                    <button class="flex px-3 py-2 mt-4 text-sm bg-light_sky_blue hover:shadow-lg rounded-full">
                        Edit Password <PencilIcon class="ml-3 h-5 w-5"></PencilIcon>
                    </button>
                    <p class="text-center text-sm text-gray-600 hover:text-gray-600 leading-6 mt-4">
                        To change your current password,
                        click on the edit profile button!
                        </p>
                    
                </div>
        </div>

        <div class="w-full lg:w-9/12 xl:w-9/12 px-4">
                     
                     <!-- <div class="flex flex-col items-center p-4 bg-white border-t-4 border-blue rounded-lg shadow">
                        
                     </div> -->

                    <div class="bg-lighest p-3 border-t-4 border-medium_light_blue rounded-md shadow">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span clas="text-green-500">
                           <UserIcon class="h-6 w-6"></UserIcon>
                        </span>
                        <span class="tracking-wide">Employee Information</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">First Name</div>
                                <div class="px-4 py-2">Jane</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Last Name</div>
                                <div class="px-4 py-2">Doe</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Gender</div>
                                <div class="px-4 py-2">Female</div>
                            </div>

                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email.</div>
                                <div class="px-4 py-2">
                                    <a class="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                                </div>
                            </div>

                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Contact No.</div>
                                <div class="px-4 py-2">+11 998001001</div>
                            </div>

                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Current Address</div>
                                <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                            </div>

                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Place of residence</div>
                                <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Current city</div>
                                <div class="px-4 py-2">
                                   Lilongwe
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Birthday</div>
                                <div class="px-4 py-2">Feb 06, 1998</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Age</div>
                                <div class="px-4 py-2">25</div>
                            </div>
                        </div>
                    </div>
                  
                </div>

        </div>
       </div>
    </div>
</template>


<script>
import { PencilIcon, UserIcon } from '@heroicons/vue/24/outline';
export default{
    components:{
      PencilIcon, UserIcon
    },
    setup(){
        return{

        }
    }
}
</script>