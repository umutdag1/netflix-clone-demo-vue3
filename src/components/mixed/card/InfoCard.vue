<template >
  <template v-for="(infoElem, i) in infoArr" :key="i">
    <div :class="infoElem.columnClass" :style="infoElem.columnStyle">
      <Image
        :imgArr="infoElem.imgArr"
        v-if="infoElem.elemName === 'img'"
      ></Image>
      <H
        :hArr="infoElem.hArr"
        v-else-if="infoElem.elemName === 'h'"
      ></H>
      <Video
        :videoObj="infoElem.videoObj"
        v-if="infoElem.videoObj.src !== ''"
      ></Video>
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import H from "@/components/elems/customElem/H.vue";
import Image from "@/components/elems/customElem/Image.vue";
import Video from "@/components/elems/customElem/Video.vue";
import InfoCardType from "@/types/mixedType/InfoCardType";

export default defineComponent({
  props: {
    infoArr: {
      required: true,
      type: Array as PropType<InfoCardType[]>,
    },
  },
  components: {
    H,
    Image,
    Video,
  },
});
</script>

<style>
</style>