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
    v-layout(row wrap align-center)
      v-flex(xs6)
        img.v-content__wrap(:src="aboutO")
      v-flex.pa-4(xs6)
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
        v-btn.download(flat color="primary")
          img(:src="iconPdfFile" width=50)
        p.mb-0.pt-2.text-underline Положение фотоконкурса
        p.text-underline «Образ жизни — свобода» (350 kb)

  // 3 section: Nominees
  section.box-nominees
    v-layout(row justify-center align-center)
      v-flex
        v-parallax(dark :src="bg2" height="600")
          v-container(grid-list-xl)
            h2.display-2.text-xs-center Номинации
            v-layout(wrap row justify-center align-center)
              v-flex.text-xs-center(xs2 sm4, v-for="(category, i) in categories", :key="i")
                img.logo(:src="category.logo" width=150)
                h4.text-uppercase {{category.title}}
                h5(v-if="category.prise") {{category.prise}}




  // TEST
  v-container.box-about(grid-list-xl)
    h2.display-2.text-xs-center О проекте
    v-layout(row wrap align-center)
      v-flex(xs6)
        img.v-content__wrap(:src="aboutO")
      v-flex.pa-4(xs6)
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
        v-btn.download(flat color="primary")
          img(:src="iconPdfFile" width=50)
        p.mb-0.pt-2.text-underline Положение фотоконкурса
        p.text-underline «Образ жизни — свобода» (350 kb)
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
  public bg2: string = require('@/assets/img/bg2.jpg')
  public slide1: string = require('@/assets/img/top-slide01.jpg')
  public frame: string = require('@/assets/img/frame-for-top-slide.png')
  public aboutO: string = require('@/assets/img/about-O.jpg')
  public iconPdfFile: string = require('@/assets/img/ico-pdf-file.svg')
  public categories = [
    {
      logo: require('@/assets/img/categories/01.svg'),
      title: 'Свобода взгляда'
    },
    {
      logo: require('@/assets/img/categories/02.svg'),
      title: 'Свобода выбора'
    },
    {
      logo: require('@/assets/img/categories/03.svg'),
      title: 'Свобода движения'
    },
    {
      logo: require('@/assets/img/categories/04.svg'),
      title: 'Свобода образа'
    },
    {
      logo: require('@/assets/img/categories/05.svg'),
      title: 'Свобода творчества'
    },
    {
      logo: require('@/assets/img/categories/06.svg'),
      title: 'Свобода мысли',
      prise: 'специальный приз радио «Эхо Москвы»'
    },
    {
      logo: require('@/assets/img/categories/07.svg'),
      title: 'Свобода реального времени',
      prise: 'специальный приз интернет-газеты «Реальное время»'
    }
  ]
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
.box-about {
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
}
.box-nominees {
  h5 {
    opacity: 0.4;
  }
}
</style>
