<template>
    <div class="container mx-auto">
          <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-sm rounded-xl bg-lighest">
                   <div class="rounded-t bg-lighter mb-0 px-6 py-6">
                        <div class="flex justify-center text-center">
                            <h4 class="text-gray-700 text-xl font-semibold items-center">
                              CREATE EMPLOYEE RECORD
                            </h4>
                        </div>
                  </div>
                
                    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form action="">
                            <h5 class="text-gray-600 text-sm mt-3 mb-6 font-semibold uppercase">
                                User Information
                            </h5>
                            <div class="flex flex-wrap">

                                <div class="w-full lg:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        Employee Id</label>
                                        <input type="text" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                    </div>
                                </div>

                                <div class="w-full lg:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        National Id</label>
                                        <input type="text" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                    </div>
                                </div>

                                <div class="w-full lg:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        Firstname</label>
                                        <input type="text" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                    </div>
                                </div>

                                <div class="w-full lg:w-6/12 px-4">
                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        Lastname</label>
                                        <input type="text" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                    </div>
                                </div>

                                <div class="w-full lg:w-12/12 px-4">
                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        dummy Date of birth</label>
                                        <input type="text" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                    </div>
                                </div>
                            </div>
                            <hr class="mt-6 border-b-1 border-gray-600">

                            <h5 class="text-gray-600 text-sm mt-3 mb-6 font-semibold uppercase">
                                Contact Information
                            </h5>
                            <div class="flex flex-wrap">

                                <div class="w-full lg:w-12/12 px-4">
                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        Email</label>
                                        <input type="email" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                    </div>

                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        Phonenumber</label>
                                        <input type="number" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150">
                                    </div>

                                    <div class="relative w-full mb-3">
                                       <label class="block text-gray-600 text-sm font-semibold mb-2">
                                        Physical Address</label>
                                        <textarea type="text" class="px-3 py-3 placeholder-black text-gray-700
                                        bg-white rounded text-sm  shadow-sm focus:outline-none w-full ease-linear transition-all duration-150"> </textarea>
                                    </div>

                                    <div class="relative w-full mb-3 mt-6">
                                       <button class="flex justify-center items-center rounded-lg bg-medium_light_blue px-3 py-3 text-white w-full hover:bg-dark_blue">
                                            <PlusCircleIcon class="h-6 w-6 mr-3"/>
                                            <p> Save </p>
                                       </button>
                                    </div>

                                </div>

                            </div>

                        </form>
                    </div>
              </div>
          </div>
    </div>
</template>

<script>
import {HomeIcon, UserPlusIcon, UserGroupIcon, UserIcon,PlusCircleIcon,
     Bars3CenterLeftIcon, Bars3Icon, PlusIcon, BellIcon} from '@heroicons/vue/24/outline'

export default{
    components:{
        UserPlusIcon, PlusCircleIcon
    },
    setup(){
        return{

        }
    }
}
</script>