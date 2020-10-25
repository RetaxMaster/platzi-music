import Vue from 'vue'
import Vuex from 'vuex'

const trackDetails = {
  t1: {
      id: 1,
      name: "Shot In The Dark",
      album: "Power Up",
      artist: "AC/DC",
      img: "https://static1.abc.es/media/cultura/2020/09/30/powerup-1-U35512706716Llf-620x349@abc.jpg",
      src: "No hay URL",
      duration_ms: 3600
  },
  t2: {
      id: 2,
      name: "Livin' On The Edge",
      album: "Get A Grip",
      artist: "Aerosmith",
      img: "https://www.infobae.com/new-resizer/kx9BdL1rrJnOaMiKMM9agfhc2qo=/768x432/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/09/26134245/Aerosmith.jpg",
      src: null,
      duration_ms: 3600
  },
  t3: {
      id: 3,
      name: "Rocket Queen",
      album: "Apetite For Destruction",
      artist: "Guns N' Roses",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/GNR_London_Stadium_2017_3_%28cropped%29.jpg/300px-GNR_London_Stadium_2017_3_%28cropped%29.jpg",
      src: "No hay URL",
      duration_ms: 3600
  }
};

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    track: {}
  },

  mutations: {

    setTrack(state, track) {
      state.track = track;
    }

  },

  getters: {

    trackTitle(state) {

      return `${state.track.name} - ${state.track.artist}`;

    }

  },

  actions: {

    getTrackById(context, payload) {

      return new Promise(resolve => {

        // Simulo la petición a la API
        setTimeout(() => {
          resolve(trackDetails[`t${payload.id}`]);
        }, 1000);

      }).then(res => {

        context.commit("setTrack", res);
        return res;

      })

    }

  },

  modules: {
  }

});

export default store;
