<template>
  <main :class="css.class" :style="css.style">
    <H :hArr="hArr"></H>
    <RegisterInputGroup></RegisterInputGroup>
  </main>
  <Horizontal :hrArr="hrArr"></Horizontal>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import H from "@/components/elems/customElem/H.vue";
import HType from "@/types/customType/HType";
import HrType from "@/types/customType/HrType";
import RegisterInputGroup from "@/components/mixed/register/RegisterInputGroup.vue";
import Horizontal from "@/components/elems/customElem/Hr.vue";

export default defineComponent({
  setup() {
    const hArr = ref<HType[]>([
      {
        elemName: "h1",
        name: "Sınırsız film, dizi ve çok daha fazlası.",
        class: ["display-5", "fw-bold", "text-white", "h1-text", "text-center"],
        style: { maxWidth: "640px" },
      },
      {
        elemName: "h2",
        name: "İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.",
        class: ["fs-3", "fw-normal", "text-white", "text-center"],
        style: {},
      },
      {
        elemName: "h3",
        name: "İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin.",
        class: ["fs-5", "fw-normal", "text-white", "text-center", "mt-5"],
        style: {},
      },
    ]);

    const hrArr = ref<HrType[]>([
      {
        class: ["p-0", "m-0"],
        style: { height: "10px", borderColor: "#222", opacity: "1" },
      },
    ]);

    return { hArr, hrArr };
  },
  props: {
    css: {
      required: true,
      type: Object,
    },
  },
  components: {
    H,
    RegisterInputGroup,
    Horizontal,
  },
});
</script>

<style scoped>
main {
  min-height: 90vh;
}
</style>