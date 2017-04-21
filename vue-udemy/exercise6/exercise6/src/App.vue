<template>
    <div class="container">
        <my-header></my-header>
        <hr>
        <div class="row">
            <my-servers></my-servers>
            <my-ServerDetails></my-ServerDetails>
        </div>
        <hr>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import Servers from './components/Servers.vue'
    import ServerDetails from './components/ServerDetails.vue'

    export default {
        components: {
            'my-header' : Header,
            'my-footer' : Footer,
            'my-servers' : Servers,
            'my-ServerDetails' : ServerDetails
        }
    }
</script>

<style>

</style>
