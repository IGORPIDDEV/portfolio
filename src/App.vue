<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>Portfolio</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-layout>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-main>
    <v-footer>
      <span>&copy; 2023 My Portfolio</span>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped></style>
