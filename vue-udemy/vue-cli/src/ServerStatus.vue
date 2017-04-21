<template>
    <div>
    <p>Server Status : {{status}} </p>
    <hr>
    <button @click="changeStatus">Change</button>
    </div> 
</template>

<<script>
    export default {
        data() {
        return {
            status : 'Critical'
        }
    },
    methods: {
        changeStatus() {
            this.status = 'Changed'
        }
    }
    }

</script>