<template>
  <v-toolbar-items class="header__nav d-none d-md-flex">
    <ul class="header__list d-flex">
      <li v-for="(link, index) in links" :key="index" class="header__item pa-4 d-flex align-center">
        <v-hover v-slot="{ isHovering, props }">
          <div class="d-flex flex-column">
            <a
              class="header__link d-flex font-weight-bold"
              :class="{
                'text-secondary animate-hover': link.title === store.activeLink || isHovering
              }"
              @click="store.goTo(link.title, false)"
              v-bind="props"
            >
              <v-icon class="header__link-icon">{{ link.icon }}</v-icon>
              <div class="header__link-text" v-if="link.type !== 'social'">{{ link.title }}</div>
            </a>
            <div class="header__item-border relative" v-if="link.type !== 'social'">
              <v-expand-x-transition>
                <div v-if="isHovering" class="header__item-border-animation"></div>
              </v-expand-x-transition>
            </div>
          </div>
        </v-hover>
      </li>
    </ul>
  </v-toolbar-items>
</template>

<script lang="ts">
import { defineComponent, type PropType, ref } from 'vue'
import type LinkInterface from '@/types/Link'
import { useNavigationStore } from '@/stores/navigation'

export default defineComponent({
  name: 'listMenu',
  props: {
    links: {
      type: Array as PropType<LinkInterface[]>,
      required: true
    }
  },
  setup() {
    const store = useNavigationStore()
    return {
      store
    }
  }
})
</script>

<style lang="scss">
.header__list {
  list-style: none;
}
.header__link {
  cursor: pointer;
  position: relative;
  gap: 5px;
}
.header__item-border-animation {
  position: absolute;
  height: 5px;
  width: 100%;
  border-bottom: 3px solid $pdark;
}
</style>
