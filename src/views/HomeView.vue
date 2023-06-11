<template>
  <div class="home" ref="homeViewRef">
    <hero />
    <about />
    <skills />
  </div>
</template>

<script lang="ts">
import { useNavigationStore } from '@/stores/navigation'
import { defineComponent, onMounted, ref, watch } from 'vue'
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

    onMounted(() => {
      window.onscroll = () => {
        if (!store.isAutoScrolling) {
          if (homeViewRef.value) {
            const children = homeViewRef.value.querySelectorAll(`section`)
            children.forEach((child) => {
              let windowTopScroll = window.scrollY
              let childHeight = child.offsetHeight
              let childOffset = child.offsetTop
              if (windowTopScroll >= childOffset && windowTopScroll < childOffset + childHeight) {
                let childSectionName = child.getAttribute('data-section')
                let index = store.links.findIndex((item) => item.src === childSectionName)
                if (index !== store.activeLink) store.activeLink = index
              }
            })
          }
        }
      }
    })

    return {
      homeViewRef
    }
  }
})
</script>
