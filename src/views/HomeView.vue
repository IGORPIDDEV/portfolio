<template>
  <div class="home" ref="homeViewRef">
    <hero />
    <about />
    <technologies />
    <projects />
    <contacts />
  </div>
</template>

<script lang="ts">
import { useNavigationStore } from '@/stores/navigation'
import { defineComponent, onMounted, ref, watch } from 'vue'
import Hero from '@/components/hero/Hero.vue'
import About from '@/components/pages/home/About.vue'
import Technologies from '@/components/pages/home/Technologies.vue'
import Projects from '@/components/pages/home/Projects.vue'
import Contacts from '@/components/pages/home/Contacts.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    Hero,
    About,
    Technologies,
    Projects,
    Contacts
  },
  setup() {
    const store = useNavigationStore()
    const homeViewRef = ref<HTMLElement | null>(null)

    homeViewRef.value = store.homeView

    watch(homeViewRef, (newValue) => {
      store.homeView = newValue
    })

    onMounted(() => {
      window.addEventListener('wheel', () => {
        store.setActiveSection()
      })
    })

    return {
      homeViewRef
    }
  }
})
</script>
<style lang="scss"></style>
