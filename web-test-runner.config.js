import { vitePlugin } from '@remcovaes/web-test-runner-vite-plugin';
import { playwrightLauncher } from '@web/test-runner-playwright';

const filteredLogs = ['Lit is in dev mode', '[vite] connecting...', '[vite] connected.'];

export default /** @type {import('@web/test-runner').TestRunnerConfig} */ ({
  files: 'src/**/*.test.ts',
  plugins: [
    vitePlugin()
  ],
  browsers: [playwrightLauncher({ product: 'chromium', concurrency: 1 })],

  /** Filter out lit dev mode logs */
  filterBrowserLogs(log) {
    for (const arg of log.args) {
      if (typeof arg === 'string') {
        return !filteredLogs.some(filteredLog => log.args.some(arg => arg.includes(filteredLog)));
      }
    }
    return true;
  },
});
