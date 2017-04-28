<template>
    <div>
                <h1>Filters & Mixins</h1>
                <p>{{ text | toLowercase }}</p>
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>

    </div>
</template>

<script>
    import {fruitMixin} from './FruitMixin'
    export default {
        mixins: [fruitMixin],
        created() {
            console.log('list created');
        }
    }
</script>

<style>

</style>
