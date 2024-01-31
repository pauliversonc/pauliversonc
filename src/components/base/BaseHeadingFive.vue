<template >
  <h5 :class="{'lg:mt-0 lg:mb-4': marginCustom, 'mt-4': marginTopCustom}" class="uppercase text-2xl  italic font-bold text-gray-900 dark:text-dmWhite">{{ title }}</h5>
</template>
<script>
export default {
  name: 'PauliversoncBaseHeadingFive',
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