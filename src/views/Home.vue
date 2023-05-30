<template>
  <div class="wrapper overflow-hidden">
    <Upper :css="upperCss">
      <Navbar :isInHomeComponent="true"></Navbar>
      <MainSection :css="mainSectionCss"></MainSection>
    </Upper>
    <Middle :css="middleCss">
      <InfoSection :infoArr="infoArr" :css="infoSectionCss"></InfoSection>
      <InfoSection :infoArr="infoArr2" :css="infoSectionCss"></InfoSection>
      <InfoSection :infoArr="infoArr3" :css="infoSectionCss"></InfoSection>
      <InfoSection :infoArr="infoArr4" :css="infoSectionCss"></InfoSection>
      <QuestionSection :css="questionSectionCss"></QuestionSection>
    </Middle>
    <Lower :css="lowerCss">
      <Footer :css="footerCss"></Footer>
    </Lower>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Upper from '@/components/pagesection/Upper.vue'
import Middle from '@/components/pagesection/Middle.vue'
import Lower from '@/components/pagesection/Lower.vue'
import MainSection from '@/components/section/MainSection.vue'
import Navbar from '@/components/master/Navbar.vue'
import InfoSection from '@/components/section/InfoSection.vue'
import QuestionSection from '@/components/section/QuestionSection.vue'
import Footer from '@/components/master/Footer.vue'
import HType from '@/types/customType/HType'
import InfoCardType from '@/types/mixedType/InfoCardType'
import ImageType from '@/types/customType/ImageType'
import ObjectCssType from '@/types/specialType/ObjectCssType'

