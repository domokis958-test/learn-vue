<template>
    <div>
        <h3>Edit the User</h3>
        <p>user has locale {{ $route.query.locale }}</p>
        <p>user has q {{ $route.query.q }}</p>
        <button class="btn btn-primary" 
        @click="test"
        >Confirm</button>
        <p>{{confirmed}}
        </p>
        <div style="height : 700px"></div>
        <p id="data">Some extra data</p>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                confirmed: false
            }

        },
        methods: {
            test() {
                this.confirmed = true;
                console.log(this.confirmed);
            }

        },
        beforeRouteLeave(to, from, next) {
            console.log(this.confirmed);
            if (this.confirmed) { // checking if user is authenticated. here just making it true
                next();
            } else {
                if (confirm('Are you sure')) {
                    next();
                } else {
                    next(false);
                }
            }
        }
    }

</script>