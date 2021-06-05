<template>
  <div id="app">
    <!-- Размещение дочернего компонента Main -->
    <Main />
  </div>
</template>

<script>
// Импорт дочернего компонента Main
import Main from './components/Main';

export default {
  name: 'App',
  // components - указание дочернего компонента Main
  components: {
    Main,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 30px 0;
}
</style>
