<template >
  <h5 ref="headFive" :class="{'lg:mt-0 lg:mb-4': marginCustom, 'mt-4': marginTopCustom}" class="uppercase text-2xl  italic font-bold text-gray-900 dark:text-dmWhite">{{ title }}</h5>
</template>
<script>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  name: 'PauliversoncBaseHeadingFive',
  mounted() {
    this.animateElement();
  },
  methods:{
    animateElement(){
      gsap.registerPlugin(ScrollTrigger);

      const headFive = this.$refs.headFive;
      gsap.from(headFive, {
        scrollTrigger: {
          trigger: headFive,
          start: 'start 70%',
        },
        duration:1,
        ease: "back.out(1.7)",
        y: '50%',
        opacity: 0,
      });
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },

    marginCustom: {
      type: Boolean,
      required: false,
      default: false,
    },

    marginTopCustom: {
      type: Boolean,
      required: false,
      default: false,
    }

  },

}
</script>
<style>
  
</style>