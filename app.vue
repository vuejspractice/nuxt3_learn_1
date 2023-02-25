<template>
  <v-app>
    <v-app-bar :elevation="2">
      <v-btn to="/">Home</v-btn>
      <v-btn to="/about">About</v-btn>
      <v-btn to="/tsxpage">TSX Page</v-btn>
      <v-spacer />
      <v-btn icon @click="toggleTheme">
        <v-icon color="primary">{{
          currentTheme === "light" ? "mdi-weather-night" : "mdi-white-balance-sunny"
        }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid style="height: calc(100% - 90px)">
        <v-layout class="fill-height">
          <NuxtPage />
        </v-layout>
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { useSettingsStore } from "@/stores";
import { useTheme } from "vuetify/lib/framework.mjs";
export default defineComponent({
  setup() {
    const settingsStore = useSettingsStore();
    const currTheme = useTheme();

    const toggleTheme = () => {
      currTheme.global.name.value = currTheme.global.current.value?.dark ? "light" : "dark";
      settingsStore.setTheme({ theme: currTheme.global.name.value });
    };

    const currentTheme = computed(() => settingsStore.theme);

    return {
      toggleTheme,
      currentTheme,
    };
  },
});
</script>
