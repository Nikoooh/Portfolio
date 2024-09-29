import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'hero-image': "url('/background/hero-image.png')",
        'contact-page-hero': "url('/background/contact-page-hero.png')"
      },
      textDecorationThickness: {
        '1em': '3px'
      }
    },
  },
  plugins: [],
};
export default config;
