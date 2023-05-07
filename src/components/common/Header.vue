<template>
  <v-app-bar class="header" height="80" color="primary" flat>
    <v-app-bar-nav-icon
      @click.stop="drawer = !drawer"
      icon="mdi-menu"
      class="d-flex d-md-none"
    ></v-app-bar-nav-icon>
    <v-app-bar-title>Portfolio</v-app-bar-title>
    <v-toolbar-items>
      <nav class="header__nav justify-center d-none d-md-flex">
        <ul class="header__list d-flex">
          <li
            v-for="(link, index) in links"
            :key="index"
            class="header__item pa-4 d-flex align-center"
          >
            <a class="header__link text-uppercase font-weight-bold">
              {{ link.title }}
            </a>
          </li>
        </ul>
      </nav>
    </v-toolbar-items>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="top" temporary>
    <v-list :items="links" item-value="src"></v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: 'AppHeader',
  setup() {
    interface Link {
      title: string
      src: string
      active: boolean
    }

    const drawer = ref<boolean>(false)

    const links = reactive<Link[]>([
      {
        title: 'about',
        src: 'about',
        active: true
      },
      {
        title: 'skills',
        src: 'skills',
        active: false
      },
      {
        title: 'projects',
        src: 'projects',
        active: false
      },
      {
        title: 'contacts',
        src: 'contacts',
        active: false
      }
    ])

    return {
      links,
      drawer
    }
  }
})
</script>
<style lang="scss">
.header__list {
  list-style: none;
}
</style>
