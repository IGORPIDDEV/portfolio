<template>
  <v-app-bar class="header" height="80" color="primary" flat>
    <v-container class="pl-2 fill-height">
      <v-app-bar-title class="header__title text-no-wrap font-weight-bold"> Igor P</v-app-bar-title>
      <nav-menu />
      <v-spacer />
      <social-links v-if="!isMobile" />
      <v-app-bar-nav-icon
        class="header__nav-icon d-flex d-md-none"
        icon="mdi-menu-open"
        @click.stop="toggleMobileDrawer()"
      />
    </v-container>
  </v-app-bar>
  <v-navigation-drawer v-model="store.mobileDrawer" location="left" temporary>
    <list-menu />
    <v-divider class="my-2" />
    <social-links v-if="isMobile" />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { useNavigationStore } from '@/stores/navigation'
import listMenu from './listMenu.vue'
import navMenu from './navMenu.vue'
import socialLinks from './socialLinks.vue'

export default defineComponent({
  name: 'AppHeader',
  components: { listMenu, navMenu, socialLinks },
  setup() {
    const store = useNavigationStore()
    const { mobile } = useDisplay()
    const isMobile = computed(() => {
      return mobile.value
    })
    const toggleMobileDrawer = () => {
      store.mobileDrawer = !store.mobileDrawer
    }
    watch(
      () => mobile.value,
      (mobileScreen) => {
        if (!mobileScreen) store.mobileDrawer = false
      }
    )
    return {
      store,
      isMobile,
      toggleMobileDrawer
    }
  }
})
</script>
<style lang="scss">
.header__title {
  max-width: 80px;
}
</style>
