<template>
  <template v-for="(btn, i) in btnArr" :key="i">
    <button
      :class="btn.class"
      :style="btn.style"
      v-html="conditionalIconChange(btn.btnName)"
      @click="sendShowItem"
    ></button>
  </template>
</template>

<script lang="ts">
import ButtonType from '@/types/eventType/ButtonType'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    btnArr: {
      required: true,
      type: Array as PropType<ButtonType[]>
    },
    btnIndex: {
      required: false,
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      showItem: false
    }
  },
  emits: ['showItem'],
  methods: {
    sendShowItem() {
      this.showItem = !this.showItem
      this.$emit('showItem', { showItemStatus: this.showItem, index: this.btnIndex })
    },
    conditionalIconChange(htmlElem: string) {
      //console.log(htmlElem.search("[\\+]"));
      if (htmlElem.search('^Netfli[\\&times]') > -1 && !this.showItem) {
        return htmlElem.replace(htmlElem[htmlElem.search('^Netfli[\\&times]')], '+')
      } else if (htmlElem.search('[\\+]') > -1 && this.showItem) {
        return htmlElem.replace(htmlElem[htmlElem.search('[\\+]')], '&times')
      } else {
        return htmlElem
      }
    }
  }
})
</script>

<style>
@media screen and (max-width: 565px) {
  .media-btn-margin-top {
    margin-top: 15px;
  }
}
</style>
