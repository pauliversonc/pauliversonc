<template >
  <section class="px-4 xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16 py-8 container mx-auto  flex flex-col lg:grid lg:grid-cols-2  gap-8">
  <!-- ERROR LIST -->
  <div class="order-1">
    <div v-show="errorList.length > 0" class="text-red-600 dark:text-red-700 flex gap-4 border border-red-600 dark:border-red-700 bg-lmRed dark:bg-dmRed">
      <div class="flex items-center justify-center border-r border-red-600 dark:border-red-700 p-2">
        <svg  class="fill-red-600 h-9 w-9 dark:fill-red-700">
          <use xlink:href="/icons/sprite.svg#icon-x-circle"></use>
        </svg>
      </div>

      <ul class="list-disc py-2 pl-4 pr-2 flex flex-col justify-center">
        <li v-for="(error, index) in errorList" :key="index">{{ error }}</li>
      </ul>
    </div>
  </div>

  <!-- FORM INPUT (LEFT)-->
  <form :class="{'mt-[-2rem]': errorList.length === 0 }" action="#" @submit.prevent="submitForm" class="order-3 container grid gap-6 lg:grid-cols-2  lg:self-start" ref="form">

    <!-- firstname -->
    <div
    :class="{'before:w-full': isForm('firstname')}, isFormInvalid('firstname')"
    
    class="relative 
    before:ease-out 
    before:duration-300
    before:content-['']
    before:absolute
    before:h-0.5
    before:w-0
    before:bottom-0
    before:left-0
    before:hover:w-full
    ">
      <label :class="isFormErrorLabel('firstname')" class="pb-6 font-medium" for="firstname">Firstname</label>
      <input :class="isFormErrorInput('firstname')" @input="filterInput('firstname')" @focus="resetInput('firstname')" @blur="validateInput('firstname')" class="placeholder:opacity-60 py-1 w-full focus:outline-none border-b-2 border-gray-200 dark:border-dmBlackTint2 dark:bg-dmBlack " type="text" placeholder="E.g. Paul Iverson" v-model.trim="form.firstname" name="firstname" id="firstname" autocomplete="on">
    </div>
    <!-- lastname -->
    <div
    :class="{'before:w-full': isForm('lastname')}, isFormInvalid('lastname')"
    
    class="relative 
    before:ease-out 
    before:duration-300
    before:content-['']
    before:absolute
    before:h-0.5
    before:w-0
    before:bottom-0
    before:left-0
    before:hover:w-full
    ">
      <label :class="isFormErrorLabel('lastname')" class="pb-6 font-medium" for="lastname">Lastname</label>
      <input :class="isFormErrorInput('lastname')" @input="filterInput('lastname')" @focus="resetInput('lastname')" @blur="validateInput('lastname')" class="placeholder:opacity-60 py-1 w-full focus:outline-none border-b-2 border-gray-200 dark:border-dmBlackTint2 dark:bg-dmBlack " type="text" placeholder="E.g. Cortez" v-model.trim="form.lastname" name="lastname" id="lastname" autocomplete="on">
    </div>
    <!-- email -->
    <div
    :class="{'before:w-full': isForm('email')}, isFormInvalid('email')"
    
    class="relative 
    before:ease-out 
    before:duration-300
    before:content-['']
    before:absolute
    before:h-0.5
    before:w-0
    before:bottom-0
    before:left-0
    before:hover:w-full
    ">
      <label :class="isFormErrorLabel('email')" class="pb-6 font-medium" for="email">Email</label>
      <input :class="isFormErrorInput('email')" @input="filterInput('email')" @focus="resetInput('email')" @blur="validateInput('email')" class="placeholder:opacity-60 py-1 w-full focus:outline-none border-b-2 border-gray-200 dark:border-dmBlackTint2 dark:bg-dmBlack " type="text" placeholder="E.g. pauliversonc@gmail.com" v-model.trim="form.email" name="email" id="email" autocomplete="on">
    </div>

    <!-- contact -->
    <div
    :class="{'before:w-full': isForm('contact')}, isFormInvalid('contact')"
    
    class="relative 
    before:ease-out 
    before:duration-300
    before:content-['']
    before:absolute
    before:h-0.5
    before:w-0
    before:bottom-0
    before:left-0
    before:hover:w-full
    ">
      <label :class="isFormErrorLabel('contact')" class="pb-6 font-medium" for="contact">Contact</label>
      <input :class="isFormErrorInput('contact')" @input="filterInput('contact')" @focus="resetInput('contact')" @blur="validateInput('contact')" class="placeholder:opacity-60 py-1 w-full focus:outline-none border-b-2 border-gray-200 dark:border-dmBlackTint2 dark:bg-dmBlack " type="text" placeholder="E.g. 09198765432" v-model.trim="form.contact" name="contact" id="contact" autocomplete="on">
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
    "
    
    :class="{'before:w-full': isForm('purpose')}, isFormInvalid('purpose')"
    >
      <label :class="isFormErrorLabel('purpose')" class="pb-6 font-medium"  for="purpose">Purpose</label>
      <textarea :class="isFormErrorInput('purpose')" @input="filterInput('purpose')" @focus="resetInput('purpose')" @blur="validateInput('purpose')" placeholder="Your inquiry here..." class="placeholder:opacity-60 w-full focus:outline-none py-1 dark:bg-dmBlack dark:placeholder-dmBlackTint2" name="purpose" id="purpose" rows="2" v-model="form.purpose" ></textarea>
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
  <div class="flex flex-col gap-8 order-2 row-span-3">

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
 
  computed: {
    errorList(){
      return Object.values(this.errors).flat();
    },
  },
  data(){
    return {
      form: {
        firstname:'',
        lastname:'',
        email:'',
        contact:'',
        purpose:'',
      },

      errors: {
        firstname: [],
        lastname: [],
        email: [],
        contact: [],
        purpose: [],
      },





    };
  },
  methods: {
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    // SORT OF COMPUTED
    // before: Fullwidth when firstname have value or firstname have error
    isForm(formName){
      return this.form[formName]?.length > 0 || this.errors[formName]?.length > 0;
    },

    // before: change to red if error else change to black
    isFormInvalid(formName) {
      return (this.errors[formName]?.length > 0) ? 'before:bg-red-600 dark:before:bg-red-500' : 'before:bg-gray-900 dark:before:bg-dmWhite';
    },

    // text-color change to red if invalid else default
    isFormErrorLabel(formName) {
      return (this.errors[formName]?.length > 0) ? 'text-red-600 dark:text-red-500' : '';
    },
    // text-color and placeholder-color change to red if invalid else default
    isFormErrorInput(formName) {
      return (this.errors[formName]?.length > 0) ? 'text-red-600 dark:text-red-500 placeholder:text-red-700 dark:placeholder:text-red-600':'placeholder:text-gray-400 dark:placeholder-dmBlackTint2'
    },



    // EVENTS
    resetInput(formName){
      this.errors[formName] = [];
    },

    validateInput(formName) {
      // firstname
      console.log(formName)

      const mutatedFormName = this.capitalizeFirstLetter(formName)

      // validate if formname has a value
      if(this.form[formName]?.length > 0) {

        // proceed to validation if form length is lessthan 32

          if(formName === 'firstname' || formName === 'lastname') {

            if(this.form[formName]?.length <= 120){
              // firstname and lastname regex pattern
              const pattern = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
              console.log(pattern.test(this.form[formName]));

              if (pattern.test(this.form[formName])) {
                console.log('pasok');
              } else {
                this.errors[formName].push(`${mutatedFormName}: Please use only one space between names.`)
              }

            } else {
              this.errors[formName].push(`${mutatedFormName}: Should not exceed 120 characters.`)
            }

          }

          
          if(formName === 'email') {
            if(this.form[formName]?.length <= 320){
              // regex for email
              const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              console.log(pattern.test(this.form[formName]));

              if (pattern.test(this.form[formName])) {
                console.log('pasok');
              } else {
                this.errors[formName].push(`Enter a valid email address.`)
              }
            } else {
              this.errors[formName].push(`${mutatedFormName} should not exceed 320 characters.`)
            }
          }

          if(formName === 'contact') {
            if(this.form[formName]?.length <= 13){
              console.log('pasok');
            } else {
              this.errors[formName].push(`${mutatedFormName} number should not exceed 13 characters.`)
            }
          }

          if(formName === 'purpose') {
            if(this.form[formName]?.length <= 520){
              console.log('pasok');
            } else {
              this.errors[formName].push(`${mutatedFormName} should not exceed 520 characters.`)
            }
          }
      }
      
      else {
        this.errors[formName].push(`${mutatedFormName} is required.`)
      }

    },

    filterInput(formName) {
      if(formName === 'firstname' || formName === 'lastname') {
        this.form[formName] = this.form[formName].replace(/[^a-zA-Z ]+/g, '');
      }

      if(formName === 'contact') {
        this.form[formName] = this.form[formName].replace(/\D/g, '');
      }
    },

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