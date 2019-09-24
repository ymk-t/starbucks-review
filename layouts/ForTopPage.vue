<template>
  <div>
    <HeaderWrap />
    <nuxt />
  </div>
</template>

<script type="text/javascript">
import HeaderWrap from '~/components/HeaderWrap.vue'

export default {
  name: 'ForTopPage',
  components: {
    HeaderWrap
  }
}
</script>
