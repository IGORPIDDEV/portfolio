<template>
  <section class="hero">
    <v-container fluid class="pa-0 full-height">
      <div class="hero px-6 d-flex align-center full-height">
        <v-container class="hero__container">
          <v-row>
            <v-col cols="12" md="6" lg="7" class="text-center text-md-left px-0">
              <h1 class="hero__greeting text-lg-h1 text-md-h2 text-sm-h2 mb-4">Hello, i'm Igor</h1>
              <p class="hero__description text-h6 mb-4 d-flex">
                <v-chip class="hero__chip" color="default" label>
                  <v-icon class="hero__chip__icon" start icon="mdi-vuejs"></v-icon>
                  Vue.js
                </v-chip>
                <v-chip class="hero__chip" color="default" label>
                  <v-icon class="hero__chip__icon" start icon="mdi-nodejs"></v-icon>
                  Node.js
                </v-chip>
                <v-chip class="hero__chip" color="default" label>
                  <v-icon class="hero__chip__icon" start icon="mdi-laravel"></v-icon>
                  Laravel
                </v-chip>
              </p>
              <p class="mb-6 text-sm-h6 text-justify">
                I'm passionate
                <span class="text-secondary font-weight-bold">Full Stack Web Developer</span>. With
                a strong foundation in both front-end and back-end technologies, I specialize in
                creating dynamic and responsive web applications. My goal is to deliver high-quality
                solutions that provide seamless user experiences. Let's build something amazing
                together!
              </p>
              <v-container class="pa-0">
                <v-row>
                  <v-col cols="12" sm="6" md="6" lg="4">
                    <v-btn :block="true" size="x-large" color="secondary" dark>View My Works</v-btn>
                  </v-col>
                  <v-col col="12" sm="6" md="6" lg="4">
                    <v-btn :block="true" size="x-large" variant="outlined" color="default" dark
                      >Download CV</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
            <v-col class="d-none d-md-flex align-center" cols="12" md="6" lg="5">
              <v-container>
                <v-row>
                  <v-col class="d-flex justify-end" cols="6">
                    <div class="grid-item">
                      <icon-algorithm />
                    </div>
                  </v-col>
                  <v-col class="d-flex justify-end" cols="6">
                    <div class="grid-item">
                      <icon-frontend />
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex justify-end" cols="6">
                    <div class="grid-item">
                      <icon-backend />
                    </div>
                  </v-col>
                  <v-col class="d-flex justify-end" cols="6">
                    <div class="grid-item">
                      <icon-database />
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import IconBackend from './IconBackend.vue'
import IconFrontend from './IconFrontend.vue'
import IconDatabase from './IconDatabase.vue'
import IconAlgorithm from './IconAlgorithm.vue'
export default defineComponent({
  name: 'Hero',
  components: { IconBackend, IconFrontend, IconDatabase, IconAlgorithm },
  setup() {
    const { mobile } = useDisplay()
    return {
      mobile
    }
  }
})
</script>
<style lang="scss">
.hero {
  background-color: $portfolio_primary;
  color: $portfolio_default;
}
.hero__icon {
  height: 140px;
  width: 140px;
  fill: $portfolio_default;
}
.hero__description {
  gap: 10px;
}
.hero__container {
  margin-top: -80px;
}
@media screen and (max-width: 1280px) {
  .hero__icon {
    height: 120px;
    width: 120px;
  }
}
@media screen and (max-width: 960px) {
  .hero__description {
    justify-content: center;
  }
}
@media screen and (max-width: 380px) {
  .hero__greeting {
    font-size: 26px !important;
  }
  .hero__chip {
    width: 100%;
  }
  .hero__chip__icon {
    display: none !important;
  }
}
</style>
