<template>
    
    <div class="card" v-if="track && track.album">

        <div class="card-image">
            <figure class="image is-1by1">
                <img :src="track.img">
            </figure>
        </div>

        <div class="card-content">

            <div class="media">

                <div class="media-left">
                    <figure class="image is-48x48">
                        <img :src="track.img">
                    </figure>
                </div>

                <div class="media-content">
                    <p class="title is-6"><strong>{{ track.name }}</strong></p>
                    <p class="subtitle is-6"><strong>{{ track.artist }}</strong></p>
                </div>

            </div>

            <div class="content">
                <small>{{ track.duration_ms | ms-to-mm }}</small>
                <nav class="level">
                    <div class="level-left">

                        <button class="level-item button is-primary">
                            <span @click="selectTrack">Play!</span>
                        </button>

                        <button class="level-item button is-warning">
                            <span @click="goToTrack(track.id)">Go to track!</span>
                        </button>

                    </div>
                </nav>
            </div>

        </div>

    </div>

</template>

<script>

export default {

    props: {
        track: {
            type: Object,
            required: true
        }
    },

    methods: {

        selectTrack() {

            if(!this.track.src) return

            this.$emit("select", this.track.id);

            this.$bus.$emit("set-track", this.track);

        },

        goToTrack(id) {

            if(!this.track.src) return

            this.$router.push({
                name: "track",
                params: { id }
            });
            
        }

    }
    
}

</script>