new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alert: function() {
                alert("222");
            },
            store: function(event) {
                this.value = event.target.value

            }

        }
    });