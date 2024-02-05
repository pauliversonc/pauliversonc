<template >
   <div class="overflow-hidden container mx-auto py-4 px-4 xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16 h-[75vh] md:h-[80vh] lg:h-[75vh]  flex items-center">

<!-- HEADING 1 (default)-->
<h1 class="text-gray-900 dark:text-dmWhite w-full flex flex-col uppercase tracking-[-0.08em] leading-none font-bold
text-[4.8rem]
xxs:text-[6.8rem]
xs:text-[8.8rem] 
sm:text-[9.8rem]
sm:leading-[.8]

lg:flex-row
lg:gap-8
lg:justify-center
lg:text-[12.2rem] 
xl:text-[15rem] 

relative
">
    <span ref="spanNum" class=" bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-white dark:from-dmGray dark:to-dmBlack
     absolute top-0 left-0 text-gray-200 z-[-1] translate-y-[-50%] font-normal inline-block p-1
     text-[2.4rem]
     xxs:text-[3.4rem]
     xs:text-[4.4rem] 
     sm:text-[4.9rem]
     lg:text-[6.1rem] 
     xl:text-[7.5rem] 
     sm:left-[-.5%]
     lg:left-[2%]
     xl:left-[3%]
     2xl:left-[11%]
     tracking-[0.001em]
     select-none
    ">/01</span>
    


    <span ref="spanHi" class="lg:hidden">hi</span>
    <span ref="spanIam" class="sm:hidden">iam</span>
    <span ref="spanPaul" class="sm:hidden">paul</span>
    <span ref="spanImPaul" class="hidden sm:block lg:hidden">i'm paul</span>

    <span ref="spanHiImPaul" class="hidden  lg:block">hi i'm paul</span>
</h1>

</div>
</template>
<script>
import gsap from 'gsap';

export default {
  name: 'PauliversoncTheHero',

  mounted() {
    this.animateElement();
  },

  methods: {
    animateElement() {
      const spanNum = this.$refs.spanNum;
      const spanHi = this.$refs.spanHi;
      const spanIam = this.$refs.spanIam;
      const spanPaul = this.$refs.spanPaul;
      const spanImPaul = this.$refs.spanImPaul;
      const spanHiImPaul = this.$refs.spanHiImPaul;


      gsap.from(spanNum, {
        duration:2,
        ease: "expoScale(0.5,7,none)",
        y: 50,
        scale: 20,
        opacity: 0, // Example animation property
        delay: 1,
      });

      gsap.from(spanHi, {
        duration:1,
        ease: "back.out(1.7)",
        x: -400, // Example animation property
        delay: 1.8,
      });

      gsap.from(spanIam, {
        duration:1,
        ease: "back.out(1.7)",
        x: -400, // Example animation property
        delay: 2.3,
      });

      gsap.from(spanPaul, {
        duration:1,
        ease: "back.out(1.7)",
        x: -400, // Example animation property
        delay: 2.9,
      });

      gsap.from(spanImPaul, {
        duration:1,
        ease: "back.out(1.7)",
        x: 800, // Example animation property
        delay: 2.4,
      });

      gsap.from(spanHiImPaul, {
        duration:1,
        ease: "back.out(1.7)",
        y: 400, // Example animation property
        delay: 1.6,
      });

    },
  },
}
</script>
<style >
  
</style>