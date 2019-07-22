<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12 sm8 md6)
      div.text-xs-center
        logo
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    logo: () => import('~/components/Logo.vue')
  }
})
export default class Index extends Vue {}
</script>
