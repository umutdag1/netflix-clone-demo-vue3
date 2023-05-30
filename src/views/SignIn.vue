<template>
  <div class="wrapper overflow-hidden">
    <Upper :css="upperCss">
      <Navbar></Navbar>
      <Middle :css="middleCss">
        <SignInCard :css="signInCardCss"></SignInCard>
      </Middle>
      <Lower :css="lowerCss">
        <Footer :css="footerCss"></Footer>
      </Lower>
    </Upper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Upper from '@/components/pagesection/Upper.vue'
import Middle from '@/components/pagesection/Middle.vue'
import Lower from '@/components/pagesection/Lower.vue'
import Navbar from '@/components/master/Navbar.vue'
import Footer from '@/components/master/Footer.vue'
import SignInCard from '@/components/mixed/card/SignInCard.vue'
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
        minHeight: '100vh',
        zIndex: '-1'
      }
    })

    const middleCss = ref<ObjectCssType>({
      class: ['d-flex', 'justify-content-center', 'align-items-center', 'flex-column'],
      style: { marginBottom: '100px' }
    })

    const lowerCss = ref<ObjectCssType>({
      class: ['w-100', 'pt-5', 'pb-3'],
      style: {
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))'
      }
    })

    const signInCardCss = ref<ObjectCssType>({
      class: [],
      style: {
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
        width: '500px',
        paddingLeft: '80px',
        paddingTop: '70px',
        paddingBottom: '140px'
      }
    })

    const footerCss = ref<ObjectCssType>({
      class: ['container', 'py-3'],
      style: { maxWidth: '1100px' }
    })

    return { upperCss, lowerCss, middleCss, signInCardCss, footerCss }
  },
  components: {
    Upper,
    Middle,
    Lower,
    Navbar,
    SignInCard,
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
