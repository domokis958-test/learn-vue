<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decreament">Decrement</button>
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