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
    <nav-menu :links="links" :goTo="goTo" :activeLink="activeLink" />
    <v-spacer />
    <nav-menu :links="socialLinks" :goTo="goTo" :activeLink="activeLink" />
  </v-app-bar>
  <v-navigation-drawer v-model="mobileDrawer" location="left" temporary>
    <list-menu :links="links" :goTo="goTo" :activeLink="activeLink" />
    <v-divider class="my-2" />
    <list-menu :links="socialLinks" :goTo="goTo" :activeLink="activeLink" />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type LinkInterface from '@/types/Link'
import listMenu from './listMenu.vue'
import navMenu from './navMenu.vue'

export default defineComponent({
  name: 'AppHeader',
  components: { listMenu, navMenu },
  setup() {
    const mobileDrawer = ref<boolean>(false)
    const activeLink = ref<string>('')

    const links = reactive<LinkInterface[]>([
      {
        title: 'About',
        src: 'about',
        icon: 'mdi-chat-question-outline',
        type: 'default'
      },
      {
        title: 'Skills',
        src: 'skills',
        icon: 'mdi-application-braces-outline',
        type: 'default'
      },
      {
        title: 'Projects',
        src: 'projects',
        icon: 'mdi-devices',
        type: 'default'
      },
      {
        title: 'Contacts',
        src: 'contacts',
        icon: 'mdi-contacts',
        type: 'default'
      }
    ])

    const socialLinks = reactive<LinkInterface[]>([
      {
        title: 'Linkedin',
        src: 'linkedin',
        icon: 'mdi-linkedin',
        type: 'social'
      },
      {
        title: 'Gmail',
        src: 'gmail',
        icon: 'mdi-gmail',
        type: 'social'
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
<style lang="scss"></style>
