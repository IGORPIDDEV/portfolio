import type LinkInterface from '@/types/Link'
import { defineStore } from 'pinia'
import { reactive, ref, watch } from 'vue'

export const useNavigationStore = defineStore('navigation', () => {
  const mobileDrawer = ref<boolean>(false)
  const homeView = ref<HTMLElement | null>(null)
  const activeLink = ref<number>(0)
  const isAutoScrolling = ref<boolean>(false)
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
      title: 'Skills',
      src: 'skills',
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

  function scrollToActiveElement(activeLink: number) {
    if (homeView.value) {
      isAutoScrolling.value = true
      const activeLinkElement = links[activeLink]
      const children = homeView.value.querySelectorAll(`[data-section="${activeLinkElement.src}"]`)
      children.forEach((child) => {
        if (child.scrollIntoView) {
          child.scrollIntoView({ behavior: 'smooth' })
        }
        setTimeout(() => {
          isAutoScrolling.value = false
        }, 600)
      })
    }
  }

  return {
    links,
    socialLinks,
    mobileDrawer,
    activeLink,
    homeView,
    isAutoScrolling,
    scrollToActiveElement
  }
})
