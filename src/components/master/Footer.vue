<template>
  <footer :class="css.class" :style="css.style">
    <H :hArr="hArr"></H>
    <div class="row mt-4">
      <A :aArr="aArr"></A>
    </div>
    <DropDown :dropdownArr="dropdownArr"></DropDown>
    <H :hArr="hArr2"></H>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import H from "@/components/elems/customElem/H.vue";
import A from "@/components/elems/customElem/A.vue";
import DropDown from "@/components/elems/eventElem/DropDown.vue";
import HType from "@/types/customType/HType";
import AType from "@/types/customType/AType";
import DropDownType from "@/types/eventType/DropDownType";

export default defineComponent({
  setup() {
    const hArr = ref<HType[]>([
      {
        elemName: "h5",
        name: "<div class='text-secondary'>Sorularınız mı var? <a href='tel:0850-390-7444' class='anchor text-secondary'>0850-390-7444</a> numaralı telefonu arayın</div>",
        class: [],
        style: {},
      },
    ]);

    const aArr = ref<AType[]>([
      {
        href: "#",
        name: "SSS",
        class: ["anchor", "text-secondary", "col-md-3", "h6", "py-1"],
        style: {},
      },
      {
        href: "#",
        name: "Yardım Merkezi",
        class: ["anchor", "text-secondary", "col-md-3", "h6", "py-1"],
        style: {},
      },
      {
        href: "#",
        name: "Hesap",
        class: ["anchor", "text-secondary", "col-md-3", "h6", "py-1"],
        style: {},
      },
      {
        href: "#",
        name: "Medya Merkezi",
        class: ["anchor", "text-secondary", "col-md-3", "h6", "py-1"],
        style: {},
      },
      {
        href: "#",
        name: "Yatırımcı İlişkileri",
        class: ["anchor", "text-secondary", "col-md-3", "h6", "py-1"],
        style: {},
      },
      {
        href: "#",
        name: "İş İmkanları",
        class: ["anchor", "text-secondary", "col-md-3", "h6", "py-1"],
        style: {},
      },
      {
        href: "#",
        name: "Hediye Kartı Kullan",
        class: ["anchor", "text-secondary", "col-md-3", "h6", "py-1"],
        style: {},
      },
      {
        href: "#",
        name: "İzleme Yolları",
        class: ["anchor", "text-secondary", "col-md-3", "h6", "py-1"],
        style: {},
      },
      {
        href: "#",
        name: "Kullanım Koşulları",
        class: ["anchor", "text-secondary", "col-md-3", "h6", "py-1"],
        style: {},
      },
      {
        href: "#",
        name: "Gizlilik",
        class: ["anchor", "text-secondary", "col-md-3", "h6", "py-1"],
        style: {},
      },
      {
        href: "#",
        name: "Çerez Tercihleri",
        class: ["anchor", "text-secondary", "col-md-3", "h6", "py-1"],
        style: {},
      },
      {
        href: "#",
        name: "Kurumsal Bilgiler",
        class: ["anchor", "text-secondary", "col-md-3", "h6", "py-1"],
        style: {},
      },
      {
        href: "#",
        name: "Bize Ulaşın",
        class: ["anchor", "text-secondary", "col-md-3", "h6", "py-1"],
        style: {},
      },
      {
        href: "#",
        name: "Hız Testi",
        class: ["anchor", "text-secondary", "col-md-3", "h6", "py-1"],
        style: {},
      },
      {
        href: "#",
        name: "Yasal Hükümler",
        class: ["anchor", "text-secondary", "col-md-3", "h6", "py-1"],
        style: {},
      },
      {
        href: "#",
        name: "Sadece Netflix'te",
        class: ["anchor", "text-secondary", "col-md-3", "h6", "py-1"],
        style: {},
      },
    ]);

    const dropdownArr = ref<DropDownType[]>([
      {
        name: "Dil",
        class: ["btn", "border-white", "text-white", "p-3", "mt-3"],
        liitems: ["Türkçe", "English"],
        style: {},
      },
    ]);

    const hArr2 = ref<HType[]>([
      {
        elemName: "h6",
        name: "Netflix Türkiye",
        class: ["text-secondary", "mt-5"],
        style: {},
      },
    ]);

    return { hArr, aArr, dropdownArr, hArr2 };
  },
  props: {
    css: {
      required: true,
      type: Object,
    },
  },
  components: {
    H,
    A,
    DropDown,
  },
});
</script>

<style scoped>
</style>