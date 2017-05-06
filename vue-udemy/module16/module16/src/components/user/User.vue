<template>
<div>
    <h1>The user page</h1>
    <hr>
    <!--<p>Loaded id: {{ id}} </p>-->
    <button @click="navigateToHome">Go to home</button>
    <hr>
    <router-view></router-view>
</div>
</template>

<script>
    export default {
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }

        // },
        // watch: {
        //     '$route'(to, from) {
        //         this.id = to.params.id;
        //     }
        // },
        methods : {
            navigateToHome() {
                this.$router.push({
                    name : 'home'
                })
                
            }
        }
    }
</script>