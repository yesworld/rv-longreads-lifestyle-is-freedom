<template lang="pug">
  v-navigation-drawer(v-model="collapsed" fixed clipped app disable-resize-watcher)
    v-list(dense)
      template(v-for="(item, index) in itemsMenu")
        //if there is a Submenu, then generate a button with a drop-down menu
        v-list-group(v-if="item.submenu.length" no-action, :key="index")
          template(v-slot:activator)
            v-list-item-content
              v-list-item-title(ripple) {{ item.text }}
          v-list-item(
            v-for="(subItem, index2) in item.submenu",
            :key="index + index2", :to="item.url + '/' + subItem"
            ripple
            )
            v-list-item-title {{ subItem }}

        //if there is no Submenu, then generate a simple button
        v-list-item(v-else, :key="index", :to="item.url" flat ripple :disabled="!item.active")
          v-list-item-title {{ item.text }}
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
