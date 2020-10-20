<template>
    
    <div class="content">
        <p class="is-128x128">
            <img src="">
        </p>

        <p>
            <strong>{{ }}</strong>
            <small>{{ }}</small>
        </p>

        <p>
            <audio src="" controls></audio>
        </p>
    </div>

</template>

<script>

export default {
    
    data(){
        return {
            track: {}
        }
    },

    mounted() {

        /* emitter.on("set-track", (track) => {
            console.log("Emited! ", track);

            this.track = track;

        }); */

    }

}
</script>