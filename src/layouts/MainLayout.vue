<template>
  <v-app>
    <app-header />
    <v-main>
      <slot />
    </v-main>
    <!-- <app-footer /> -->
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/common/header/Header.vue'
// import AppFooter from '@/components/common/footer/Footer.vue'
export default defineComponent({
  name: 'MainLayout',
  components: {
    AppHeader
    // AppFooter
  }
})
</script>
