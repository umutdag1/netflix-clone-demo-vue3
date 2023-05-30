<template>
  <template v-for="(hitem, i) in hArr" :key="i">
    <h1
      :class="hitem.class"
      :style="hitem.style"
      v-if="hitem.elemName === 'h1'"
      v-show="status"
      v-html="hitem.name"
    ></h1>
    <h2
      :class="hitem.class"
      :style="hitem.style"
      v-else-if="hitem.elemName === 'h2'"
      v-show="status"
      v-html="hitem.name"
    ></h2>
    <h3
      :class="hitem.class"
      :style="hitem.style"
      v-else-if="hitem.elemName === 'h3'"
      v-show="status"
      v-html="hitem.name"
    ></h3>
    <h4
      :class="hitem.class"
      :style="hitem.style"
      v-else-if="hitem.elemName === 'h4'"
      v-show="status"
      v-html="hitem.name"
    ></h4>
    <h5
      :class="hitem.class"
      :style="hitem.style"
      v-else-if="hitem.elemName === 'h5'"
      v-show="status"
      v-html="hitem.name"
    ></h5>
    <h6
      :class="hitem.class"
      :style="hitem.style"
      v-else-if="hitem.elemName === 'h6'"
      v-show="status"
      v-html="hitem.name"
    ></h6>
  </template>
</template>

<script lang="ts">
import HType from '@/types/customType/HType'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    hArr: {
      required: true,
      type: Array as PropType<HType[]>
    },
    showItem: {
      required: false,
      type: Object,
      default: () => {
        return { showItemStatus: true, index: -1 }
      }
    },
    hIndex: {
      required: false,
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      status: false
    }
  },
  watch: {
    showItem() {
      if (this.showItem.index === this.hIndex && this.showItem.index !== -1) {
        this.status = this.showItem.showItemStatus
      }
    }
  },
  mounted() {
    if (this.showItem.index === -1) {
      this.status = true
    }
  }
})
</script>

<style scoped></style>
