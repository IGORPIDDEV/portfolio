<template>
  <section class="projects" data-section="projects">
    <v-container class="pa-0 full-height d-flex flex-column align-center justify-center">
      <h1 class="text-h1 my-4">Projects</h1>
      <p class="text-h5 my-4 text-justify">Projects</p>
    </v-container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeProjects'
})
</script>

<style lang="scss">
.about {
  color: $portfolio_primary;
}
</style>
