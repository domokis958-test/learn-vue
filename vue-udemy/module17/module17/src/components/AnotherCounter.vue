<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decreament(100)">Decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'increment',
                'decreament'
            ])
        }
    }
</script>