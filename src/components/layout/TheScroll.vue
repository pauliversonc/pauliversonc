<template >
    <div class="container mx-auto  px-4 xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16 lg:text-center">
    <div @click="scrollToIntro()" ref="scrollWrapper"  class="h-16 inline-block hover:cursor-pointer" role="button" >
      <span class="uppercase text-sm  font-bold text-gray-500 dark:text-dmGray">scroll</span>
      
      <div class="relative down-fade">
        <div class="absolute left-1/2 translate-x-[-50%] fill-gray-900 dark:fill-dmWhite bottom-0 translate-y-[80%]">
          <svg class="h-5 w-5">
            <use
            xlink:href="/icons/sprite.svg#icon-chevron-down"
            ></use>
          </svg>
        </div>

        <div class="absolute left-1/2 translate-x-[-50%] fill-gray-900 dark:fill-dmWhite bottom-0 translate-y-[130%]">
          <svg class="h-5 w-5">
            <use
            xlink:href="/icons/sprite.svg#icon-chevron-down"
            ></use>
          </svg>
        </div>

        <div class="absolute left-1/2 translate-x-[-50%] fill-gray-900 dark:fill-dmWhite bottom-0 translate-y-[180%]">
          <svg class="h-5 w-5">
            <use
            xlink:href="/icons/sprite.svg#icon-chevron-down"
            ></use>
          </svg>
        </div>

      </div>
      
    </div>
  </div>
</template>
<script>
import gsap from 'gsap';

export default {
  name: 'PauliversoncTheScroll',
  emits:['to-intro'],
  mounted() {
    this.animateElement();
  },
  methods: {
    animateElement() {
      const scrollWrapper = this.$refs.scrollWrapper;

      gsap.from(scrollWrapper, {
        duration:1,
        ease: "back.out(1.7)",
        y: 100, // Example animation property
        delay: 2.2,
        rotation: 360,
        opacity: 0,
      });
    },

    scrollToIntro(){
      this.$emit('to-intro', 'theIntro'); // Emit a custom event
    },
  },
}
</script>
<style scoped>
  @keyframes fade {
    to {
      opacity: 0.1;
    }
  }

  .down-fade > div{
    animation: fade .8s infinite alternate;
  }

  .down-fade > div:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .down-fade > div:nth-child(3) {
    animation-delay: 0.4s;
  }
  
</style>