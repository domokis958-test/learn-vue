new Vue({
    el: '#exercise',
    data: {
        YOUR_NAME:'prashant',
        AGE:'21',
        link: 'http://orig06.deviantart.net/c7ec/f/2010/004/2/2/four_seasons_by_nalmes.jpg'
    },
    methods: {
        getRandom: function() {
            return Math.random();
        }
    }
})