export default defineComponent({
  setup() {
    const upperCss = ref<ObjectCssType>({
      class: [],
      style: {
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('assets/images/1.jpg'), no-repeat",
        backgroundSize: 'cover',
        boxShadow: 'inset 0px 40px 160px 10px black',
        zIndex: '-1'
      }
    })

    const middleCss = ref<ObjectCssType>({
      class: ['row', 'py-3', 'mx-auto', 'justify-content-center', 'align-items-center'],
      style: { backgroundColor: '#000' }
    })

    const lowerCss = ref<ObjectCssType>({
      class: ['w-100', 'pt-5', 'pb-3'],
      style: { backgroundColor: '#000' }
    })

    const mainSectionCss = ref<ObjectCssType>({
      class: ['d-flex', 'justify-content-center', 'align-items-center', 'flex-column', 'pb-5'],
      style: {}
    })

    const infoSectionCss = ref<ObjectCssType>({
      class: ['row', 'py-3', 'mx-auto', 'justify-content-center', 'align-items-center'],
      style: {}
    })

    const questionSectionCss = ref<ObjectCssType>({
      class: ['w-100', 'text-center', 'py-5'],
      style: {}
    })

    const footerCss = ref<ObjectCssType>({
      class: ['container', 'py-3'],
      style: { maxWidth: '1100px' }
    })

    const hArr = ref<HType[]>([
      {
        elemName: 'h1',
        name: 'Televizyonunuzda izleyebilirsiniz.',
        class: ['display-5', 'fw-bold', 'mt-5'],
        style: {}
      },
      {
        elemName: 'h4',
        name: 'Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.',
        class: ['mt-3'],
        style: {}
      }
    ])

    const imgArr = ref<ImageType[]>([
      {
        imgSrc: 'assets/images/tv.png',
        class: ['w-100', 'position-relative'],
        style: { zIndex: '999' }
      }
    ])

    const infoArr = ref<InfoCardType[]>([
      {
        elemName: 'h',
        columnClass: ['offset-lg-1', 'col-lg-5', 'text-lg-start', 'text-center', 'text-white'],
        columnStyle: { maxWidth: '600px' },
        imgArr: [],
        hArr: hArr.value,
        videoObj: {
          src: '',
          class: [],
          style: {}
        }
      },
      {
        elemName: 'img',
        columnClass: ['col-lg-6', 'position-relative'],
        columnStyle: { maxWidth: '600px' },
        imgArr: imgArr.value,
        hArr: [],
        videoObj: {
          src: 'assets/videos/videotv.m4v',
          class: ['w-75', 'position-absolute'],
          style: { transform: 'translate(-113%,30%)' }
        }
      }
    ])

    const hArr2 = ref<HType[]>([
      {
        elemName: 'h1',
        name: 'Çevrimdışı izlemek için içerikleri indirin.',
        class: ['display-5', 'fw-bold', 'mt-5'],
        style: {}
      },
      {
        elemName: 'h4',
        name: 'En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek bir şeyleriniz olsun.',
        class: ['mt-3'],
        style: {}
      }
    ])

    const imgArr2 = ref<ImageType[]>([
      {
        imgSrc: 'assets/images/mobile.jpg',
        class: ['w-100', 'position-relative'],
        style: { zIndex: '999' }
      }
    ])

    const infoArr2 = ref<InfoCardType[]>([
      {
        elemName: 'img',
        columnClass: ['col-lg-6', 'position-relative'],
        columnStyle: { maxWidth: '600px' },
        imgArr: imgArr2.value,
        hArr: [],
        videoObj: {
          src: 'assets/videos/videotv.m4v',
          class: ['w-75', 'position-absolute'],
          style: { transform: 'translate(-113%,30%)' }
        }
      },
      {
        elemName: 'h',
        columnClass: ['col-lg-6', 'text-lg-start', 'text-center', 'text-white'],
        columnStyle: { maxWidth: '600px' },
        imgArr: [],
        hArr: hArr2.value,
        videoObj: {
          src: '',
          class: [],
          style: {}
        }
      }
    ])

    const hArr3 = ref<HType[]>([
      {
        elemName: 'h1',
        name: 'İstediğiniz her yerde izleyin.',
        class: ['display-5', 'fw-bold', 'mt-5'],
        style: {}
      },
      {
        elemName: 'h4',
        name: 'Ekstra ücret ödemeden telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve dizi izleyin.',
        class: ['mt-3'],
        style: {}
      }
    ])

    const imgArr3 = ref<ImageType[]>([
      {
        imgSrc: 'assets/images/devicepile.png',
        class: ['position-relative'],
        style: { zIndex: '999', width: '110%' }
      }
    ])

    const infoArr3 = ref<InfoCardType[]>([
      {
        elemName: 'h',
        columnClass: ['offset-lg-1', 'col-lg-5', 'text-lg-start', 'text-center', 'text-white'],
        columnStyle: { maxWidth: '600px' },
        imgArr: [],
        hArr: hArr3.value,
        videoObj: {
          src: '',
          class: [],
          style: {}
        }
      },
      {
        elemName: 'img',
        columnClass: ['col-lg-6', 'position-relative'],
        columnStyle: { maxWidth: '600px' },
        imgArr: imgArr3.value,
        hArr: [],
        videoObj: {
          src: 'assets/videos/videodevices.m4v',
          class: ['position-absolute'],
          style: {
            transform: 'translate(31%,-196%)',
            width: '65%'
          }
        }
      }
    ])

    const hArr4 = ref<HType[]>([
      {
        elemName: 'h1',
        name: 'Çocuklarınız için profiller oluşturun.',
        class: ['display-5', 'fw-bold', 'mt-5'],
        style: {}
      },
      {
        elemName: 'h4',
        name: 'Üyeliğinize dâhil olan bu ücretsiz deneyim sayesinde çocuklarınız, sadece onlara özel bir alanda en sevdikleri karakterlerle maceralara atılabilir.',
        class: ['mt-3'],
        style: {}
      }
    ])

    const imgArr4 = ref<ImageType[]>([
      {
        imgSrc: 'assets/images/sectionpage.png',
        class: ['w-100', 'position-relative'],
        style: { zIndex: '999' }
      }
    ])

    const infoArr4 = ref<InfoCardType[]>([
      {
        elemName: 'img',
        columnClass: ['offset-lg-1', 'col-lg-5', 'position-relative'],
        columnStyle: { maxWidth: '600px' },
        imgArr: imgArr4.value,
        hArr: [],
        videoObj: {
          src: '',
          class: [],
          style: {}
        }
      },
      {
        elemName: 'h',
        columnClass: ['col-lg-6', 'text-lg-start', 'text-center', 'text-white'],
        columnStyle: { maxWidth: '600px' },
        imgArr: [],
        hArr: hArr4.value,
        videoObj: {
          src: '',
          class: [],
          style: {}
        }
      }
    ])

    return {
      upperCss,
      middleCss,
      lowerCss,
      mainSectionCss,
      infoSectionCss,
      questionSectionCss,
      footerCss,
      infoArr,
      infoArr2,
      infoArr3,
      infoArr4
    }
  },
  components: {
    Upper,
    Middle,
    Lower,
    Navbar,
    MainSection,
    InfoSection,
    QuestionSection,
    Footer
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
* {
  font-family: 'Montserrat', sans-serif;
}

.wrapper {
  min-width: 515px;
}

.anchor {
  text-decoration: none;
}

.anchor:hover {
  text-decoration: underline;
}
</style>
