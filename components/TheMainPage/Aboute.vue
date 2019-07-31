<template lang="pug">
  v-layout(row wrap align-center)
    v-flex(xs12 sm6)
      img.v-content__wrap(:src="aboutO")
    v-flex.pa-4(xs12 sm6)
      p
        b Фотоконкурс «Образ жизни — свобода»
        |  проводится в 2019 впервые, предполагает большой общественный резонанс и должен стал ежегодным, а выставки работ его финалистов и победителей будут широко экспонироваться по всей республике.
      p Работы, поступающие на Конкурс, оценивает Жюри, в состав которого входят общественные деятели, известные фотографы и представители мира искусства.
      p Первичный отбор фотографий проводит Экспертный совет, к работе которого привлечены авторитетные фотографы и руководители крупнейших фотослужб республики.
      p
        b Этапы проведения Конкурса
        br
        |  Прием работ на Конкурс осуществляется с
        span.primary--text  1 августа по 15 декабря 2019 г.
        br
        |  Отборочный этап:
        span.primary--text  с 15 июня по 01 ноября 2019 г.
        br
        |  О дате проведения Финала будет сообщено дополнительно.

      hr.mb-3
      v-btn.download(text color="primary")
        img(:src="iconPdfFile" width=50)
      p.mb-0.pt-2.text-underline Положение фотоконкурса
      p.text-underline «Образ жизни — свобода» (350 kb)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class About extends Vue {
  public aboutO: string = require('@/assets/img/about-O.jpg')
  public iconPdfFile: string = require('@/assets/img/ico-pdf-file.svg')
}
</script>

<style lang="scss">
.box-about {
  position: relative;
  hr {
    width: 15%;
    border: 3px solid #7adcff;
    border-radius: 3px;
  }

  button.download {
    display: block;
    min-width: 50px;
    float: left;
    height: 70px;
    margin: 0 15px;
    padding: 0px;
    width: 60px;
  }

  & > .layout {
    z-index: 1;
    position: relative;
  }
  &:before {
    right: 190px;
    position: absolute;
    content: '';
    display: block;
    width: 150px;
    height: 250px;
    opacity: 0.5;
    top: -60px;
    background: repeating-linear-gradient(
      -45deg,
      #7adcff,
      #7adcff 3px,
      rgba(255, 255, 255, 0) 0px,
      rgba(255, 255, 255, 0) 10px
    );
  }
}
</style>
