<template>
  <v-app-bar class="header" height="80" color="primary" flat>
    <template v-slot:append>
      <v-app-bar-nav-icon
        class="header__nav-icon d-flex d-md-none"
        icon="mdi-menu-open"
        @click.stop="mobileDrawer = !mobileDrawer"
      />
    </template>
    <v-app-bar-title class="header__title font-weight-bold"> Igor P. </v-app-bar-title>
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
    <v-spacer />
    <v-toolbar-items class="header__nav d-none d-md-flex">
      <v-btn icon v-for="(link, index) in socialLinks" :key="index">
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
  <v-navigation-drawer v-model="mobileDrawer" location="top" temporary>
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
    const mobileDrawer = ref<boolean>(false)
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

    const socialLinks = reactive<LinkInterface[]>([
      {
        title: 'Linkedin',
        src: 'linkedin',
        icon: 'mdi-linkedin'
      },
      {
        title: 'Gmail',
        src: 'gmail',
        icon: 'mdi-gmail'
      }
    ])

    function goTo(title: string, mobile: boolean = false) {
      activeLink.value = title
      if (mobile) mobileDrawer.value = false
    }

    return {
      links,
      socialLinks,
      mobileDrawer,
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
