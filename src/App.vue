<template>

<div id="app">
  <pm-header />

  <router-view />
  
  <pm-footer />
</div>
  
</template>

<script>

import PmFooter from "@/components/layout/Footer";
import PmHeader from "@/components/layout/Header";

export default {

  name: 'App',

  components: { PmFooter, PmHeader },

  data() {
    return {
    }
  }

}
</script>

<style lang="scss">
/* Es una buena pŕactica importar los estiulos generales desde el componente App.vue */
@import "./scss/main.scss";

.results {
  margin-top: 50px
}

</style>
