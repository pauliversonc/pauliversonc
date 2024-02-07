<template>
  <a :href="link" target="_blank" :class="{'p-1':small} " class="icon-link group">
    <svg :class="(small) ? 'h-4 w-4': 'h-9 w-9'" class=" fill-gray-600 dark:fill-dmGray group-hover:fill-gray-900 dark:group-hover:fill-dmWhite ease-out duration-300">
      <use :xlink:href="`/icons/sprite.svg#icon-${icon}`"></use>
    </svg>
  </a>
</template>
<script>
export default {
  name: 'PauliversoncBaseIconLink',
  props: {
    link: {
      type: String,
      required: false,
      default: '#',
    },

    small: {
      type: Boolean,
      required: false,
      default: false,
    },

    icon: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>
    @keyframes bounce {
    0%, 100%, 20%, 50%, 80% {
      -webkit-transform: translateY(0);
      -ms-transform:     translateY(0);
      transform:         translateY(0)
    }
    40% {
      -webkit-transform: translateY(-20%);
      -ms-transform:     translateY(-20%);
      transform:         translateY(-20%)
    }
    60% {
      -webkit-transform: translateY(-10%);
      -ms-transform:     translateY(-10%);
      transform:         translateY(-10%)
    }
  }

  .icon-link {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;

  }

  .icon-link:hover {
    cursor: pointer;
    animation-name: bounce;
    -moz-animation-name: bounce;
  }
</style>