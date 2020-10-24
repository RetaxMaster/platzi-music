// Los mixins sirven para reutilizar funcionalidades en varios componentes, es como lo tipico de no escribir dos veces el mismo código

// Aquí definimos funcionalidades de Vue Model como si fuera una instancia de Vue
const trackMixin = {

    methods: {

        selectTrack() {

            if(!this.track.src) return

            this.$emit("select", this.track.id);

            this.$bus.$emit("set-track", this.track);

        }
        
    }

}

export default trackMixin;