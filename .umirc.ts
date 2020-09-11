import { defineConfig } from 'umi';
import routes from './src/router'

export default defineConfig({
  title:'UMI',
  ssr: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  dva: {
    immer: true,
    hmr: true,
  },
});
