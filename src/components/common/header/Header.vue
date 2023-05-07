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
          <v-hover v-slot="{ isHovering, props }">
            <div class="d-flex flex-column">
              <a
                class="header__link d-flex font-weight-bold"
                :class="{ 'text-secondary animate-hover': link.title === activeLink || isHovering }"
                @click="goTo(link.title)"
                v-bind="props"
              >
                <v-icon class="header__link-icon">{{ link.icon }}</v-icon>
                <div class="header__link-text">{{ link.title }}</div>
              </a>
              <div class="header__item-border relative">
                <v-expand-x-transition>
                  <div v-if="isHovering" class="header__item-border-animation"></div>
                </v-expand-x-transition>
              </div>
            </div>
          </v-hover>
        </li>
      </ul>
    </v-toolbar-items>
    <v-spacer />
    <v-toolbar-items class="header__nav d-none d-md-flex">
      <ul class="header__list d-flex">
        <li
          v-for="(link, index) in socialLinks"
          :key="index"
          class="header__item pa-4 d-flex align-center"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div class="d-flex flex-column">
              <a
                class="header__link d-flex font-weight-bold"
                :class="{ 'text-secondary animate-hover': link.title === activeLink || isHovering }"
                @click="goTo(link.title)"
                v-bind="props"
              >
                <v-icon class="header__link-icon">{{ link.icon }}</v-icon>
              </a>
            </div>
          </v-hover>
        </li>
      </ul>
    </v-toolbar-items>
  </v-app-bar>
  <v-navigation-drawer v-model="mobileDrawer" location="left" temporary>
    <list-menu :links="links" :goTo="goTo" />
    <v-divider class="my-2" />
    <list-menu :links="socialLinks" :goTo="goTo" />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type LinkInterface from '@/types/Link'
import listMenu from './listMenu.vue'

export default defineComponent({
  name: 'AppHeader',
  components: { listMenu },
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
<style lang="scss">
.header__list {
  list-style: none;
}
.header__link {
  cursor: pointer;
  position: relative;
  gap: 5px;
}
.header__item-border-animation {
  position: absolute;
  height: 5px;
  width: 100%;
  border-bottom: 3px solid $pdark;
}
</style>
