new Vue({
    el:'#app',
    data: {
        counter:0,
        secondCounter: 0
    },
    methods: {
        result() {
            console.log(" method run");
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
        }
    },
    computed: {
        output() {
            console.log("conmputed method run");
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
        }
    },
    watch: {
        counter: function(value) {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);

        }
    }
})
