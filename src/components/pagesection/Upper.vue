<template>
  <div :class="css.class" :style="css.style">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    css: {
      required: true,
      type: Object
    }
  }
})
</script>

<style scoped></style>
