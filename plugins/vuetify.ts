import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { useSettingsStore } from "@/stores";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

export default defineNuxtPlugin((nuxtApp) => {
  const settingsStore = useSettingsStore();
  console.log("theme", settingsStore.theme);
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: settingsStore.theme,
    },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
