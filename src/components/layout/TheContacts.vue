<template >
  <section class="px-4 xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16 py-8 container mx-auto  flex flex-col lg:grid lg:grid-cols-2  gap-8">
  <!-- MESSAGE WRAPPER -->
  <div class="lg:order-1">

    <!-- ERROR -->
    <!-- <div v-show="errorList.length > 0" class="text-red-600 dark:text-dmRed2 flex gap-4 border-2  border-red-600 dark:border-dmRed2 bg-lmRed dark:bg-dmBlackTint1">
      <div class="flex items-center justify-center  border-r-2 border-red-600 dark:border-dmRed2 p-2">
        <svg  class="fill-red-600 h-9 w-9 dark:fill-dmRed2">
          <use xlink:href="/icons/sprite.svg#icon-x-square"></use>
        </svg>
      </div>

      <ul class="list-disc py-2 pl-4 pr-2 flex flex-col justify-center">
        <li v-for="(error, index) in errorList" :key="index">{{ error }}</li>
      </ul>
    </div> -->



    <!-- SUCCESS -->
    <div v-show="errorList.length > 0" class="py-2 text-green-900 dark:text-lmGreen flex items-center justify-between border-2  border-green-900 dark:border-lmGreen bg-green-50 dark:bg-dmBlackTint1">

      <div class="flex gap-4">
       <div class="flex items-center justify-center  border-r-2 border-green-900 dark:border-lmGreen p-2">
         <svg  class="fill-green-900 h-9 w-9 dark:fill-lmGreen">
           <use xlink:href="/icons/sprite.svg#icon-check-square"></use>
         </svg>
       </div>

       <span>Your email has been sent successfully. <br> Thank you for reaching out!</span>
    </div>

      <div class="flex items-center justify-center p-2 cursor-pointer">
        <svg  class="fill-green-900 h-8 w-8 dark:fill-lmGreen">
          <use xlink:href="/icons/sprite.svg#icon-x"></use>
        </svg>
      </div>


    </div>


  </div>

  <!-- FORM INPUT (LEFT)-->
  <form :class="{'lg:mt-[-2rem]': errorList.length === 0 }" action="#" @submit.prevent="submitForm" class="lg:order-3 container grid gap-6 lg:grid-cols-2  lg:self-start" ref="form">

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
      <input :disabled="isLoading" :class="{'cursor-not-allowed': isLoading},isFormErrorInput('firstname')" @input="filterInput('firstname')" @focus="resetInput('firstname')" @blur="validateInput('firstname')" class="placeholder:opacity-60 py-1 w-full focus:outline-none border-b-2 border-gray-200 dark:border-dmBlackTint2 bg-white dark:bg-dmBlack " type="text" placeholder="E.g. Paul Iverson" v-model.trim="form.firstname" name="firstname" id="firstname" autocomplete="on">
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
      <input :disabled="isLoading" :class="{'cursor-not-allowed': isLoading},isFormErrorInput('lastname')" @input="filterInput('lastname')" @focus="resetInput('lastname')" @blur="validateInput('lastname')" class="placeholder:opacity-60 py-1 w-full focus:outline-none border-b-2 border-gray-200 dark:border-dmBlackTint2 bg-white dark:bg-dmBlack " type="text" placeholder="E.g. Cortez" v-model.trim="form.lastname" name="lastname" id="lastname" autocomplete="on">
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
      <label :class="isFormErrorLabel('email')" class="pb-6 font-medium" for="email">Email Address</label>
      <input :disabled="isLoading" :class="{'cursor-not-allowed': isLoading},isFormErrorInput('email')" @input="filterInput('email')" @focus="resetInput('email')" @blur="validateInput('email')" class="placeholder:opacity-60 py-1 w-full focus:outline-none border-b-2 border-gray-200 dark:border-dmBlackTint2 bg-white dark:bg-dmBlack " type="text" placeholder="E.g. paul.gc@gmail.com" v-model.trim="form.email" name="email" id="email" autocomplete="on">
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
      <label :class="isFormErrorLabel('contact')" class="pb-6 font-medium" for="contact">Contact Number</label>
      <input :disabled="isLoading" :class="{'cursor-not-allowed': isLoading},isFormErrorInput('contact')" @input="filterInput('contact')" @focus="resetInput('contact')" @blur="validateInput('contact')" class="placeholder:opacity-60 py-1 w-full focus:outline-none border-b-2 border-gray-200 dark:border-dmBlackTint2 bg-white dark:bg-dmBlack " type="text" placeholder="E.g. 09198765432" v-model.trim="form.contact" name="contact" id="contact" autocomplete="on">
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
      <textarea :disabled="isLoading" :class="{'cursor-not-allowed': isLoading},isFormErrorInput('purpose')" @input="filterInput('purpose')" @focus="resetInput('purpose')" @blur="validateInput('purpose')" placeholder="Your inquiry here..." class="placeholder:opacity-60 w-full focus:outline-none py-1 dark:bg-dmBlack bg-white dark:placeholder-dmBlackTint2" name="purpose" id="purpose" rows="2" v-model="form.purpose" ></textarea>
    </div>



    <button 
    class="py-1 h-10 font-semibold col-span-full
    bg-gray-100 dark:bg-dmBlackTint2 
    hover:bg-gray-900 dark:hover:bg-dmWhite
    text-gray-600 dark:text-dmWhite 
    hover:text-gray-100 dark:hover:text-dmBlackTint1 
    ease-out duration-300
    group
    flex
    gap-2
    items-center
    justify-center
    ">
    <span>Send</span>
  
    <svg v-show="isLoading" class="animate-spin h-4 w-4 fill-gray-600 dark:fill-dmWhite group-hover:fill-gray-100 dark:group-hover:fill-dmBlackTint1 ease-out duration-300">
      <use xlink:href="/icons/sprite.svg#icon-refresh-cw"></use>
    </svg>
    </button>



  </form>

  <!-- CONTACT DETAILS (RIGHT)-->
  <div class="flex flex-col gap-8 order-2 lg:row-span-3">

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
      return Object.values(this.errors).filter(value => value.length > 0);
    },

    allFieldsFilled(){
      return Object.values(this.form).every(value => value !== '');
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
        firstname: '',
        lastname: '',
        email: '',
        contact: '',
        purpose: '',
      },

      isLoading: false,

    };
  },
  methods: {
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    clearForms() {
      this.form.firstname = this.form.lastname = this.form.email = this.form.contact = this.form.purpose = '';
    },

    clearErrors(){
      this.errors.firstname = this.errors.lastname = this.errors.email = this.errors.contact = this.errors.purpose = '';
    },

    // SORT OF COMPUTED
    // before: Fullwidth when firstname have value or firstname have error
    isForm(formName){
      return this.form[formName]?.length > 0 || this.errors[formName]?.length > 0;
    },

    // before: change to red if error else change to black
    isFormInvalid(formName) {
      return (this.errors[formName]?.length > 0) ? 'before:bg-red-600 dark:before:bg-dmRed2' : 'before:bg-gray-900 dark:before:bg-dmWhite';
    },

    // text-color change to red if invalid else default
    isFormErrorLabel(formName) {
      return (this.errors[formName]?.length > 0) ? 'text-red-600 dark:text-dmRed2' : '';
    },

    // text-color and placeholder-color change to red if invalid else default
    isFormErrorInput(formName) {
      return (this.errors[formName]?.length > 0) ? 'text-red-600 dark:text-dmRed2 placeholder:text-red-700 dark:placeholder:text-dmRed2':'placeholder:text-gray-400 dark:placeholder-dmBlackTint2'
    },



    // EVENTS
    resetInput(formName){
      this.errors[formName] = '';
    },


    validateInput(formName) {
      const mutatedFormName = this.capitalizeFirstLetter(formName);

      // validate if formname has a value
      if(this.form[formName]?.length > 0) {

        // proceed to validation if form length is lessthan 32

          if(formName === 'firstname' || formName === 'lastname') {

            if(this.form[formName]?.length <= 120){
              // firstname and lastname regex pattern
              const pattern = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
              console.log(pattern.test(this.form[formName]));

              if (pattern.test(this.form[formName])) {
                // clear error
                this.errors[formName] = '';
              } else {
                this.errors[formName] = `${mutatedFormName}: Please use only one space between names.`;
              }

            } else {
              this.errors[formName] = `${mutatedFormName}: Should not exceed 120 characters.`;
            }

          }

          
          if(formName === 'email') {
            if(this.form[formName]?.length <= 320){
              // regex for email
              const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              console.log(pattern.test(this.form[formName]));

              if (pattern.test(this.form[formName])) {
                // clear error
                this.errors[formName] = '';
              } else {
                this.errors[formName] = `Enter a valid email address.`;
              }
            } else {
              this.errors[formName] = `${mutatedFormName} should not exceed 320 characters.`;
            }
          }

          if(formName === 'contact') {
            if(this.form[formName]?.length <= 13){
              // clear error
              this.errors[formName] = '';
            } else {
              this.errors[formName] = `${mutatedFormName} number should not exceed 13 characters.`;
            }
          }

          if(formName === 'purpose') {
            if(this.form[formName]?.length <= 520){
              // clear error
              this.errors[formName] = '';
            } else {
              this.errors[formName] = `${mutatedFormName} should not exceed 520 characters.`;
            }
          }
      }
      
      else {
        this.errors[formName] = `${mutatedFormName} is required.`;
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
      // guard block
      if(this.errorList.length === 0 && this.allFieldsFilled) {
      
      this.isLoading = true;
      const form = this.$refs.form;
        emailjs.sendForm('service_laz5zne', 'template_kwlkq3b', form, '0Wfiv9HDUBHIc-2NH')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.clearForms();
            this.isLoading = false;
          }, (error) => {
            // Hide loading state
            console.error(error)
        });
      }

      else {

        this.validateInput('firstname');
        this.validateInput('lastname');
        this.validateInput('email');
        this.validateInput('contact');
        this.validateInput('purpose');
      }
    },
  },
}
</script>
<style scoped>
  
</style>