<template>
  <div class="home" ref="homeViewRef">
    <hero />
    <about />
    <skills />
  </div>
</template>

<script lang="ts">
import { useNavigationStore } from '@/stores/navigation'
import { defineComponent, ref, watch } from 'vue'
import Hero from '@/components/hero/Hero.vue'
import About from '@/components/pages/home/About.vue'
import Skills from '@/components/pages/home/Skills.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    Hero,
    About,
    Skills
  },
  setup() {
    const store = useNavigationStore()
    const homeViewRef = ref<HTMLElement | null>(null)

    homeViewRef.value = store.homeView

    watch(homeViewRef, (newValue) => {
      store.homeView = newValue
    })

    return {
      homeViewRef
    }
  }
})
</script>
