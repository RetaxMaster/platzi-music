<template>

<section class="section">

  <nav class="nav has-shadow">

    <div class="container">

      <input type="text" class="input is-large" placeholder="Buscar canciones" v-model="searchQuery">
      <a href="#" class="button is-info is-large" @click="search">Buscar</a>
      <a href="#" class="button is-danger is-large">&times;</a>
      <p>
        <small>{{ searchMessage }}</small>
      </p>

    </div>

  </nav>

  <div class="container results">
    <div class="columns">

      <div class="column" v-for="t in tracks" :key="t">
        {{ t.name }} - {{ t.artist }}
      </div>

    </div>
  </div>

</section>
  
</template>

<script>

// API del curso no funcionando, se seguirá usando el array

const tracks = [
  {
    name: "Shot In The Dark",
    artist: "AC/DC"
  },
  {
    name: "Livin' On The Edge",
    artist: "Aerosmith"
  },
  {
    name: "Rocket Queen",
    artist: "Guns N' Roses"
  }
];

export default {

  name: 'App',

  components: {},

  data() {
    return {

      searchQuery: "",
      tracks: []

    }
  },

  methods: {

    search() {

      if (!this.searchQuery) return

      this.tracks = tracks;
    }
    
  },

  computed: {

    searchMessage() {

      return `Econtrados: ${this.tracks.length} canciones`;

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
