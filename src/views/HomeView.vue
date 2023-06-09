<template>
  <div class="homePage">
    <hero />
    <about />
    <skills />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/hero/Hero.vue'
import About from '@/components/pages/home/About.vue'
import Skills from '@/components/pages/home/Skills.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    Hero,
    About,
    Skills
  }
})
</script>
