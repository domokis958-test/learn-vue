<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'Author'">Author</button>
                <button @click="selectedComponent = 'New'">New</button>
                <hr>
                <p> {{ selectedComponent }}</p>
                <app-quote>
                    <h2 slot="title">{{quoteTitle}}</h2>
                    <p slot>A wonderful Quote</p>
                </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data() {
            return {
                quoteTitle : 'The Quote',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
        
    }
</script>

<style scoped>
h2 {
        color: yellow;
    }
</style>
