<template lang="pug">
v-container(fluid).box-nominees
  v-layout(row justify-center align-center)
    v-flex.bg(:style="`background-image: url(${bg2})`")
      v-container(grid-list-xl)
        h2 Номинации
        v-layout(wrap row justify-center align-center)
          v-flex.text-center(xs6 sm4 md4 xl2, v-for="(category, i) in categories", :key="i")
            img.logo(:src="category.logo" width=150)
            h4.text-uppercase {{category.title}}
            h5(v-if="category.prise") {{category.prise}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Nominees extends Vue {
  public bg2: string = require('@/assets/img/bg2.jpg')

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
.box-nominees {
  h5 {
    opacity: 0.4;
  }
  .bg {
    background-size: cover;
  }
}
</style>
