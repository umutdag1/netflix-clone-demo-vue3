<template>
  <template v-for="(hrElem, i) in hrArr" :key="i">
    <hr :class="hrElem.class" :style="hrElem.style" />
  </template>
</template>

<script lang="ts">
import HrType from '@/types/customType/HrType'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    hrArr: {
      required: true,
      type: Array as PropType<HrType[]>
    }
  }
})
</script>

<style scoped></style>
