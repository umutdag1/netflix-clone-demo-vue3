<template>
  <div class="input-group justify-content-center mt-2">
    <Input :inputArr="inputArr"></Input>
    <RouterButton :routerArr="routerArr"></RouterButton>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "@vue/runtime-core";
import InputGeneralType from "@/types/customType/Input/InputGeneralType";
import RouterButtonType from "@/types/eventType/RouterButtonType";
import Input from "@/components/elems/customElem/Input.vue";
import RouterButton from "@/components/elems/eventElem/RouterButton.vue";

export default defineComponent({
  setup() {
    const inputArr = ref<InputGeneralType[]>([
      {
        inputType: "text",
        placeholder: "E-posta adresi",
        class: ["p-3", "rounded", "border-0", "w-50", "input-text"],
        style: { minWidth: "400px", maxWidth: "600px" },
      },
    ]);

    const routerArr = ref<RouterButtonType[]>([
      {
        routerLink: "signup",
        routerName: "Başlayın >",
        class: [
          "fs-4",
          "text-white",
          "btn",
          "btn-danger",
          "media-btn-margin-top",
          "pt-2"
        ],
        style: {backgroundColor : "#e50914", width: "150px"},
      },
    ]);

    return {inputArr,routerArr}
  },
  components : {
      Input,
      RouterButton
  }
});
</script>

<style scoped>
  
</style>