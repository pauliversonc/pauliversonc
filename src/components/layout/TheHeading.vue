<template >
  <section :class="headingSection" class="mb-[2rem] px-4 xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16 text-gray-900 dark:text-dmWhite  container mx-auto">
    <h3 class="uppercase leading-none font-medium  flex items-center justify-center gap-4 relative"
      :class="headingWrapper"
    >
    <span class="bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-white dark:from-dmGray dark:to-dmBlack
         absolute top-0 text-gray-200 z-[-1] translate-y-[-50%] font-normal inline-block p-1
         text-[2.4rem]
         xxs:text-[3.4rem]
         xs:text-[4.4rem] 
         sm:text-[4.9rem]
         lg:text-[6.1rem] 
         xl:text-[7.5rem]"
         
         :class="spanNumClass"
         >{{ spanNum }}</span>
      <span class=" ">{{ spanLeft }}</span>
      <span class="italic">{{ spanRight }}</span>
    </h3>
  </section>
</template>
<script>
export default {
  name: 'PauliversoncTheHeading',
  props: {
    headingName: {
      type: String,
      required: true,
   
    },
  },
  computed: {
    headingSection() {
      return (this.headingName === 'footer') ? 'mt-[2rem]' : 'mt-[8rem]';
    },
    headingWrapper(){
      if(this.headingName === 'about') return "text-[3.2rem] xxs:text-[4.2rem] xs:text-[5.5rem] sm:text-[7.2rem] md:text-[8.6rem] lg:text-[10.2rem] xl:text-[14.72rem] 2xl:text-[17.6rem]";
      if(this.headingName === 'project') return " text-[2.4rem] xxs:text-[3.1rem] xs:text-[4.1rem] sm:text-[5.3rem] md:text-[6.3rem] lg:text-[8.6rem] xl:text-[10.8rem] 2xl:text-[13rem]"
      if(this.headingName === 'contact') return "text-[2.6rem] xxs:text-[3.3rem] xs:text-[4.3rem] sm:text-[5.6rem] md:text-[6.65rem] lg:text-[9.1rem] xl:text-[11.4rem] 2xl:text-[13.67rem]"
      if(this.headingName === 'footer') return "text-[2.6rem] xxs:text-[3.4rem] xs:text-[4.4rem] sm:text-[5.8rem] md:text-[6.9rem] lg:text-[9.4rem] xl:text-[11.8rem] 2xl:text-[14.15rem]"
      
    },
    spanNumClass(){
      if(this.headingName === 'about') return "left-[3%] xs:left-[3.6%] lg:left-[8%] xl:left-[2%]";
      if(this.headingName === 'project' || this.headingName === 'contact' || this.headingName === 'footer') return "left-0 md:left-[2%]"
    },
    spanNum(){
      if(this.headingName === 'about') return "/02";
      if(this.headingName === 'project') return "/03"
      if(this.headingName === 'contact') return "/04"
      if(this.headingName === 'footer') return "/05"
    },
    spanLeft(){
      if(this.headingName === 'about') return "about"
      if(this.headingName === 'project') return "my"
      if(this.headingName === 'contact') return "contact"
      if(this.headingName === 'footer') return "salamat"
    },
    spanRight(){
      if(this.headingName === 'about' || this.headingName === 'contact') return "me"
      if(this.headingName === 'project') return "projects"
      if(this.headingName === 'footer') return "po"
    },
  },


}
</script>
<style scoped>
  
</style>