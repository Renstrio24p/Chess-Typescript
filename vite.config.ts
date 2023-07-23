import { UserConfig } from 'vite';

const config: UserConfig = {
  publicDir: 'src/images',

  // Configure the server options.
  server: {
    port: 4600, // Default port for the development server.
    // proxy: {}, // Proxy settings if you need to proxy API requests during development.
  },

  // Configure the build options.
  build: {
    outDir: 'dist', // Output directory for the production build.
    assetsDir: '', // Directory for static assets (relative to outDir).
    // sourcemap: true, // Generate sourcemaps for the production build.
    // minify: 'terser', // Minify the output (terser, esbuild, or false to disable).
    target: 'esnext', // Specify the target browsers (modern or legacy).
  },

  // Configure plugins. Add any additional Vite plugins here.
  plugins: [],

  // Additional configuration for specific file types.
  // For example, you can add Babel configuration for JavaScript files.
  // Babel configuration allows you to use specific plugins and presets.
  // If you need to use Babel, make sure to install it first:
  // npm install -D @babel/core @babel/preset-env
  // Or using Yarn:
  // yarn add -D @babel/core @babel/preset-env
  esbuild: {
    // enable: true, // Enable esbuild for JavaScript files (enabled by default).
    // jsxFactory: 'h', // Change the JSX factory function (default is 'React.createElement').
    // jsxFragment: 'Fragment', // Change the JSX fragment component (default is 'React.Fragment').
  },

  // Configure the resolve options.
  resolve: {
    alias: {
      // Add aliases for commonly used paths or modules.
      // For example, you can alias 'src' to your 'src' directory.
      // '@': path.resolve(__dirname, 'src'),
    },
  },
};

export default config;
