<template lang="pug">
v-container.box-partners(grid-list-xl)
  h2 Партнеры
  v-layout(wrap row justify-center align-center)
    v-flex.text-center(xs6 sm3, v-for="(partner, i) in partners", :key="i")
      a(:href='partner.link' :rel="partner.nofollow ? 'nofollow noindex noopener' : false")
        img.v-content__wrap.logo(:src="partner.img" width=200)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Partners extends Vue {
  public partners = [
    {
      img: require('@/assets/img/partners/logo1-min.jpg'),
      link: '#',
      nofollow: true
    },
    {
      img: require('@/assets/img/partners/logo2-min.jpg'),
      link: 'https://realnoevremya.ru',
      nofollow: false
    },
    {
      img: require('@/assets/img/partners/logo3-min.jpg'),
      link: '#',
      nofollow: true
    }
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
