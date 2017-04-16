new Vue({
    el:'#app',
    data: {
        counter:0,
        secondCounter: 0
    },
    methods: {
        result() {
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
        }
    }
})
