<template>
  <v-list>
    <v-list-item
      v-for="(link, index) in links"
      :key="index"
      :value="link.src"
      :active-color="getActiveColor(link.type)"
      @click="goTo(link.title, true)"
    >
      <template v-slot:prepend>
        <v-icon class="header__icon">{{ link.icon }}</v-icon>
      </template>

      <template v-slot:title>
        <span class="header__item-title">{{ link.title }}</span>
      </template>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type LinkInterface from '@/types/Link'

export default defineComponent({
  name: 'listMenu',
  props: {
    links: {
      type: Array as PropType<LinkInterface[]>,
      required: true
    },
    goTo: {
      type: Function as PropType<(title: string, mobile: boolean) => void>,
      required: true
    },
    activeLink: {
      type: String
    }
  },
  setup() {
    function getActiveColor(type: string): string | undefined {
      return type !== 'social' ? 'primary' : undefined
    }
    return {
      getActiveColor
    }
  }
})
</script>
