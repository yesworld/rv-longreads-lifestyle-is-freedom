<template lang="pug">
  v-layout(wrap row justify-center align-center)
    v-flex.text-center(xs2 sm3, v-for="(partner, i) in partners", :key="i")
      img.logo(:src="partner" width=150)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Partners extends Vue {
  public partners = [
    require('@/assets/img/partners/logo1-min.jpg'),
    require('@/assets/img/partners/logo2-min.jpg'),
    require('@/assets/img/partners/logo3-min.jpg')
  ]
}
</script>

<style lang="scss">
.box-partners {
  .layout > .flex {
    box-shadow: -20px 0px 0 -17px #fff, 0px -20px 0 -17px #fff,
      20px 0px 0 -17px #fff, 0px 20px 0 -17px #fff, 0 0 0 1px #ccc;
  }
}
</style>
