<template lang="pug">
v-content
  section.wrap-page-contact
    TheJumbotron
      h1.display-3.text-xs-right.mb-4 Контакты
      v-list.transparent.pt-0
        v-list-tile
          v-list-tile-avatar(color='primary')
            v-icon.elevation-4(dark)
              | phone
          v-list-tile-title +7 (843) 222 90 80

        v-list-tile
          v-list-tile-avatar(color='primary')
            v-icon.elevation-4(dark)
              | location_on
          v-list-tile-title 420097, г. Казань, ул. Академическая, 2

        v-list-tile
          v-list-tile-avatar(color='primary')
            v-icon.elevation-4(dark)
              | email
          v-list-tile-title reklama@realnoevremya.ru

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TheJumbotron from '~/components/TheJumbotron.vue'

@Component({
  components: {
    TheJumbotron
  }
})
export default class Contacts extends Vue {}
</script>

<style lang="scss">
.wrap-page-contact {
  .v-list {
    width: 400px;
    float: right;
  }
}
</style>
