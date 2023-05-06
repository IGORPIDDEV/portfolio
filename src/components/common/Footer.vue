<template>
  <v-footer class="footer">
    <v-row justify="center" class="my-4 text-center">
      <v-col cols="12">
        <span class="footer__text">&copy; {{ new Date().getFullYear() }} Portfolio</span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AppFooter'
})
</script>