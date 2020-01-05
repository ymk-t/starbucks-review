<template>
  <div>
    <TopHeaderWrap />
    <nuxt />
    <Footer />
  </div>
</template>

<script type="text/javascript">
import TopHeaderWrap from '~/components/TopHeaderWrap.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'ForTopPage',
  components: {
    TopHeaderWrap,
    Footer
  }
}
</script>
