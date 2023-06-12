<template>
  <section class="technologies" data-section="technologies">
    <v-container class="pa-0 full-height d-flex flex-column align-center justify-center">
      <h1 class="text-h1 my-4">Technologies</h1>
      <v-card class="mx-auto" max-width="344">
        <v-card-title> Top western road trips </v-card-title>
        <v-card-item>
          <div>
            <div class="text-overline mb-1">OVERLINE</div>
            <div class="text-h6 mb-1">Headline</div>
            <div class="text-caption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae numquam odio
              asperiores itaque placeat facere vero veritatis tempore suscipit aut, et, quidem culpa
              doloribus autem rem rerum nihil illo quae?
            </div>
          </div>
        </v-card-item>

        <v-card-actions>
          <v-btn variant="outlined"> Button </v-btn>
        </v-card-actions>
      </v-card>
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
.technologies {
  background-color: $portfolio_primary;
  color: $portfolio_default;
}
</style>
