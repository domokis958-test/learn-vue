new Vue({
    el:'#app',
    data: {
        counter:0
    },
    methods: {
        increase: function() {
            this.counter = this.counter +1 ;
        }
    }
})