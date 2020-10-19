<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
      HelloWorld
  }
}
</script>

<style lang="scss">
/* Es una buena pŕactica importar los estiulos generales desde el componente App.vue */
@import "./scss/main.scss";
</style>
