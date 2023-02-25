import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  getters: {
    currentTheme: (state) => state.theme,
  },
  state: () => {
    return {
      theme: "light",
    };
  },
  actions: {
    setTheme(payload: { theme: string }) {
      this.theme = payload.theme;
    },
  },
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: "strict",
    }),
  },
});
