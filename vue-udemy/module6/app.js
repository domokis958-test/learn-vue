var data = {
    status : 'Critical'
}

var cmp =  {
    data() {
        return {
    status : 'Critical'
    }
    },
    template: '<p>Server status : {{ status }} (<button @click="change">change</button></p>',
    methods: {
        change() {
            this.status = "changed"
        }
    }
}

new Vue({
    el:'#app',
    components: {
        'my-component' : cmp
    }
});

new Vue({
    el:'#app2'
});