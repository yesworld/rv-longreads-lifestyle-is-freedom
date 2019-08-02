<template lang="pug">
  v-container.jumbotron.pa-0(fluid)
    v-layout
      v-flex
        v-parallax(dark :src="bg1" height="650")
          v-container(grid-list-xl)
            v-layout(row justify-center)
              v-flex.box-title(xs12 sm8 md6)
                img.logo(:src="logo" width=200)
                slot

              v-flex.hidden-xs-only.box-slides(sm4 md6)
                img.slide(:src="slide1")
                img.frame(:src="frame")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TheJumbotron extends Vue {
  public logo: string = require('@/assets/img/logo.svg')
  public bg1: string = require('@/assets/img/bg1.jpg')
  public slide1: string = require('@/assets/img/top-slide01.jpg')
  public frame: string = require('@/assets/img/frame-for-top-slide.png')
}
</script>

<style lang="scss">
.jumbotron {

  .v-parallax__content {
    color: inherit !important;
    margin-top: -70px !important;
  }
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
