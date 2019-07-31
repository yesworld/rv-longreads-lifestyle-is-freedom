<template lang="pug">
v-content
  section.wrap-page-contact
    TheJumbotron
      h1.display-3.text-right.mb-4 Контакты
      v-list.transparent(two-line)
        v-list-item(v-for="item in contacts" :key="item.title")
          v-list-item-avatar(color='primary')
            v-icon.elevation-4(dark v-text="item.icon")
          v-list-item-content
            v-list-item-title {{item.title}}
            v-list-item-subtitle {{item.subtitle}}

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TheJumbotron from '~/components/TheJumbotron.vue'
import ContactsInfo from '@/data/contacts'

@Component({
  components: {
    TheJumbotron
  }
})
export default class Contacts extends Vue {
  public contacts = ContactsInfo
}
</script>

<style lang="scss">
.wrap-page-contact {
  .v-list {
    width: 310px;
    float: right;
  }
}
</style>
