<template>
  <video ref="videoRef" muted loop :class="videoObj.class" :style="videoObj.style"></video>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue'
import VideoType from '@/types/customType/VideoType'

export default defineComponent({
  setup(props) {
    const videoRef = ref<{ src: string; play: () => null }>()
    onMounted(() => {
      if (videoRef.value) {
        videoRef.value.src = props.videoObj.src
        videoRef.value.play()
      }
    })

    return { videoRef }
  },
  props: {
    videoObj: {
      required: true,
      type: Object as PropType<VideoType>
    }
  }
})
</script>

<style></style>
