import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        'deno-blue': '#239BED',
        'node-green': '#8CC84B',
      }
    },
  },

  plugins: [typography]
} satisfies Config;
