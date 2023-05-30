<template>
  <template v-for="(routerItem, i) in routerArr" :key="i">
    <router-link
      :to="'/' + routerItem.routerLink"
      :class="routerItem.class"
      :style="routerItem.style"
      v-html="routerItem.routerName"
    ></router-link>
  </template>
</template>

<script lang="ts">
import RouterButtonType from '@/types/eventType/RouterButtonType'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    routerArr: {
      required: true,
      type: Array as PropType<RouterButtonType[]>
    }
  }
})
</script>

<style></style>
