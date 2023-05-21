<template>
  <v-container fluid class="pa-0">
    <div class="hero pa-6 d-flex align-center">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" lg="6" class="text-center text-md-left px-0">
            <h1 class="hero__greeting text-h4 text-sm-h3 mb-4">Hi, my name is Igor</h1>
            <p class="hero__description text-h6 mb-4">
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
            <p class="mb-6 text-sm-h6">
              Experienced
              <span class="text-secondary font-weight-bold">Full Stack Web Developer</span> with 4+
              years of expertise in creating responsive web applications using various programming
              languages and frameworks. Proficient in database management, server-side scripting,
              and front- end development.
            </p>
            <v-container class="pa-0">
              <v-row>
                <v-col cols="12" sm="6" md="4" lg="4">
                  <v-btn :block="true" color="secondary" dark>View My Works</v-btn>
                </v-col>
                <v-col col="12" sm="6" md="4" lg="4">
                  <v-btn :block="true" variant="outlined" color="secondary" dark>Download CV</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col class="d-none d-md-flex" cols="12" md="4" lg="6">
            <v-container>
              <v-row>
                <v-col class="d-flex justify-end" cols="6">
                  <div class="grid-item">
                    <icon-algorithm />
                  </div>
                </v-col>
                <v-col class="d-flex justify-start" cols="6">
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
                <v-col class="d-flex justify-start" cols="6">
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
  height: 120px;
  width: 120px;
  fill: $portfolio_default;
}
@media screen and (max-width: 1280px) {
  .hero__icon {
    height: 100px;
    width: 100px;
  }
}
@media screen and (min-width: 960px) {
  .hero {
    min-height: 450px;
  }
}
@media screen and (max-width: 380px) {
  .hero__greeting {
    font-size: 20px !important;
  }
  .hero__chip {
    width: 100%;
  }
}
</style>
