<template lang="pug">
  v-app.grey--text.text--darken-3
    MenuLeft(v-model="collapsed")
    MenuTop(v-model="collapsed")
    nuxt
    TheFooter
    BackToTop
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    MenuLeft: () => import('@/components/Menu/Left.vue'),
    MenuTop: () => import('@/components/Menu/Top.vue'),
    BackToTop: () => import('@/components/Menu/BackToTop.vue'),
    TheFooter: () => import('@/components/TheFooter.vue')
  }
})
export default class mainLayout extends Vue {
  public collapsed = false
}
</script>
<style lang="scss">
h2 {
  padding-bottom: 25px;
  font-size: 45px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: normal;
  font-family: 'Roboto', sans-serif;
  text-align: center;
}
.theme--light.application {
  background: #fff !important;
}
.text-underline {
  text-decoration: underline;
}
</style>
