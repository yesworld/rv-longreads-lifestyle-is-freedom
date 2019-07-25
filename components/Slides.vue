<template lang="pug">
  no-ssr
    slick-slide(
    ref="slick"
    :options="slickOptions"
    @afterChange="handleAfterChange"
    @beforeChange="handleBeforeChange"
    @breakpoint="handleBreakpoint"
    @destroy="handleDestroy"
    @edge="handleEdge"
    @init="handleInit"
    @reInit="handleReInit"
    @setPosition="handleSetPosition"
    @swipe="handleSwipe"
    @lazyLoaded="handleLazyLoaded"
    @lazyLoadError="handleLazeLoadError")
      div.text-xs-center(v-for="(slide, i) in slides", :key="i")
        div.wrap-img
          img(:src="slide.img")
        h3.display-1.py-2 {{slide.name}}
        hr
        h5 {{slide.position}}
      //div
      //  img(src="http://lorempixel.com/263/318/cats/3")

</template>

<script>
import '~/node_modules/slick-carousel/slick/slick.scss'
import '~/node_modules/slick-carousel/slick/slick-theme.scss'

export default {
  data() {
    return {
      slides: [
        {
          img: require('@/assets/img/experts/001-min.jpg'),
          name: 'Кострикин П.Н.',
          position:
            'генеральный директор компании - застройщика городского коттеджного посёлка «Примавера»'
        },
        {
          img: require('@/assets/img/experts/002-min.jpg'),
          name: 'Козлов Г.А.',
          position: 'Председатель правления Союза фотографов РТ.'
        },
        {
          img: require('@/assets/img/experts/003-min.jpg'),
          name: 'Абязов Р.Ю.',
          position:
            'художественный руководитель, главный дирижер Казанского камерного оркестра La Primavera, заслуженный деятель искусств РФ и РТ, народный артист РТ.'
        },
        {
          img: require('@/assets/img/experts/004-min.jpg'),
          name: 'Губаев Ф.С.',
          position:
            'заслуженный деятель искусств РТ, Член Союза фотохудожников России и Московского Союза художников-графиков.'
        },
        {
          img: require('@/assets/img/experts/005-min.jpg'),
          name: 'Горюнова Н. И.',
          position: 'главный редактор радио «Эхо Москвы»'
        },
        {
          img: require('@/assets/img/experts/006-min.jpg'),
          name: 'Балашов Ю.А.',
          position: 'главный редактор журнала «Казань»'
        },
        {
          img: require('@/assets/img/experts/007-min.jpg'),
          name: 'Абзалов Азат Искандарович',
          position: 'Начальник Управления культуры'
        }
      ],
      slickOptions: {
        arrows: true,
        centerPadding: '60px',
        slidesToShow: 4,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      }
    }
  },

  // All slick methods can be used too, example here
  methods: {
    next() {
      this.$refs.slick.next()
    },

    prev() {
      this.$refs.slick.prev()
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    },

    // Events listeners
    handleAfterChange(event, slick, currentSlide) {
      console.log('handleAfterChange', event, slick, currentSlide)
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      console.log('handleBeforeChange', event, slick, currentSlide, nextSlide)
    },
    handleBreakpoint(event, slick, breakpoint) {
      console.log('handleBreakpoint', event, slick, breakpoint)
    },
    handleDestroy(event, slick) {
      console.log('handleDestroy', event, slick)
    },
    handleEdge(event, slick, direction) {
      console.log('handleEdge', event, slick, direction)
    },
    handleInit(event, slick) {
      console.log('handleInit', event, slick)
    },
    handleReInit(event, slick) {
      console.log('handleReInit', event, slick)
    },
    handleSetPosition(event, slick) {
      console.log('handleSetPosition', event, slick)
    },
    handleSwipe(event, slick, direction) {
      console.log('handleSwipe', event, slick, direction)
    },
    handleLazyLoaded(event, slick, image, imageSource) {
      console.log('handleLazyLoaded', event, slick, image, imageSource)
    },
    handleLazeLoadError(event, slick, image, imageSource) {
      console.log('handleLazeLoadError', event, slick, image, imageSource)
    }
  }
}
</script>

<style lang="scss">
.slick-slide {
  & > div {
    padding: 0 30px;
  }

  .wrap-img {
    position: relative;
    padding-top: 20px;
    /*#01B7FF*/

    &:before,
    &:after {
      position: absolute;
      content: '';
      display: block;
      width: 30%;
      height: 23%;
      background: repeating-linear-gradient(
        -45deg,
        #ccc,
        #ccc 3px,
        #fff 0px,
        #fff 10px
      );
    }

    &:before {
      left: -15px;
      top: 10px;
      z-index: 0;
    }

    &:after {
      bottom: 0;
      right: 0;
      z-index: 3;
      background: repeating-linear-gradient(
        -45deg,
        #fff,
        #fff 3px,
        rgba(255, 255, 255, 0) 0px,
        rgba(255, 255, 255, 0) 10px
      );
    }

    img {
      max-width: 100%;
      position: relative;
      z-index: 1;
    }
  }

  h3 {
    font-size: 24px;
    font-weight: 400;
  }

  hr {
    width: 30%;
    border: 2px solid #ccc;
    border-radius: 3px;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  &.slick-current {
    .wrap-img:before {
      background: repeating-linear-gradient(
        -45deg,
        #7adcff,
        #7adcff 3px,
        #fff 0px,
        #fff 10px
      );
    }
    img {
      outline: 1px solid white;
      outline-offset: -9px;
    }

    hr {
      border: 2px solid #7adcff;
    }
  }
}
</style>
