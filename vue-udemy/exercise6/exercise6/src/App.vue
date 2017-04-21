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
    import Header from './Header.vue'
    import Footer from './Footer.vue'
    import Servers from './Servers.vue'
    import ServerDetails from './ServerDetails.vue'

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
