<template>
  <div class="cursor-pointer py-2 d-flex social-links">
    <v-btn
      v-for="(link, index) in store.socialLinks"
      :key="index"
      density="comfortable"
      :icon="link.icon"
      class="mx-3"
    ></v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNavigationStore } from '@/stores/navigation'

export default defineComponent({
  name: 'socialLinks',
  setup() {
    const store = useNavigationStore()
    return {
      store
    }
  }
})
</script>

<style lang="scss">
.social-links {
  @media (max-width: 960px) {
    opacity: var(--v-medium-emphasis-opacity);
  }
}
</style>
