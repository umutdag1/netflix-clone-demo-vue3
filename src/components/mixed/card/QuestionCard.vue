<template>
  <template v-for="(QuestionCardElem, i) in questionCardArr" :key="i">
    <H :hArr="QuestionCardElem.hArr" ></H>
    <Button :btnArr="QuestionCardElem.btnArr" :btnIndex="i" @showItem="showItem = $event"></Button>
    <H :hArr="QuestionCardElem.hArr1" :hIndex="i" :showItem="showItem"></H>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Button from "@/components/elems/eventElem/Button.vue";
import H from "@/components/elems/customElem/H.vue";
import QuestionCardType from "@/types/mixedType/QuestionCardType";
export default defineComponent({
  props : {
    questionCardArr : {
      required : true,
      type : Array as PropType<QuestionCardType[]>
    }
  },
  data() {
    return {
        showItem : {},
    }
  },
  components: {
    Button,
    H,
  },
});
</script>

<style>
</style>