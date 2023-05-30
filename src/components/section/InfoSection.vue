<template>
  <div :class="css.class" :style="css.style">
    <InfoCard :infoArr="infoArr"></InfoCard>
  </div>
  <Horizontal :hrArr="hrArr"></Horizontal>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import InfoCard from '@/components/mixed/card/InfoCard.vue'
import Horizontal from '@/components/elems/customElem/Hr.vue'
import InfoCardType from '@/types/mixedType/InfoCardType'
import HrType from '@/types/customType/HrType'
export default defineComponent({
  setup() {
    const hrArr = ref<HrType[]>([
      {
        class: ['p-0', 'm-0'],
        style: { height: '10px', borderColor: '#222', opacity: '1' }
      }
    ])

    return { hrArr }
  },
  props: {
    infoArr: {
      required: true,
      type: Array as PropType<InfoCardType[]>
    },
    css: {
      required: true,
      type: Object
    }
  },
  components: {
    InfoCard,
    Horizontal
  }
})
</script>

<style scoped></style>
