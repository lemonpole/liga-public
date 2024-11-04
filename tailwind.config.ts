/**
 * Tailwind configuration and customization file.
 *
 * @module
 */
import { ThemeSetting } from "./src/lib/constants";

/**
 * @see https://tailwindcss.com/docs/configuration
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    logs: false,
    darkTheme: ThemeSetting.DARK,
    themes: [ThemeSetting.LIGHT, ThemeSetting.DARK],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              quotes: "none",
            },
          },
        },
      },
    },
  },
};
