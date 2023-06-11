<template>
  <v-toolbar-items class="header__nav d-none d-md-flex align-center">
    <v-tabs
      class="header__nav__tabs"
      color="secondary"
      background-color="white"
      height="40"
      v-model="store.activeLink"
    >
      <v-tab
        v-for="(link, index) in store.links"
        :key="index"
        class="header__nav__tab px-1 mx-3"
        min-width="0"
        :ripple="false"
        rounded="20px"
      >
        {{ link.title }}
      </v-tab>
    </v-tabs>
  </v-toolbar-items>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNavigationStore } from '@/stores/navigation'

export default defineComponent({
  name: 'listMenu',
  setup() {
    const store = useNavigationStore()
    return {
      store
    }
  }
})
</script>

<style lang="scss">
.header__nav__tab {
  text-transform: none !important;
  font-size: 16px !important;
}
.header__nav__tab > .v-btn__overlay {
  opacity: 0 !important;
}
</style>
