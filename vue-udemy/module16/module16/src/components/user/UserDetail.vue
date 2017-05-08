<template>
    <div>
        <h3>Some User Details</h3>
        <p>user has id {{ $route.params.id }}</p>
        <router-link tag="button" :to="link" class="btn btn-primary">Edit user</router-link>
    </div>


</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en',
                        q: '100'
                    },
                    hash: '#data'
                }
            }
        },
        beforeRouteLeave: (to, from, next) => {
            // ... I cant access this.link here as this has not been created. we do it inside next()
            // next(vm => {
            //     vm.link
            // });


            if (true) { // checking if user is authenticated. here just making it true
                next();
            } else {
                next(false);
            }
        }
    }

</script>