<template>
  <v-app-bar class="header" height="80" color="primary" flat>
    <v-app-bar-nav-icon
      @click.stop="drawer = !drawer"
      icon="mdi-menu-open"
      class="header__nav-icon d-flex d-md-none"
    />
    <v-app-bar-title class="header__title"> My Portfolio </v-app-bar-title>
    <v-toolbar-items class="header__nav d-none d-md-flex">
      <ul class="header__list d-flex">
        <li
          v-for="(link, index) in links"
          :key="index"
          class="header__item pa-4 d-flex align-center"
        >
          <a
            class="header__link font-weight-bold"
            :class="{ 'text-secondary': link.title === activeLink }"
            @click="goTo(link.title)"
          >
            <v-icon class="header__icon">{{ link.icon }}</v-icon>
            {{ link.title }}
          </a>
        </li>
      </ul>
    </v-toolbar-items>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="top" temporary>
    <v-list>
      <v-list-item
        v-for="(link, index) in links"
        :key="index"
        :value="link.src"
        active-color="primary"
        @click="goTo(link.title, true)"
      >
        <template v-slot:prepend>
          <v-icon class="header__icon" :icon="link.icon"></v-icon>
        </template>

        <v-list-item-title class="header__item-title">{{ link.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type LinkInterface from '@/types/Link'

export default defineComponent({
  name: 'AppHeader',
  setup() {
    const drawer = ref<boolean>(false)
    const activeLink = ref<string>('')

    const links = reactive<LinkInterface[]>([
      {
        title: 'About',
        src: 'about',
        icon: 'mdi-chat-question-outline'
      },
      {
        title: 'Skills',
        src: 'skills',
        icon: 'mdi-application-braces-outline'
      },
      {
        title: 'Projects',
        src: 'projects',
        icon: 'mdi-devices'
      },
      {
        title: 'Contacts',
        src: 'contacts',
        icon: 'mdi-contacts'
      }
    ])

    function goTo(title: string, mobile: boolean = false) {
      activeLink.value = title
      if (mobile) drawer.value = false
    }

    return {
      links,
      drawer,
      activeLink,
      goTo
    }
  }
})
</script>
<style lang="scss">
.header__list {
  list-style: none;
}
.header__link {
  cursor: pointer;
}
</style>
