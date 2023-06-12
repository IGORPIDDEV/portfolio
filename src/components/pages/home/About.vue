<template>
  <section class="about" data-section="about">
    <v-container class="pa-0 full-height d-flex flex-column align-center justify-center">
      <h1 class="text-h1 my-4">About me</h1>
      <div class="text-h5 my-4 text-justify">
        <p class="mb-4">
          Experienced
          <span class="text-secondary font-weight-bold">Full Stack Web Developer</span> with
          <span class="text-secondary font-weight-bold">4+</span>
          years of expertise in creating responsive web applications using various programming
          languages and frameworks. Proficient in database management, server-side scripting, and
          front- end development. Skilled in collaborating with cross-functional teams to deliver
          high-quality software solutions.
        </p>
        <p class="mb-4">
          As a Full Stack Web Developer, I have a proven track record of designing and developing
          user-friendly, responsive, and intuitive web applications that meet the needs of clients
          and end-users. I am proficient in Vue.js, a progressive JavaScript framework for building
          user interfaces, and Node.js, a runtime environment that enables building server-side
          applications with JavaScript and PHP
        </p>
        <p class="mb-4">
          My experience in designing and developing RESTful APIs, integrating third-party APIs, and
          implementing web sockets using Node.js has enabled me to build complex and dynamic web
          applications. I have also worked extensively with Vue.js to create responsive and dynamic
          user interfaces with reusable components.
        </p>
      </div>
      <v-btn class="my-4" size="x-large" color="primary" dark>Hire me now!</v-btn>
    </v-container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeAbout'
})
</script>

<style lang="scss">
.about {
  color: $portfolio_primary !important;
  background-color: $portfolio_default;
}
</style>
