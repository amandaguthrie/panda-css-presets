import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      onwarn: (warning, handler) => {
        // suppress warnings on `vite dev` and `vite build`; but even without this, things still work
        if (warning.code === 'css-syntax-error') return;
        if (warning.code === 'a11y-img-redundant-alt') return;
        handler && handler(warning);
      },
    }),
    sveltekit(),
  ],
  server: {
    fs: {
      allow: ['styled-system'],
    },
  },
});
