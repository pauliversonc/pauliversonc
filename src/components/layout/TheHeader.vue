<template>
  <!-- HEADER -->
  <div class="fixed translate-x-[-50%] top-0 bg-white dark:bg-dmBlack w-full left-[50%] z-[9999]">
    <header ref="header" class="container h-[64px] mx-auto py-2 px-4 xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16 flex items-center justify-between relative">
      <!-- ICON -->
      <a href="#" >
        <img
          class="h-10 hidden dark:block"
          src="/images/logo/icon-white.png"
          alt="Paul Iverson Cortez - PIC Logo"
        />

        <img
          class="h-10 block dark:hidden"
          src="/images/logo/icon-black.png"
          alt="Paul Iverson Cortez - PIC Logo"
        />
      </a>

      <!-- wrapper -->
      <div class="flex gap-4">

        <!-- TOGGLE DARKMODE BUTTON -->
      <BaseToggleSwitch :btn-min="true"></BaseToggleSwitch>

        <!-- BUTTON MENU -->
        <div @click="toggleNav" class="relative h-6 w-6 overflow-hidden  z-40 hover:cursor-pointer select-none
        lg:hidden" role="button" >
          <div :class="moveLineMenu1" class="ease-out duration-300 absolute h-[4px] w-6 dark:bg-dmWhite bg-gray-900 top-0 ">&nbsp;</div>
          <div :class="moveLineMenu2" class="ease-out duration-300 absolute h-[4px] w-6 dark:bg-dmWhite bg-gray-900 top-1/2 left-1/2 translate-y-[-50%]">&nbsp;</div>
          <div :class="moveLineMenu3" class="ease-out duration-300 absolute h-[4px] w-6 dark:bg-dmWhite bg-gray-900 bottom-0">&nbsp;</div>
        </div>


      </div>

      <!-- NAV LINKS -->
      <!-- Options: (1. top-[-100vh] - this will make the nav links disappear from the viewport (negative height)  -->
      <nav 
      :class="isNavOpen ? 'top-0':'top-[-100vh]'" 
      class="nav absolute px-4 dark:bg-dmBlack bg-white z-10 h-screen w-full left-0 flex flex-col justify-center gap-4 tracking-tighter
      lg:top-0
      lg:h-auto
      lg:w-full
      lg:relative
      lg:flex
      lg:flex-row
      lg:justify-end
      lg:gap-4
      lg:px-0
      ">

        <div v-for="(link, index) in links" :key="index"  class=" flex justify-center">
          <a @click="scrollTo(link.section)" :href="link.href" class="flex relative  gap-4 sm:justify-center lg:flex-none lg:gap-0
            before:ease-out 
            before:duration-300
            before:content-['']
            before:absolute
            before:h-0.5
            before:w-0
            before:bg-gray-900
            before:bottom-0
            before:left-0
            hover:before:w-full
            dark:before:bg-dmWhite
          ">
            <span class="text-gray-500 dark:text-dmGray lg:text-[.5rem] lg:absolute lg:left-0 lg:top-0 lg:translate-y-[-50%]">/{{ '0'+(index + 1)  }}</span>
            <div class="text-gray-900 dark:text-dmWhite text-5xl sm:text-[4rem] uppercase font-light lg:text-lg lg:font-medium ">{{ link.name }}</div>
          </a>
        </div>

        
        <div class="pl-4 border-l border-slate-600 lg:block hidden">
          
          <BaseToggleSwitch></BaseToggleSwitch>

        </div>
        



      </nav>
    </header>
  </div>


  <!-- PRE-SPACER -->
  <div ref="preSpacer" class="container h-[64px]  mx-auto py-2 px-4 xs:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 border-4 border-red-400"></div>  



</template>
<script>
import BaseToggleSwitch from '../base/BaseToggleSwitch.vue';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: 'PauliversoncTheHeader',
  components: {
    BaseToggleSwitch,
  },
  computed: {
    moveLineMenu1() {
      return (this.isNavOpen) ? "rotate-45 top-1/2 translate-y-[-50%]" : "top-0";
    },
    moveLineMenu2() {
      return (this.isNavOpen) ? "translate-x-[100%]" : "translate-x-[-20%]";
    },
    moveLineMenu3() {
      return (this.isNavOpen) ? "rotate-[135deg] top-1/2 translate-y-[-50%]" : "";
    },


  },
  data(){
    return {
      links: [
        {'href':'#','section':'theHome' ,'name':'home'},
        {'href':'#','section':'theAbout' ,'name':'about'},
        {'href':'#','section':'theProject' ,'name':'projects'},
        {'href':'#','section':'theContact' ,'name':'contact'},
      ],
      isNavOpen: false,
      
    }
  },

  mounted() {
    this.animateElement();
  },

  emits:['toggle-details'],

  methods: {
    scrollTo(section){
      // close modal
      this.isNavOpen = false;
      this.isScrollable(true);
      this.$emit('toggle-details', section); // Emit a custom event
    },

    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
      this.isScrollable(!this.isNavOpen);
    },

    isScrollable(bool) {
      if (bool) document.body.classList.remove('overflow-y-hidden');
      else document.body.classList.add('overflow-y-hidden');
    },

    animateElement(){
      const header = this.$refs.header;

      gsap.from(header, {
        duration:2,
        ease: "expoScale(0.5,7,none)",
        opacity: 0, // Example animation property
        delay: 1,
      });


      const preSpacer = this.$refs.preSpacer;
      console.log(preSpacer)

    },
  },
}
</script>


<style>
  .nav {
    transition: top 0.3s ease-out;
  }

</style>