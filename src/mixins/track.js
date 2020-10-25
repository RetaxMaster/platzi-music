// Los mixins sirven para reutilizar funcionalidades en varios componentes, es como lo tipico de no escribir dos veces el mismo código

// Aquí definimos funcionalidades de Vue Model como si fuera una instancia de Vue
const trackMixin = {

    methods: {

        selectTrack() {

            if(!this.track.src) return

            this.$store.commit("setTrack", this.track);

            this.$emit("select", this.track.id);

        }
        
    }

}

export default trackMixin;