import type LinkInterface from '@/types/Link'
import { defineStore } from 'pinia'
import { reactive, ref, watch } from 'vue'

export const useNavigationStore = defineStore('navigation', () => {
  const mobileDrawer = ref<boolean>(false)
  const homeView = ref<HTMLElement | null>(null)
  const activeLink = ref<number>(0)
  const links = reactive<LinkInterface[]>([
    {
      title: 'Home',
      src: 'home',
      icon: 'mdi-home-account',
      type: 'default'
    },
    {
      title: 'About',
      src: 'about',
      icon: 'mdi-chat-question-outline',
      type: 'default'
    },
    {
      title: 'Technologies',
      src: 'technologies',
      icon: 'mdi-application-braces-outline',
      type: 'default'
    },
    {
      title: 'Projects',
      src: 'projects',
      icon: 'mdi-devices',
      type: 'default'
    },
    {
      title: 'Contacts',
      src: 'contacts',
      icon: 'mdi-contacts',
      type: 'default'
    }
  ])

  const socialLinks = reactive<LinkInterface[]>([
    {
      title: 'Linkedin',
      src: 'linkedin',
      icon: 'mdi-linkedin',
      type: 'social'
    },
    {
      title: 'GitHub',
      src: 'github',
      icon: 'mdi-github',
      type: 'social'
    },
    {
      title: 'Gmail',
      src: 'gmail',
      icon: 'mdi-gmail',
      type: 'social'
    }
  ])

  watch(
    () => activeLink.value,
    (activeLink) => {
      scrollToActiveElement(activeLink)
    }
  )

  function setActiveElementByWheel() {
    if (homeView.value) {
      const children = homeView.value.querySelectorAll('section')
      const windowTopScroll = window.scrollY

      for (let i = 0; i < children.length; i++) {
        const child = children[i]
        const childHeight = child.offsetHeight
        const childOffset = child.offsetTop

        if (windowTopScroll >= childOffset - 80 && windowTopScroll < childOffset + childHeight) {
          const childSectionName = child.getAttribute('data-section')
          const index = links.findIndex((item) => item.src === childSectionName)

          if (index !== activeLink.value) {
            activeLink.value = index
          }
        }
      }
    }
  }

  function scrollToActiveElement(activeLink: number) {
    if (homeView.value) {
      const activeLinkElement = links[activeLink]
      const children = homeView.value.querySelectorAll(`[data-section="${activeLinkElement.src}"]`)
      children.forEach((child) => {
        if (child.scrollIntoView) {
          child.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }
  }

  function goTo(src: string) {
    const linkIndex = links.findIndex((item) => item.src === src)
    if (linkIndex >= 0) activeLink.value = linkIndex
  }

  return {
    links,
    socialLinks,
    mobileDrawer,
    activeLink,
    homeView,
    scrollToActiveElement,
    setActiveElementByWheel,
    goTo
  }
})
