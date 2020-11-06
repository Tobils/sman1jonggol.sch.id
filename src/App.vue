<template>
  <div id="app">
    <!-- hasil render ditampilkan disini -->
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
    background-color: #ffffff;
    font-family: 'Assistant', sans-serif;
    color: #071c4d;
}

</style>
