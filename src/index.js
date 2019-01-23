import Grid from "./components/index";

const LibraryModule = {
  Grid,

  install(Vue) {
    // Register components with vue
    Vue.component("grid", Grid);
  }
};

// Export library
export default LibraryModule;

// Export components
export { Grid };
