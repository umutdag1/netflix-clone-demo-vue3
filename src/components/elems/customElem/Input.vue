<template>
  <template v-for="(inputElem, i) in inputArr" :key="i">
    <input
      :type="inputElem.inputType"
      :class="inputElem.class"
      :style="inputElem.style"
      :placeholder="inputElem.placeholder"
      v-if="
        inputElem.inputType === 'text' || inputElem.inputType === 'password'
      "
    />
    <div
      :class="inputElem.div.class"
      :style="inputElem.div.style"
      :for="inputElem.id"
      v-else-if="inputElem.inputType === 'checkbox'"
    >
      <input
        :type="inputElem.inputType"
        :class="inputElem.class"
        :style="inputElem.style"
        :value="inputElem.value"
        :id="inputElem.id"
      />
      {{ inputElem.div.name }}
    </div>
  </template>
</template>

<script lang="ts">
import InputGeneralType from "@/types/customType/Input/InputGeneralType";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    inputArr: {
      required: true,
      type: Array as PropType<InputGeneralType[]>,
    },
  },
});
</script>

<style scoped>
</style>