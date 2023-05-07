<template>
  <v-app-bar class="header" height="80" color="primary" flat>
    <template v-slot:append>
      <v-app-bar-nav-icon
        class="header__nav-icon d-flex d-md-none"
        icon="mdi-menu-open"
        @click.stop="store.mobileDrawer = !store.mobileDrawer"
      />
    </template>
    <v-app-bar-title class="header__title font-weight-bold"> Igor P. </v-app-bar-title>
    <nav-menu :links="store.links" />
    <v-spacer />
    <nav-menu :links="store.socialLinks" />
  </v-app-bar>
  <v-navigation-drawer v-model="store.mobileDrawer" location="left" temporary>
    <list-menu :links="store.links" />
    <v-divider class="my-2" />
    <list-menu :links="store.socialLinks" />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNavigationStore } from '@/stores/navigation'
import listMenu from './listMenu.vue'
import navMenu from './navMenu.vue'

export default defineComponent({
  name: 'AppHeader',
  components: { listMenu, navMenu },
  setup() {
    const store = useNavigationStore()
    return {
      store
    }
  }
})
</script>
<style lang="scss"></style>
