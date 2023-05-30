<template>
  <template v-for="(aitem, i) in aArr" :key="i">
    <a :href="aitem.href" :class="aitem.class" :style="aitem.style" v-html="aitem.name"></a>
  </template>
</template>

<script lang="ts">
import AType from '@/types/customType/AType'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    aArr: {
      required: true,
      type: Array as PropType<AType[]>
    }
  }
})
</script>

<style></style>
