import type LinkInterface from '@/types/Link'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useNavigationStore = defineStore('navigation', () => {
  const mobileDrawer = ref<boolean>(false)
  const activeLink = ref<string>('')
  const links = reactive<LinkInterface[]>([
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
      title: 'Gmail',
      src: 'gmail',
      icon: 'mdi-gmail',
      type: 'social'
    }
  ])

  function goTo(title: string, mobile: boolean = false) {
    activeLink.value = title
    if (mobile) mobileDrawer.value = false
  }

  return { links, socialLinks, mobileDrawer, activeLink, goTo }
})
