<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decreament">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        methods: {
            ...mapMutations([
                'increment',
                'decreament'
            ])
        }
    }
</script>