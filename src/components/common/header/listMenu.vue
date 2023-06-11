<template>
  <v-list>
    <v-list-item
      v-for="(link, index) in store.links"
      :key="index"
      :value="link.src"
      color="primary"
      :active="link.title === store.activeLink"
      @click="store.goTo(link.src, true)"
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
import { defineComponent } from 'vue'
import { useNavigationStore } from '@/stores/navigation'

export default defineComponent({
  name: 'listMenu',
  setup() {
    const store = useNavigationStore()
    return {
      store
    }
  }
})
</script>
