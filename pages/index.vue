<template lang="pug">
v-content
  // 1 section
  TheJumbotron
    div.text-right
      v-btn(rounded dark) Фотоконкурс
    h1.text-right.mb-4 Образ жизни
      br
      span — свобода
    p.subheading.text-right.mb-5 Масштабная акция, совместно организованная арт-галереей городского коттеджного посёлка «Примавера», интернет-газетой  «Реальное время» и СОЮЗОМ ФОТОГРАФОВ РЕСПУБЛИКИ ТАТАРСТАН
    div.text-right
      v-btn.primary--text.elevation-6(rounded) Хочу участвовать

  // 2 section: About project
  About(:title="`О проекте`")

  // 3 section: Nominees
  Nominees

  // 4 section: Experts
  Slides

  // 5 section: Galleries

  // 6 section: Partners
  Partners
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Slides from '~/components/TheMainPage/Slides.vue'
import Nominees from '~/components/TheMainPage/Nominees.vue'
import About from '~/components/TheMainPage/Aboute.vue'
import Partners from '~/components/TheMainPage/Partners.vue'
import TheJumbotron from '~/components/TheJumbotron.vue'

@Component({
  components: {
    Slides,
    Nominees,
    About,
    Partners,
    TheJumbotron
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss"></style>
