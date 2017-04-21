Vue.component('my-component', {
    data() {
        return {
            status:'Critical'
        }       
    },
    template: '<p>Server status : {{ status }}</p>'
})

new Vue({
    el:'#app'
});