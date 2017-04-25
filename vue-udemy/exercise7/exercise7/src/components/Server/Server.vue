<template>
    <li class="list-group-item" style="cursor : pointer" @click="serverSelected">Server # {{ server.id }}
    </li>
        </ul>
    </div>
</template>

<script>
import {serverBus} from '../../main.js'
export default {
    props: {
        server : Object
    },
    methods: {
        serverSelected() {
            serverBus.$emit('serverSelected', this.server);
        }
    }
}
</script>

<style>

</style>
