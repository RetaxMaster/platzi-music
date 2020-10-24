<template>

<main>

  <transition name="move">
    <pm-notification v-show="showNotification">
      <template v-slot:body>
          <p>No se encontro nada</p>
      </template>
    </pm-notification>
  </transition>
  
  <transition name="move">
    <pm-loader v-show="isLoading" />
  </transition>
  
  <section class="section">
  
    <nav class="nav has-shadow">
  
      <div class="container">
        
        <!-- Podemos usar modifiers como .enter -->
        <input type="text" class="input is-large" placeholder="Buscar canciones" v-model="searchQuery" @keyup.enter="search">
        <a href="#" class="button is-info is-large" @click="search">Buscar</a>
        <a href="#" class="button is-danger is-large">&times;</a>
        <p>
          <small>{{ searchMessage }}</small>
        </p>
  
      </div>
  
    </nav>
  
    <div class="container results">
      <div class="columns is-multiline">
  
        <div class="column is-one-quarter" v-for="t in tracks" :key="t.id">
          <pm-track 
          v-blur="t.src"
          :class="{ 'is-active': t.id === selectedTrack }"
          :track="t" 
          @select="setSelectedTrack" 
          />
        </div>
  
      </div>
    </div>
  
  </section>
  
</main>
  
</template>

<script>

import PmTrack from "@/components/Track";
import PmLoader from "@/components/shared/Loader";
import PmNotification from "@/components/shared/Notification";

// API del curso no funcionando, se seguirá usando el array

const tracks = [
  {
    id: 1,
    name: "Shot In The Dark",
    album: "Power Up",
    artist: "AC/DC",
    img: "https://static1.abc.es/media/cultura/2020/09/30/powerup-1-U35512706716Llf-620x349@abc.jpg",
    src: "No hay URL",
    duration_ms: 3600
  },
  {
    id: 2,
    name: "Livin' On The Edge",
    album: "Get A Grip",
    artist: "Aerosmith",
    img: "https://www.infobae.com/new-resizer/kx9BdL1rrJnOaMiKMM9agfhc2qo=/768x432/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/09/26134245/Aerosmith.jpg",
    src: null,
    duration_ms: 3600
  },
  {
    id: 3,
    name: "Rocket Queen",
    album: "Apetite For Destruction",
    artist: "Guns N' Roses",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/GNR_London_Stadium_2017_3_%28cropped%29.jpg/300px-GNR_London_Stadium_2017_3_%28cropped%29.jpg",
    src: "No hay URL",
    duration_ms: 3600
  }
];

export default {

  name: 'Search',

  components: { PmTrack, PmLoader, PmNotification },

  data() {
    return {

      searchQuery: "",
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: ""

    }
  },

  methods: {

    search() {

      if (!this.searchQuery) return

      this.isLoading = true;
      if(tracks-length === 0) this.showNotification = true;
      this.tracks = tracks;

      // Puse el timeout para que se aprecie la transición
      setTimeout(() => {
          this.isLoading = false;
        }, 3000);
      //this.isLoading = false;

    },

    setSelectedTrack(id) {
      this.selectedTrack = id;
    }
    
  },

  computed: {

    searchMessage() {

      return `Econtrados: ${this.tracks.length} canciones`;

    }

  },

  watch: {

    showNotification() {

      if (this.showNotification) {
          setTimeout(() => {
            this.showNotification = false;
          }, 3000);
      }

    }

  }

}
</script>

<style lang="scss">

.results {
  margin-top: 50px
}

.is-active {
  border: 1px solid #23d160
}

</style>
