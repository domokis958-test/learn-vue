<template>
    <div class="col-xs-12 col-sm-6">
    <p v-if="!server"> Please select a server</p>
    <p v-else>Server # {{server.id}} , Status : {{ server.status }}</p>
    <button @click="resetStatus">Change to normal</button>
    </div>

</template>

<script>
import {serverBus} from '../../main.js'

export default {
    data() {
        return {
            server : null
        }
    },
    created() {
        serverBus.$on(('serverSelected'), (server) => {
            this.server = server;
        });
    },
    methods: {
        resetStatus() {
            this.server.status = 'Normal';
        }
    }
}
</script>

<style>

</style>
