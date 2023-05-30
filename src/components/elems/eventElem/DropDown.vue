<template>
  <template v-for="(dropdownitem, i) in dropdownArr" :key="i">
    <div class="dropdown">
      <a
        class="dropdown-toggle"
        :class="dropdownitem.class"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        v-html="dropdownitem.name"
      >
      </a>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li v-for="(dropdownliitem, j) in dropdownitem.liitems" :key="j">
          <a class="dropdown-item" href="#" v-html="dropdownliitem"></a>
        </li>
      </ul>
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropDownType from '@/types/eventType/DropDownType'

export default defineComponent({
  props: {
    dropdownArr: {
      required: true,
      type: Array as PropType<DropDownType[]>
    }
  }
})
</script>

<style></style>
