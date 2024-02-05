<template >
  <footer ref="footerSection" class="px-4 text-center  xs:px-6 md:px-8 lg:px-10 xl:px-12 mt-[8rem]  2xl:px-16 py-8 container mx-auto ">

<!-- logo -->
<a href="#" class="inline-block" >
  <img
    class="h-12 hidden dark:block"
    src="/images/logo/icon-white.png"
    alt="Paul Iverson Cortez - PIC Logo"
  />

  <img
    class="h-12 block dark:hidden"
    src="/images/logo/icon-black.png"
    alt="Paul Iverson Cortez - PIC Logo"
  />
</a>

<div class="text-center font-medium text-gray-900 dark:text-dmWhite">Paul Iverson Cortez | Portfolio</div>

<!-- credits -->
<div class="flex flex-col items-center">
  <span class="font-secondary dark:text-dmGray ">&copy; 2014 &#x2022; Paul Iverson Cortez</span>
  <span class=" text-gray-600 dark:text-dmBlackTint2 text-sm">All RIGHTS RESERVED</span>
</div>

</footer>
</template>
<script>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  name: 'PauliversoncTheFooter',
  mounted() {
    this.animateElement();
  },

  methods: {
    // Animation
    animateElement(){
      gsap.registerPlugin(ScrollTrigger);

      const footerSection = this.$refs.footerSection;
      gsap.from(footerSection, {
        scrollTrigger: {
          trigger: footerSection,
          start: 'top 70%',
        },
        opacity: 0,
        ease: 'power1.inOut',
        duration: 1.2,
      });


    },
  },
  
}
</script>

<style scoped>
  
</style>