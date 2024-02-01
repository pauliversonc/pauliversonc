<template>
  <a
    :href="link"
    :class="{'flex-row-reverse' : iconRight}"
    class="flex items-center justify-center gap-2 relative before:ease-out before:duration-300 before:content-[''] before:absolute before:h-0.5 before:w-0 before:bg-gray-900 before:bottom-0 before:left-0 hover:before:w-full dark:before:bg-dmWhite group"
  >
    <div class="flex items-center justify-center">
      <svg
        class="h-4 w-4 fill-gray-900 dark:fill-dmGray dark:group-hover:fill-dmWhite dark:ease-out dark:duration-300"
      >
        <use :xlink:href="`/icons/sprite.svg#icon-${icon}`"></use>
      </svg>
    </div>
    <!-- View My Résumé -->
    <span
      class="text-gray-900 font-medium dark:text-dmGray dark:group-hover:text-dmWhite dark:ease-out dark:duration-300"
      >{{ text }}</span
    >
  </a>
</template>
<script>
export default {
  name: 'PauliversoncBaseLink',
  props: {
    link:{
      type: String,
      required: false,
      default: '#'
    },

    text:{
      type: String,
      required: true,
    },

    icon:{
      type: String,
      required: true,
    },

    iconRight:{
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
<style></style>
