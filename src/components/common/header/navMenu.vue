<template>
  <v-toolbar-items class="header__nav d-none d-md-flex align-center">
    <v-tabs color="secondary" background-color="white" height="40">
      <v-tab
        v-for="(item, index) in links"
        :key="index"
        class="px-1 mx-3 no-hover-bg"
        min-width="0"
        :ripple="false"
        rounded="20px"
        @click="store.goTo(item.title, false)"
      >
        {{ item.title }}
      </v-tab>
    </v-tabs>
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

.v-tab {
  text-transform: none !important;
}
</style>
