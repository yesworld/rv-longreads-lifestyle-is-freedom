<template lang="pug">
  v-app-bar(clipped-left fixed app dense)
    v-spacer
    v-toolbar-items.hidden-sm-and-down
      template(v-for="(item, index) in itemsMenu")
        //if there is a Submenu, then generate a button with a drop-down menu
        v-menu(
          v-if="item.submenu.length"
          transition="slide-y-transition"
          offset-y
          open-on-hover
          :key="index"
          )
          template(v-slot:activator="{ on }")
            v-btn(text v-on="on")
              | {{ item.text }}
              v-icon arrow_drop_down
          v-list(dense)
            v-list-item(v-for="subItem, index2 in item.submenu", :key="index + index2", :to="item.url + '/' + subItem", ripple)
              v-list-item-title {{ subItem }}

        //if there is no Submenu, then generate a simple button
        v-btn(v-else text :to="item.url", :key="index" :disabled="!item.active")
          span {{ item.text }}

    v-app-bar-nav-icon.hidden-md-and-up(@click="$emit('input', !value)")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import dataMenu, { MenuItem } from '@/data/menu'

@Component({})
export default class MenuTop extends Vue {
  @Prop({ required: true })
  value!: boolean

  public itemsMenu: MenuItem[] = dataMenu
}
</script>

<style lang="scss"></style>
