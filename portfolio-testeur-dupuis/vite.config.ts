import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    pages: {
      router: {
        type: 'static'
      }
    }
  },
  vite: {
    base: '/site-demo/'
  }
});
