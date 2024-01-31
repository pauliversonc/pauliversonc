<template>
  
  <div role="button"  @click="toggleDarkMode()" class="h-6 w-8 justify-self-end relative
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
        "
        :class="btnMin ? 'block lg:hidden': ''"
        >

        <!-- ACTUAL CIRCLE DARKMODE -->
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
</template>
<script>
import { useDark } from '@vueuse/core'
export default {
  name: 'PauliversoncBaseToggleSwitch',
  props: {
    btnMin: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    isDarkMode() {
      return (this.isDark) ? "translate-x-[100%]" : " translate-x-[0]";
    }
  },

  data() {
    return {
      isDark: useDark({ disableTransition: false }),
    }
  },

  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
    },
  },
}
</script>
<style scoped>
  
</style>