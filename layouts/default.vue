<template lang="pug">
  v-app
    MenuTop
    v-content
      v-container
        nuxt
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    MenuTop: () => import('@/components/Menu/Top.vue')
  }
})
export default class mainLayout extends Vue {}
</script>
