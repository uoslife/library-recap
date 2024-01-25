import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        plugins: [['@swc/plugin-emotion', {}]],
      }),
    ],
    resolve: {
      alias: {
        'react-native': 'react-native-web',
      },
    },
    server: {
      proxy: {
        '/core': {
          target: env.VITE_BASE_API_URL,
          changeOrigin: true,
        },
      },
    },
  };
});
