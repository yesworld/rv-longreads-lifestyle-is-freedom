<template lang="pug">
  v-app
    div.grey--text.text--darken-3
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
.v-application--wrap {
  background: #fff !important;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 100;

  h1, h2, h3, h4 {
    font-family: 'Roboto Slab', sans-serif !important;
    font-weight: bold !important;
  }

  h1 {
    font-size: 3.75rem;
    line-height: 3.75rem
  }
  h2 {
    padding-bottom: 25px;
    font-size: 45px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: normal;
    text-align: center;
    position: relative;
  }
  h5 {
    font-weight: 100;
  }

  .v-btn.elevation-6{
    box-shadow: 10px 15px 30px 5px rgba(0, 182, 255, 0.2), 0px 6px 10px 0px rgba(0, 183, 255, 0.14), 0px 1px 18px 0px rgba(0, 183, 255, 0.12) !important;
  }
}
.text-underline {
  text-decoration: underline;
}
</style>
