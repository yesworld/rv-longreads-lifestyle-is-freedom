<template lang="pug">
  v-toolbar(dense fixed clipped-left app flat)
    v-spacer
    v-toolbar-items.hidden-sm-and-down
      template(v-for="(item, index) in itemsMenu")
        //if there is a Submenu, then generate a button with a drop-down menu
        v-menu(v-if="item.submenu.length" offset-y open-on-hover, :key="index")
          v-btn(flat slot="activator" )
            span {{ item.text }}
            v-icon arrow_drop_down
          v-list(dense)
            v-list-tile.submenu-open(v-for="subItem, index2 in item.submenu", :key="index + index2", :to="item.url + '/' + subItem", ripple)
              v-list-tile-title {{ subItem }}
        //if there is no Submenu, then generate a simple button
        v-btn(v-else flat :to="item.url", :key="index" :disabled="!item.active")
          span {{ item.text }}

    v-toolbar-side-icon.hidden-md-and-up(@click.stop="isOpenNavigate = !isOpenNavigate")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import dataMenu, { MenuItem } from '@/data/menu'

@Component({})
export default class MenuTop extends Vue {
  public itemsMenu: MenuItem[] = dataMenu
  public isOpenNavigate = false
}
</script>

<style lang="scss"></style>
