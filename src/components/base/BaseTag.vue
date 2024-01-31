<template >
  <li class="bg-gray-100 dark:bg-dmBlackTint1 text-sm font-medium text-gray-600 dark:text-dmGray inline-block px-3 py-0.5">{{ tagName }}</li>
</template>
<script>
export default {
  name: 'PauliversoncBaseTag',
  props: {
    tagName: {
      type: String,
      required: true,
    },
  },

}
</script>
<style scoped>
  
</style>