<template lang="pug">
v-content
  // 1 section
  section
    v-layout(row justify-center align-center)
      v-flex
        v-parallax(dark :src="bg1" height="650")
          v-container(grid-list-xl)
            v-layout(row justify-center)
              v-flex.box-title(xs6)
                img.logo(:src="logo" width=200)
                div.text-xs-right
                  v-btn(round disabled) Фотоконкурс
                h1.display-3.text-xs-right.mb-4 Образ жизни
                  br
                  span — свобода
                h4.subheading.text-xs-right.mb-5 Масштабная акция,  совместно организованная арт-галереей городского коттеджного посёлка «Примавера», интернет-газетой  «Реальное время» и СОЮЗОМ ФОТОГРАФОВ РЕСПУБЛИКИ ТАТАРСТАН
                div.text-xs-right
                  v-btn.primary--text(round) Хочу участвовать
              v-flex.box-slides(xs6)
                img.slide(:src="slide1")
                img.frame(:src="frame")

  // 2 section: About project
  v-container.box-about(grid-list-xl)
    h2.display-2.text-xs-center О проекте
    About

  // 3 section: Nominees
  section.box-nominees
    Nominees

  // 4 section: expert
  v-container.box-expert(grid-list-xl)
    h2.display-2.text-xs-center Экспертная комиссия
    v-layout(row wrap align-center)
      v-flex
        Slides


  // TEST
  v-container.box-about(grid-list-xl)
    h2.display-2.text-xs-center Lorem ipsum
    Aboute

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Slides from '~/components/TheMainPage/Slides.vue'
import Nominees from '~/components/TheMainPage/Nominees.vue'
import About from '~/components/TheMainPage/Aboute.vue'

@Component({
  components: {
    Slides,
    Nominees,
    About
  }
})
export default class Index extends Vue {
  public logo: string = require('@/assets/img/logo.svg')
  public bg1: string = require('@/assets/img/bg1.jpg')
  public slide1: string = require('@/assets/img/top-slide01.jpg')
  public frame: string = require('@/assets/img/frame-for-top-slide.png')
}
</script>

<style lang="scss">
.v-parallax__content {
  color: inherit;
}
.box-title {
  .logo {
    margin-bottom: -10px;
  }
  button.blue--text {
    background-color: #fff !important;
  }
}

.box-slides {
  position: relative;
  img {
    position: absolute;

    &.frame {
      z-index: 100;
    }
    &.slide {
      z-index: 0;
      border-radius: 150px;
      top: 100px;
      left: 125px;
    }
  }
}
</style>
