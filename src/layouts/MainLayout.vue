<template>
  <v-app>
    <app-header />
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/common/Header.vue';
import AppFooter from '@/components/common/Footer.vue';
export default defineComponent({
  name: 'MainLayout',
  components: {
    AppHeader,
    AppFooter
  }
})

</script>