<template>
  <Hero />
  <About />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/hero/Hero.vue'
import About from '@/components/pages/home/About.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    Hero,
    About
  }
})
</script>
