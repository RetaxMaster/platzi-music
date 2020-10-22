<template>

    <pm-track></pm-track>

</template>

<script>

//const trackService

import PmTrack from "@/components/Track";

export default {

    components: { PmTrack },

    data() {
        return { 
            track: {}
        }
    },

    created() {

        const id = this.$route.params.id;

    }

}
</script>