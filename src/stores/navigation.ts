import type LinkInterface from '@/types/Link'
import { defineStore } from 'pinia'
import { reactive, ref, watch } from 'vue'

export const useNavigationStore = defineStore('navigation', () => {
  const mobileDrawer = ref<boolean>(false)
  const activeLink = ref<string>('')
  const homeView = ref<HTMLElement | null>(null)
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

  function goTo(src: string, mobile: boolean = false) {
    activeLink.value = src
    if (mobile) mobileDrawer.value = false
  }

  watch(
    () => activeLink.value,
    (activeLink) => {
      scrollToActiveElement(activeLink)
    }
  )

  function scrollToActiveElement(activeLink: string) {
    if (homeView.value) {
      const children = homeView.value.querySelectorAll(`[data-section="${activeLink}"]`)
      children.forEach((child) => {
        if (child.scrollIntoView) child.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }

  return { links, socialLinks, mobileDrawer, activeLink, homeView, goTo }
})
