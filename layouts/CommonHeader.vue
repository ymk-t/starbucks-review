<template>
  <div>
    <CommonHeader />
    <nuxt />
  </div>
</template>

<script type="text/javascript">
import CommonHeader from '~/components/TopHeaderWrap.vue'

export default {
  name: 'CommonHeader',
  components: {
    CommonHeader
  }
}
</script>
