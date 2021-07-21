<template>
  <div :class="css.class" :style="css.style">
    <QuestionCard :questionCardArr="questionCardArr"></QuestionCard>
    <H :hArr="hArr"></H>
    <RegisterInputGroup></RegisterInputGroup>
  </div>
  <Horizontal :hrArr="hrArr"></Horizontal>
</template>

<script lang="ts">
import QuestionCard from "@/components/mixed/card/QuestionCard.vue";
import H from "@/components/elems/customElem/H.vue";
import Horizontal from "@/components/elems/customElem/Hr.vue";
import RegisterInputGroup from "@/components/mixed/register/RegisterInputGroup.vue";
import QuestionCardType from "@/types/mixedType/QuestionCardType";
import HType from "@/types/customType/HType";
import ButtonType from "@/types/eventType/ButtonType";
import HrType from "@/types/customType/HrType";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(){
    const hArr1 = ref<HType[]>([
      {
        elemName: "h1",
        name: "Sıkça Sorulan Sorular",
        class: ["display-5", "text-white","fw-bold","text-center", "container", "w-100","p-5","d-block"],
        style: {maxWidth : "800px" },
      }
    ]);

    const btnArr1 = ref<ButtonType[]>([
      {
        btnName:
          "<div class='ps-3' style='float : left; margin-top : 1%;'>Netflix Nedir?</div><div class='fs-1 pe-3' style='float : right;'>+</div>",
        class: ["fs-4", "text-white", "btn","rounded-0", "container", "w-100","d-block"],
        style: { backgroundColor: "#303030", maxWidth : "800px" },
      },
    ]);
    
    const hArr1_1 = ref<HType[]>([
      {
        elemName: "h1",
        name: "Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir yayın hizmetidir. <br><br> Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında. Her zaman keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve filmler ekleniyor!",
        class: ["fs-4", "text-white","text-start","mt-1", "container", "w-100","p-4"],
        style: {backgroundColor: "#303030", maxWidth : "800px" },
      },
    ]);

    const btnArr2 = ref<ButtonType[]>([
      {
        btnName: "<div class='ps-3' style='float : left; margin-top : 1%;'>Netflix'in maliyeti nedir?</div><div class='fs-1 pe-3' style='float : right;'>+</div>",
        class: ["fs-4", "text-white", "btn","rounded-0", "container", "w-100", "mt-2","d-block"],
        style: { backgroundColor: "#303030", maxWidth : "800px" },
      }
    ]);

    const hArr1_2 = ref<HType[]>([
      {
        elemName: "h1",
        name: "Netflix'i akıllı telefonunuz, tabletiniz, Akıllı TV'niz, dizüstü bilgisayarınız veya yayın cihazınızda sabit bir aylık ücretle izleyin. Aylık plan ücretleri 26,99 TL ile 54,99 TL arasında değişmektedir. Ekstra maliyet yok, sözleşme yok.",
        class: ["fs-4", "text-white","text-start","mt-1", "container", "w-100","p-4"],
        style: {backgroundColor: "#303030", maxWidth : "800px" },
      }
    ]);

    const btnArr3 = ref<ButtonType[]>([
      {
        btnName: "<div class='ps-3' style='float : left; margin-top : 1%;'>Nerede izleyebilirim?</div><div class='fs-1 pe-3' style='float : right;'>+</div>",
        class: ["fs-4", "text-white", "btn","rounded-0", "container", "w-100", "mt-2","d-block"],
        style: { backgroundColor: "#303030", maxWidth : "800px" },
      }
    ]);

    const hArr1_3 = ref<HType[]>([
      {
        elemName: "h1",
        name: "İstediğiniz yerde, istediğiniz zaman, sınırsız sayıda cihazda izleyin. Bilgisayarınızda netflix.com adresinden veya akıllı TV'ler, akıllı telefonlar, tabletler, medya oynatıcılar ve oyun konsolları dahil Netflix uygulamasını sunan, internet bağlantılı herhangi bir cihazda anında izlemek için Netflix hesabınızla oturum açın. <br><br> Favori içeriklerinizi iOS, Android veya Windows 10 uygulamasıyla da indirebilirsiniz. Seyahatteyken ve internet bağlantısı olmadan izlemek için indirilenleri kullanın. Netflix'i her yere beraberinizde götürün.",
        class: ["fs-4", "text-white","text-start","mt-1", "container", "w-100","p-4"],
        style: {backgroundColor: "#303030", maxWidth : "800px" },
      }
    ]);

    const btnArr4 = ref<ButtonType[]>([
      {
        btnName: "<div class='ps-3' style='float : left; margin-top : 1%;'>Nasıl iptal ederim?</div><div class='fs-1 pe-3' style='float : right;'>+</div>",
        class: ["fs-4", "text-white", "btn","rounded-0", "container", "w-100", "mt-2","d-block"],
        style: { backgroundColor: "#303030", maxWidth : "800px" },
      }
    ]);

    const hArr1_4 = ref<HType[]>([
      {
        elemName: "h1",
        name: "Netflix esnektir. Sinir bozucu hiçbir sözleşme ve taahhüt yoktur. Hesabınızı çevrimiçi olarak iki tıklamayla kolayca iptal edebilirsiniz. İptal ücreti yoktur - hesabınızı istediğiniz zaman başlatın veya durdurun.",
        class: ["fs-4", "text-white","text-start","mt-1", "container", "w-100","p-4"],
        style: {backgroundColor: "#303030", maxWidth : "800px" },
      }
    ]);

    const btnArr5 = ref<ButtonType[]>([
      {
        btnName: "<div class='ps-3' style='float : left; margin-top : 1%;'>Netflix'te ne izleyebilirim?</div><div class='fs-1 pe-3' style='float : right;'>+</div>",
        class: ["fs-4", "text-white", "btn","rounded-0", "container", "w-100","mt-2","d-block"],
        style: { backgroundColor: "#303030", maxWidth : "800px" },
      }
    ]);

    const hArr1_5 = ref<HType[]>([
      {
        elemName: "h1",
        name: "Netflix, uzun metrajlı filmler, belgeseller, diziler ve programlar, anime, ödüllü Netflix orijinal içerikleri ve daha fazlasından oluşan kapsamlı bir kütüphaneye sahiptir. İstediğiniz her zaman, istediğiniz kadar çok şey izleyin.",
        class: ["fs-4", "text-white","text-start","mt-1", "container", "w-100","p-4"],
        style: {backgroundColor: "#303030", maxWidth : "800px" },
      }
    ]);

    const btnArr6 = ref<ButtonType[]>([
      {
        btnName: "<div class='ps-3' style='float : left; margin-top : 1%;'>Netflix çocuklar için uygun mudur?</div><div class='fs-1 pe-3' style='float : right;'>+</div>",
        class: ["fs-4", "text-white", "btn","rounded-0", "container", "w-100", "mt-2","d-block"],
        style: { backgroundColor: "#303030", maxWidth : "800px" },
      }
    ]);

    const hArr1_6 = ref<HType[]>([
      {
        elemName: "h1",
        name: "Üyeliğinize dâhil olan Netflix Çocuk deneyimi, çocukların ailece izlenebilecek dizi ve filmleri kendilerine özel bir alanda izlemelerini sağlarken kontrolü ebeveynlere verir. <br><br> Çocuk profillerinde bulunan PIN korumalı ebeveyn kontrolleri sayesinde, çocukların izleyebileceği içeriklerin yetişkinlik düzeylerini kısıtlayabilir ve onların görmesini istemediğiniz belirli içerikleri engelleyebilirsiniz.",
        class: ["fs-4", "text-white","text-start","mt-1", "container", "w-100","p-4"],
        style: {backgroundColor: "#303030", maxWidth : "800px" },
      }
    ]);

    const questionCardArr = ref<QuestionCardType[]>([
        {
          btnArr : btnArr1.value,
          hArr : hArr1.value,
          hArr1 : hArr1_1.value
        },
        {
          btnArr : btnArr2.value,
          hArr : [],
          hArr1 : hArr1_2.value
        },
        {
          btnArr : btnArr3.value,
          hArr : [],
          hArr1 : hArr1_3.value
        },
        {
          btnArr : btnArr4.value,
          hArr : [],
          hArr1 : hArr1_4.value
        },
        {
          btnArr : btnArr5.value,
          hArr : [],
          hArr1 : hArr1_5.value
        },
        {
          btnArr : btnArr6.value,
          hArr : [],
          hArr1 : hArr1_6.value
        }
    ]);

    const hArr = ref<HType[]>([
      {
        elemName: "h3",
        name: "İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin.",
        class: ["fs-5", "fw-normal", "text-white", "text-center","mt-5","mb-4","d-block"],
        style: {backgroundColor: "#000"},
      }
    ]);

    const hrArr = ref<HrType[]>([
      {
        class: ["p-0", "m-0"],
        style: { height: "10px", borderColor: "#222", opacity: "1" },
      },
    ]);

    return { hArr, questionCardArr, hrArr }
  },
  props : {
    css : {
      required : true,
      type : Object
    }
  },
  components: {
    QuestionCard,
    H,
    RegisterInputGroup,
    Horizontal
  },
});
</script>

<style>
</style>