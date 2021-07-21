<template>
  <div :class="css.class" :style="css.style">
    <div :class="encapsulationDiv.class" :style="encapsulationDiv.style">
      <!--Form gelecek-->
      <H :hArr="hArr"></H>
      <Input :inputArr="inputArr"></Input>
      <Button :btnArr="btnArr"></Button>
      <div :class="encapsulationDiv.class" :style="encapsulationDiv.style">
        <Input :inputArr="inputArr2"></Input>
        <RouterButton :routerArr="routerArr"></RouterButton>
      </div>
      <H :hArr="hArr2"></H>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import H from "@/components/elems/customElem/H.vue";
import Input from "@/components/elems/customElem/Input.vue";
import Button from "@/components/elems/eventElem/Button.vue";
import RouterButton from "@/components/elems/eventElem/RouterButton.vue";
import HType from "@/types/customType/HType";
import ButtonType from "@/types/eventType/ButtonType";
import InputGeneralType from "@/types/customType/Input/InputGeneralType";
import ObjectCssType from "@/types/specialType/ObjectCssType";
import RouterButtonType from "@/types/eventType/RouterButtonType";

export default defineComponent({
  setup() {
    const encapsulationDiv = ref<ObjectCssType>({
      class: ["d-inline-block"],
      style: { width: "350px" },
    });

    const hArr = ref<HType[]>([
      {
        elemName: "h2",
        name: "Oturum Aç",
        class: ["text-white", "fw-bold"],
        style: {},
      },
    ]);

    const inputArr = ref<InputGeneralType[]>([
      {
        inputType: "text",
        placeholder: "E-posta veya telefon numarası",
        class: ["mt-3", "py-3", "px-4", "rounded", "border-0", "w-100"],
        style: { backgroundColor: "#333", caretColor: "white" },
      },
      {
        inputType: "password",
        placeholder: "Parola",
        class: ["mt-3", "py-3", "px-4", "rounded", "border-0", "w-100"],
        style: { backgroundColor: "#333", caretColor: "white" },
      },
    ]);

    const btnArr = ref<ButtonType[]>([
      {
        btnName: "Oturum Aç",
        class: [
          "mt-5",
          "py-3",
          "btn",
          "btn-danger",
          "text-white",
          "fw-bold",
          "w-100",
        ],
        style: { backgroundColor: "#e50914" },
      },
    ]);

    const inputArr2 = ref<InputGeneralType[]>([
      {
        inputType: "checkbox",
        div: {
          name: "Beni Hatırla",
          class: ["form-check-label", "mt-2", "float-start"],
          style: { color: "#b3b3b3" },
        },
        id: "signInCheckBox",
        value: "true",
        class: ["form-check-input"],
        style: { backgroundColor: "#737373" },
      },
    ]);

    const routerArr = ref<RouterButtonType[]>([
      {
        routerLink: "signinhelp",
        routerName: "Yardım ister misiniz?",
        class: ["anchor", "mt-2", "float-end"],
        style: { color: "#b3b3b3" },
      },
    ]);

    const hArr2 = ref<HType[]>([
      {
        elemName: "h6",
        name: "Netflix'e katılmak ister misiniz? <a href='/' class='anchor text-white'>Şimdi kaydolun.</a>",
        class: ["mt-3"],
        style: {color : "#737373"},
      },
      {
        elemName: "h6",
        name: "Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor. <br> <a href='/' class='anchor link-primary'>Daha fazlasını öğrenin.</a>",
        class: ["mt-3"],
        style: {color : "#737373", fontSize : "0.8rem"},
      },
    ]);

    return {
      hArr,
      inputArr,
      btnArr,
      encapsulationDiv,
      inputArr2,
      routerArr,
      hArr2,
    };
  },
  props: {
    css: {
      required: true,
      type: Object as PropType<ObjectCssType>,
    },
  },
  components: {
    H,
    Input,
    Button,
    RouterButton,
  },
});
</script>

<style>
</style>