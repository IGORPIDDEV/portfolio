<template>
  <main-layout>
    <router-view />
  </main-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    MainLayout,
    RouterView
  }
})
</script>
