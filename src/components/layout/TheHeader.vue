<template>
  <!-- HEADER -->
  <header class="container h-[64px]  mx-auto py-2 px-4 xs:px-6 md:px-8 lg:px-10 xl:px-12  2xl:px-16 flex items-center justify-between relative">
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
      <div role="button" @click="toggleDarkMode()" class="h-6 w-8 justify-self-end relative
        before:absolute
        before:content-['']
        before:h-[10px]
        before:w-8
        before:bg-gray-900
        before:top-[50%]
        before:left-0
        before:translate-y-[-50%]
        before:rounded-lg
        overflow-hidden
        dark:before:bg-dmWhite
        cursor-pointer
        before:ease-out
        before:duration-300
        block
        lg:hidden
        ">

        
        <div :class="isDarkMode" class="absolute  ease-out duration-300 h-4 w-4  overflow-hidden  rounded-full left-0 bg-gray-100 dark:bg-dmBlackTint2 top-[50%] translate-y-[-50%]">
          <div class="relative h-full w-full">
            <svg :class="isDark ? 'translate-y-[110%]': 'translate-y-[0]'" class="p-[2px] absolute ease-out duration-300 h-full w-full fill-gray-600 dark:fill-dmWhite">
                <use
                xlink:href="/icons/sprite.svg#icon-sun"
                ></use>
            </svg>

            <svg :class="isDark ? 'translate-y-[0]': 'translate-y-[-110%]'" class="p-[2px] absolute ease-out duration-300 h-full w-full fill-gray-600 dark:fill-dmWhite">
                <use
                xlink:href="/icons/sprite.svg#icon-moon"
                ></use>
            </svg>
          </div>


        </div>
        
      </div>

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
      <div class=" flex justify-center">
        <a href="#" class="flex relative  gap-4 sm:justify-center lg:flex-none lg:gap-0
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
          <span class="text-gray-500 dark:text-dmGray lg:text-[.5rem] lg:absolute lg:left-0 lg:top-0 lg:translate-y-[-50%]">/01</span>
          <div class="text-gray-900 dark:text-dmWhite text-5xl sm:text-[4rem] uppercase font-light lg:text-lg lg:font-medium ">home</div>
        </a>
      </div>

      <div class=" flex justify-center">
        <a href="#" class="flex relative  gap-4 sm:justify-center lg:flex-none lg:gap-0
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
          <span class="text-gray-500 dark:text-dmGray lg:text-[.5rem] lg:absolute lg:left-0 lg:top-0 lg:translate-y-[-50%]">/02</span>
          <div class="text-gray-900 dark:text-dmWhite text-5xl sm:text-[4rem] uppercase font-light lg:text-lg lg:font-medium ">about</div>
        </a>
      </div>

      <div class=" flex justify-center">
        <a href="#" class="flex relative  gap-4 sm:justify-center lg:flex-none lg:gap-0
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
          <span class="text-gray-500 dark:text-dmGray lg:text-[.5rem] lg:absolute lg:left-0 lg:top-0 lg:translate-y-[-50%]">/03</span>
          <div class="text-gray-900 dark:text-dmWhite text-5xl sm:text-[4rem] uppercase font-light lg:text-lg lg:font-medium ">projects</div>
        </a>
      </div>

      <div class=" flex justify-center">
        <a href="#" class="flex relative  gap-4 sm:justify-center lg:flex-none lg:gap-0
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
          <span class="text-gray-500 dark:text-dmGray lg:text-[.5rem] lg:absolute lg:left-0 lg:top-0 lg:translate-y-[-50%]">/04</span>
          <div class="text-gray-900 dark:text-dmWhite text-5xl sm:text-[4rem] uppercase font-light lg:text-lg lg:font-medium ">contact</div>
        </a>
      </div>

      
      <div class="pl-4 border-l border-slate-600 lg:block hidden">
        
        <div @click="toggleDarkMode()" class="h-6 w-8 justify-self-end relative
        before:absolute
        before:content-['']
        before:h-[10px]
        before:w-8
        before:bg-gray-900
        before:top-[50%]
        before:left-0
        before:translate-y-[-50%]
        before:rounded-lg
        overflow-hidden
        dark:before:bg-dmWhite
        cursor-pointer
        before:ease-out
        before:duration-300


        ">

        <!-- ACTUAL CIRCLE DARKMODE -->
        <div role="button" :class="isDarkMode" class="absolute  ease-out duration-300 h-4 w-4  overflow-hidden  rounded-full left-0 bg-gray-100 dark:bg-dmBlackTint2 top-[50%] translate-y-[-50%]">
          <div class="relative h-full w-full">
            <svg :class="isDark ? 'translate-y-[110%]': 'translate-y-[0]'" class="p-[2px] absolute ease-out duration-300 h-full w-full fill-gray-600 dark:fill-dmWhite">
                <use
                xlink:href="/icons/sprite.svg#icon-sun"
                ></use>
            </svg>

            <svg :class="isDark ? 'translate-y-[0]': 'translate-y-[-110%]'" class="p-[2px] absolute ease-out duration-300 h-full w-full fill-gray-600 dark:fill-dmWhite">
                <use
                xlink:href="/icons/sprite.svg#icon-moon"
                ></use>
            </svg>
          </div>


        </div>
        
      </div>
      </div>
      



    </nav>
  </header>
</template>
<script>
import { useDark } from '@vueuse/core'

export default {
  name: 'PauliversoncTheHeader',
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

    isDarkMode() {
      return (this.isDark) ? "translate-x-[100%]" : " translate-x-[0]";
    }
  },
  data(){
    return {
      isNavOpen: false,
      isDark: useDark({ disableTransition: false }),
    }
  },

  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
    },

    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
}
</script>


<style>
  .nav {
    transition: top 0.3s ease-out;
  }

</style>