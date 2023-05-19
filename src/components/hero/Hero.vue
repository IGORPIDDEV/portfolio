<template>
  <div class="hero d-flex align-center justify-center flex-column pa-6">
    <h1 class="hero__greeting text-h4 mb-2">Hi, my name is Igor</h1>
    <p class="hero__description text-h6 mb-2">I am a full-stack web developer.</p>
    <p class="mb-4 text-center">
      Experienced Full Stack Web Developer with 4+ years of expertise in creating responsive web
      applications using various programming languages and frameworks. Proficient in database
      management, server-side scripting, and front- end development. Skilled in collaborating with
      cross-functional teams to deliver high-quality software solutions.
    </p>
    <v-btn class="hero__button" block color="primary" dark>View My Works</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Hero'
})
</script>
<style lang="scss">
.hero {
  background-color: $portfolio_light;
  color: $portfolio_secondary;
  /* min-height: 400px; */
}
</style>
