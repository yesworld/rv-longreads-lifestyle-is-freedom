<template lang="pug">
  v-navigation-drawer(v-model="collapsed" fixed clipped app disable-resize-watcher)
    v-list(dense)
      template(v-for="(item, index) in itemsMenu")
        //if there is a Submenu, then generate a button with a drop-down menu
        v-list-group(v-if="item.submenu.length" no-action)
          v-list-tile(:key="index", slot="activator", ripple)
            v-list-tile-content
              v-list-tile-title {{ item.text }}
          v-list-tile(v-for="(subItem, index2) in item.submenu", :key="index + index2", :to="item.url + '/' + subItem", ripple)
            v-list-tile-content
              v-list-tile-title {{ subItem }}
        //if there is no Submenu, then generate a simple button
        v-list-tile(v-else, :key="index", :to="item.url" flat ripple :disabled="!item.active")
          v-list-tile-content
            v-list-tile-title {{ item.text }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import dataMenu, { MenuItem } from '@/data/menu'

@Component({})
export default class MenuLeft extends Vue {
  @Prop({ required: true })
  public value!: boolean

  public itemsMenu: MenuItem[] = dataMenu

  get collapsed(): boolean {
    return this.value
  }

  set collapsed(isCollapsed: boolean) {
    this.$emit('input', isCollapsed)
  }
}
</script>

<style lang="scss"></style>
