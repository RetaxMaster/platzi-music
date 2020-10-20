<template>

<div id="app">
  <pm-header />
  
  <pm-loader v-show="isLoading" />
  
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
      <div class="columns is-multiline">
  
        <div class="column is-one-quarter" v-for="t in tracks" :key="t">
          <pm-track :track="t" />
        </div>
  
      </div>
    </div>
  
  </section>
  
  <pm-footer />
</div>
  
</template>

<script>
import PmFooter from "@/components/layout/Footer";
import PmHeader from "@/components/layout/Header";
import PmTrack from "@/components/Track";
import PmLoader from "@/components/shared/Loader";
// API del curso no funcionando, se seguirá usando el array
const tracks = [
  {
    name: "Shot In The Dark",
    artist: "AC/DC",
    img: "https://static1.abc.es/media/cultura/2020/09/30/powerup-1-U35512706716Llf-620x349@abc.jpg",
    duration_ms: 3600
  },
  {
    name: "Livin' On The Edge",
    artist: "Aerosmith",
    img: "https://www.infobae.com/new-resizer/kx9BdL1rrJnOaMiKMM9agfhc2qo=/768x432/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/09/26134245/Aerosmith.jpg",
    duration_ms: 3600
  },
  {
    name: "Rocket Queen",
    artist: "Guns N' Roses",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/GNR_London_Stadium_2017_3_%28cropped%29.jpg/300px-GNR_London_Stadium_2017_3_%28cropped%29.jpg",
    duration_ms: 3600
  }
];
export default {
  name: 'App',
  components: { PmFooter, PmHeader, PmTrack, PmLoader },
  data() {
    return {
      searchQuery: "",
      tracks: [],
      isLoading: false
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) return
      this.isLoading = true;
      this.tracks = tracks;
      this.isLoading = false;
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