<template>
  <div id="app">
    <navegacion></navegacion>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Navegacion from './components/Navegacion.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',
    components: {
        Navegacion,
        Footer,
    },
};
</script>

<style>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>

