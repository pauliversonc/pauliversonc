<template >
  <section ref="introSection" class="px-4 xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16 py-8 container mx-auto sm:grid sm:grid-cols-2 sm:gap-4 sm:items-center">
    <h2 ref="introText" class=" tracking-tighter text-gray-400 dark:text-dmGray container mx-auto
    text-4xl
    xs:text-[2.6rem]
    
    ">
      I create <span ref="highlight1" class="ease-out duration-300">innovative solutions</span> for the evolving <span ref="highlight2" class="ease-out duration-300">digital landscape</span>
    </h2>
    <div ref="introImg" class=" hidden sm:block">
      <img class="block dark:hidden" src="/svg/undraw_progressive_app_m-9-ms-dark.svg" alt="filler undraw" >
      <img class="hidden dark:block" src="/svg/undraw_progressive_app_m-9-ms-light.svg" alt="filler undraw" >
    </div>
  </section>
</template>
<script>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  name: 'PauliversoncTheIntro',
  mounted() {
    this.animateElement();
  },
  computed: {
    highlight() {
      return 'text-gray-900 dark:text-dmWhite';
    }
  },
  methods: {
    animateElement() {
      gsap.registerPlugin(ScrollTrigger);

      const highlight1 = this.$refs.highlight1;
      const highlight2 = this.$refs.highlight2;

      this.applyAnimation(highlight1);
      this.applyAnimation(highlight2);

      const introSection = this.$refs.introSection;
      const introText = this.$refs.introText;
      const introImg = this.$refs.introImg;

      // // Create the timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introSection, // Set your trigger element
          start: "top 80%", // Adjust the start position based on your requirements
        },
        repeat: 0,
        repeatDelay: 0,
        
      });

      tl.from(introText, {ease: 'power1.inOut', duration: 1, opacity: 0, x: "-150%"}, 0);
      tl.from(introImg, {ease: 'power1.inOut', duration: 1, opacity: 0, x: "150%"}, 0);


    },


    applyAnimation(el) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'start center',
          onEnter: () => {
            el.classList.add('text-gray-900'); // Add class on enter
            el.classList.add('dark:text-dmWhite'); // Add class on enter
          },
        },
      });
    },



    
  },
}
</script>
<style scoped>
  
</style>