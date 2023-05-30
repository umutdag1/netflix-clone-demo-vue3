<template>
  <template v-for="(img, i) in imgArr" :key="i">
    <img :class="img.class" :src="img.imgSrc" :style="img.style" />
  </template>
</template>

<script lang="ts">
import ImageType from '@/types/customType/ImageType'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    imgArr: {
      required: true,
      type: Array as PropType<ImageType[]>
    }
  }
})
</script>

<style></style>
