<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid mx-5">
      <a class="navbar-brand" href="#">
        <Image :imgArr="imgArr"></Image>
      </a>
      <div class="ms-auto d-flex justify-content-center align-items-center">
        <template v-if="isInHomeComponent">
          <DropDown :dropdownArr="dropdownArr"></DropDown>
          <RouterButton :routerArr="routerArr"></RouterButton>
        </template>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import RouterButtonType from "@/types/eventType/RouterButtonType";
import ImageType from "@/types/customType/ImageType";
import DropDownType from "@/types/eventType/DropDownType";
import RouterButton from "@/components/elems/eventElem/RouterButton.vue";
import Image from "@/components/elems/customElem/Image.vue";
import DropDown from "@/components/elems/eventElem/DropDown.vue";
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const routerArr = ref<RouterButtonType[]>([
      {
        routerLink: "signin",
        routerName: "Oturum Aç",
        class: ["text-white", "fs-6", "btn", "ms-3"],
        style: {
          minWidth: "120px",
          backgroundColor : "#e50914"
        },
      },
    ]);

    const imgArr = ref<ImageType[]>([
      {
        imgSrc: "assets/images/Netflix-Logo1.png",
        class: ["w-100", "position-relative"],
        style: {},
      },
    ]);

    const dropdownArr = ref<DropDownType[]>([
      {
        name: "Dil",
        class: ["btn", "border-white", "text-white"],
        liitems: ["Türkçe", "English"],
        style: {},
      },
    ]);
    return { routerArr, imgArr, dropdownArr };
  },
  props : {
    isInHomeComponent : {
      required : false,
      type : Boolean,
      default : false
    }
  },
  components: {
    RouterButton,
    Image,
    DropDown,
  },
});
</script>

<style scoped>
.navbar {
  height: 100px;
  flex-wrap: nowrap;
}

.navbar-brand {
  min-width: 150px;
  max-width: 14%;
}

@media screen and (max-width:484px) {
  * {
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>