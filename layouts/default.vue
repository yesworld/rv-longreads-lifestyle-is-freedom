<template lang="pug">
  v-app
    MenuLeft(v-model="collapsed")
    MenuTop(v-model="collapsed")
    nuxt
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    MenuLeft: () => import('@/components/Menu/Left.vue'),
    MenuTop: () => import('@/components/Menu/Top.vue')
  }
})
export default class mainLayout extends Vue {
  public collapsed = false
}
</script>
