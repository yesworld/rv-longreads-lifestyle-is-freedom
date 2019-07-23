<template lang="pug">
v-content

  section
    v-layout(row justify-center align-center)
      v-flex

        v-parallax(dark :src="bg1" height="650")
          v-container.grey--text.text--darken-3(grid-list-xl)
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
                  v-btn.blue--text.text--lighten-2(round) Хочу участвовать
              v-flex.box-slides(xs6)
                img.slide(:src="slide1")
                img.frame(:src="frame")


  v-container
    v-layout(row wrap align-center)
      v-flex.py-5(xs5)
        img.v-content__wrap(src="https://vuetifyjs.com/themes/parallax-starter/assets/hero.jpeg")
      v-flex.pa-5(xs7)
        p Победителей определяет методика, разработанная интернет-газетой «Реальное время» с целью составления топ-ПФО по различным отраслям.
        p При составлении данного рейтинга отбираются те компании, которые зарегистрированы и действуют на территории ПФО.
        p Премия «Реальный рейтинг» вручается руководителям компаний, зарегистрированных на территории ПФО и действующих на текущий момент.
        p.mb-1 Интернет-газетой «Реальное время» методом экспертной оценки были определены финансовые параметры, а также для каждого из них весовая значимость.

  v-container(style="border-top: 1px solid red")
    v-layout(row wrap align-center)
      v-flex.py-5(xs5)
        img.v-content__wrap(src="https://vuetifyjs.com/themes/parallax-starter/assets/hero.jpeg")
      v-flex.pa-5(xs7)
        p Победителей определяет методика, разработанная интернет-газетой «Реальное время» с целью составления топ-ПФО по различным отраслям.
        p При составлении данного рейтинга отбираются те компании, которые зарегистрированы и действуют на территории ПФО.
        p Премия «Реальный рейтинг» вручается руководителям компаний, зарегистрированных на территории ПФО и действующих на текущий момент.
        p.mb-1 Интернет-газетой «Реальное время» методом экспертной оценки были определены финансовые параметры, а также для каждого из них весовая значимость.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    logo: () => import('~/components/Logo.vue')
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
