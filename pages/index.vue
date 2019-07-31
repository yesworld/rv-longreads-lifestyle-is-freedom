<template lang="pug">
v-content
  // 1 section
  section
    TheJumbotron
      div.text-right
        v-btn(rounded disabled) Фотоконкурс
      h1.display-3.text-right.mb-4 Образ жизни
        br
        span — свобода
      h4.subheading.text-right.mb-5 Масштабная акция, совместно организованная арт-галереей городского коттеджного посёлка «Примавера», интернет-газетой  «Реальное время» и СОЮЗОМ ФОТОГРАФОВ РЕСПУБЛИКИ ТАТАРСТАН
      div.text-right
        v-btn.primary--text(rounded) Хочу участвовать

  // 2 section: About project
  v-container.box-about(grid-list-xl)
    h2 О проекте
    About

  // 3 section: Nominees
  section.box-nominees
    Nominees

  // 4 section: Experts
  v-container.box-expert(grid-list-xl)
    h2 Экспертная комиссия
    v-layout(row wrap align-center)
      v-flex
        Slides

  // 5 section: Galleries

  // 6 section: Partners
  v-container.box-partners(grid-list-xl)
    h2 Партнеры
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
