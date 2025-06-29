import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("linkify-theme") || "winter",
  setTheme: (theme) => {
    localStorage.setItem("linkify-theme", theme);
    set({ theme });
  },
}));
