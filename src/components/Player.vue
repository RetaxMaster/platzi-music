<template>
    
    <div class="content" v-if="track.img">
        <p class="is-128x128">
            <img :src="track.img">
        </p>

        <p>
            <strong>{{ track.name }}</strong>
            <small>{{ track.duration_ms | ms-to-mm }}</small>
        </p>

        <p>
            <audio :src="track.src" controls></audio>
        </p>
    </div>

</template>

<script>

import { mapState } from "vuex";

export default {

    computed: {

        ...mapState(["track"])

    }

}
</script>

<style scoped>

    img {
        width: 124px;
        border-radius: 50%;
    }

</style>