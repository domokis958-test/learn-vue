<template>
    <div>
        <h1>Trade or view your portfolio</h1>
        <h6>You may save and load your data</h6>
        <h6>Click on 'End day' to begin a new Day</h6>
        <hr>
        <p>Your funds {{funds | currency }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
            
        },
        created () {
            this.$http.get('/user?ID=12345')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>