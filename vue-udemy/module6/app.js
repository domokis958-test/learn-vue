var data = {
    status : 'Critical'
}

Vue.component('my-component', {
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
})

new Vue({
    el:'#app'
});