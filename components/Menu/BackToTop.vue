<template lang="pug">
transition(name="back-to-top-fade")
  v-btn.goToTop(icon color="primary", @click="$vuetify.goTo(0)", v-show="visible")
    v-icon arrow_upward
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class BackToTop extends Vue {
  @Prop({ type: [String, Number], default: 600 })
  public whenVisible

  public visible = false

  mounted() {
    window.addEventListener('scroll', this.visibleButton)
  }

  destroyed() {
    window.removeEventListener('scroll', this.visibleButton)
  }

  visibleButton() {
    this.visible = window.pageYOffset > this.whenVisible
  }
}
</script>

<style lang="scss">
.v-btn.goToTop {
  position: fixed !important;
  bottom: 10px;
  right: 10px;

  &.back-to-top-fade-enter-active,
  .back-to-top-fade-leave-active {
    transition: opacity 0.7s;
  }
  &.back-to-top-fade-enter,
  .back-to-top-fade-leave-to {
    opacity: 0;
  }
}
</style>
