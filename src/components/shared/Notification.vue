<template>
    
    <div class="container">
        <div class="columns">
            <div class="column is-5 is-offset-4">
                <div class="notification is-danger">
                    <slot name="body">
                        <!-- Este es el texto default -->
                        Algo anduvo mal
                    </slot>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

.notification {
    margin: 10px
}

</style>