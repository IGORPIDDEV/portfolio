<template>
  <div class="hero d-flex align-center justify-center flex-column pa-6">
    <h1 class="hero__greeting text-h4 text-sm-h4 mb-2">Hi, my name is Igor</h1>
    <p class="hero__description text-h6 mb-2">
      <v-chip class="ma-2 hero__chip" color="default" label>
        <v-icon start icon="mdi-vuejs"></v-icon>
        Vue.js
      </v-chip>
      <v-chip class="ma-2 hero__chip" color="default" label>
        <v-icon start icon="mdi-nodejs"></v-icon>
        Node.js
      </v-chip>
      <v-chip class="ma-2 hero__chip" color="default" label>
        <v-icon start icon="mdi-laravel"></v-icon>
        Laravel
      </v-chip>
    </p>
    <p class="mb-4 text-center">
      Experienced <span class="text-secondary font-weight-bold">Full Stack Web Developer</span> with
      4+ years of expertise in creating responsive web applications using various programming
      languages and frameworks. Proficient in database management, server-side scripting, and front-
      end development.
    </p>
    <v-btn class="hero__button" block color="secondary" dark>View My Works</v-btn>
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
  background-color: $portfolio_primary;
  color: $portfolio_default;
  /* min-height: 400px; */
}
.hero__button {
  background-image: linear-gradient(
    to right,
    $portfolio_secondary 0%,
    $portfolio_secondary_lighten-1 100%
  ) !important;
}
.hero__button:hover {
  background-position: right center;
}
@media screen and (max-width: 380px) {
  .hero__greeting {
    font-size: 20px;
  }
  .hero__chip {
    width: 100%;
  }
}
</style>
