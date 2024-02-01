<template >
  <section class="px-4 xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16 py-8 container mx-auto  flex flex-col lg:grid lg:grid-cols-2  gap-8">


<!-- FORM INPUT (LEFT)-->
<form action="#" @submit.prevent="submitForm" class="container grid gap-6 lg:grid-cols-2  lg:self-start" ref="form">

  <div class="relative 
  before:ease-out 
  before:duration-300
  before:content-['']
  before:absolute
  before:h-0.5
  before:w-0
  before:bg-gray-900
  dark:before:bg-dmWhite
  before:bottom-0
  before:left-0
  before:hover:w-full
  ">
    <label class="pb-6 font-medium"  for="firstname">Firstname</label>
    <input class="py-1 w-full focus:outline-none border-b-2 border-gray-200 dark:border-dmBlackTint2 dark:bg-dmBlack dark:placeholder-dmBlackTint2" type="text" placeholder="E.g. Paul Iverson" v-model="form.firstname" name="firstname" id="firstname"   autocomplete="on">
  </div>

  <div class="relative 
  before:ease-out 
  before:duration-300
  before:content-['']
  before:absolute
  before:h-0.5
  before:w-0
  before:bg-gray-900
  dark:before:bg-dmWhite
  before:bottom-0
  before:left-0
  before:hover:w-full
  ">
    <label class="pb-6 font-medium"  for="lastname">Lastname</label>
    <input class="py-1 w-full focus:outline-none border-b-2 border-gray-200 dark:border-dmBlackTint2 dark:bg-dmBlack dark:placeholder-dmBlackTint2" type="text" placeholder="E.g. Cortez" v-model="form.lastname" name="lastname" id="lastname"   autocomplete="on">
  </div>

  <div class="relative 
  before:ease-out 
  before:duration-300
  before:content-['']
  before:absolute
  before:h-0.5
  before:w-0
  before:bg-gray-900
  dark:before:bg-dmWhite
  before:bottom-0
  before:left-0
  before:hover:w-full
  ">
    <label class="pb-6 font-medium" for="email">Email Address</label>
    <input class="py-1 w-full focus:outline-none border-b-2 border-gray-200 dark:border-dmBlackTint2 dark:bg-dmBlack dark:placeholder-dmBlackTint2" type="text" placeholder="E.g. paul@gmail.com" v-model="form.email" name="email" id="email"  autocomplete="on">
  </div>

  <div class="relative 
  before:ease-out 
  before:duration-300
  before:content-['']
  before:absolute
  before:h-0.5
  before:w-0
  before:bg-gray-900
  dark:before:bg-dmWhite
  before:bottom-0
  before:left-0
  before:hover:w-full
  ">
    <label class="pb-6 font-medium" for="contact">Contact Number</label>
    <input class="py-1 w-full focus:outline-none border-b-2 border-gray-200 dark:border-dmBlackTint2 dark:bg-dmBlack dark:placeholder-dmBlackTint2" type="text" placeholder="E.g. 09198765432" v-model="form.contact" name="contact" id="contact">
  </div>

  <div class="col-span-full relative
  after:
  after:content-['']
  after:absolute
  after:bottom-0
  after:left-0
  after:h-0.5
  after:w-full
  after:bg-gray-200
  dark:after:bg-dmBlackTint2
  
  

  before:ease-out 
  before:duration-300
  before:content-['']
  before:absolute
  before:h-0.5
  before:w-0
  before:bg-gray-900
  dark:before:bg-dmWhite
  before:bottom-0
  before:left-0
  before:hover:w-full
  before:z-40
  ">
    <label class="pb-6 font-medium"  for="purpose">Purpose</label>
    <textarea placeholder="Your inquiry here..." class="w-full focus:outline-none py-1 dark:bg-dmBlack dark:placeholder-dmBlackTint2" name="purpose" id="purpose" rows="2" v-model="form.purpose" ></textarea>
  </div>



  <button class="py-1 h-10 font-semibold col-span-full
  bg-gray-100 dark:bg-dmBlackTint2 
  hover:bg-gray-900 dark:hover:bg-dmWhite
  text-gray-600 dark:text-dmWhite 
  hover:text-gray-100 dark:hover:text-dmBlackTint1 
   ease-out duration-300
  ">Send</button>



</form>

<!-- CONTACT DETAILS (RIGHT)-->
<div class="flex flex-col gap-8">

  <!-- PARAGRAPH CONTAINER -->
  <div>
    <p class="mb-4">I actively seek opportunities for personal and professional growth. Embracing new opportunities excites me, as they contribute to my continuous improvement and the formation of meaningful relationships.</p>
    <p class="">Let's connect! Whether you're seeking guidance, offering insights, or just saying hello, I'd love to hear from you.</p>
  </div>
  
  <!-- CONTACTS -->
  <div class="flex flex-col items-start gap-2">
    <BaseHeadingFive title="contacts" />
    <BaseLink text="09155436882" icon="phone" />
    <BaseLink text="pauliversonc@gmail.com" icon="mail" />

  </div>

  <!-- SOCIALS -->
  <div class="flex flex-col gap-2">

    <BaseHeadingFive title="socials" />
    <div class="flex items-center gap-4">
      <BaseIconLink icon="facebook" />
      <BaseIconLink icon="instagram" />
      <BaseIconLink icon="linkedin" />
      <BaseIconLink icon="github" />
    </div>


  </div>
  
</div>


</section>
</template>
<script>
import emailjs from 'emailjs-com';
export default {
  name: 'PauliversoncTheContacts',
  data(){
    return {
      form: {
        firstname:'Jade',
        lastname:'Alinab',
        email:'jadealinab@gmail.com',
        contact:'123456789',
        purpose:'purpose ko talaga sa buhay ito',

      }
    };
  },
  methods: {
    submitForm(){
      const form = this.$refs.form;
        emailjs.sendForm('service_laz5zne', 'template_kwlkq3b', form, '0Wfiv9HDUBHIc-2NH')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            

  
            
       

          }, (error) => {
            // Hide loading state
        

            console.error(error)
         
        });
    },
  },
}
</script>
<style scoped>
  
</style>