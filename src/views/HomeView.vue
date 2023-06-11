<template>
  <div class="home" ref="homeViewRef">
    <hero />
    <about />
    <!-- <skills /> -->
    <projects />
    <contacts />
  </div>
</template>

<script lang="ts">
import { useNavigationStore } from '@/stores/navigation'
import { defineComponent, onMounted, ref, watch } from 'vue'
import Hero from '@/components/hero/Hero.vue'
import About from '@/components/pages/home/About.vue'
// import Skills from '@/components/pages/home/Skills.vue'
import Projects from '@/components/pages/home/Projects.vue'
import Contacts from '@/components/pages/home/Contacts.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    Hero,
    About,
    // Skills,
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
        if (homeViewRef.value) {
          const children = homeViewRef.value.querySelectorAll('section')
          const windowTopScroll = window.scrollY

          for (let i = 0; i < children.length; i++) {
            const child = children[i]
            const childHeight = child.offsetHeight
            const childOffset = child.offsetTop

            if (
              windowTopScroll >= childOffset - 80 &&
              windowTopScroll < childOffset + childHeight
            ) {
              const childSectionName = child.getAttribute('data-section')
              const index = store.links.findIndex((item) => item.src === childSectionName)

              if (index !== store.activeLink) {
                store.activeLink = index
              }
            }
          }
        }
      })
    })

    return {
      homeViewRef
    }
  }
})
</script>
