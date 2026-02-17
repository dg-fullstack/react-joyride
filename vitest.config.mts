import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
  test: {
    include: ['test/**/*.spec.ts?(x)'],
    coverage: {
      all: true,
      include: ['src/**/*.ts?(x)'],
      reporter: ['text', 'lcov'],
      thresholds: {
        statements: 90,
        branches: 80,
        functions: 90,
        lines: 90,
      },
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: [
      '@testing-library/react/dont-cleanup-after-each', './test/__setup__/vitest.setup.ts',
    ],
  },
});
