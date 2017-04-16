new Vue({
	el:'#app',
  data:{
  	title:'test'
  },
  methods: { 
    changeTitle: function(event) {
      this.title = event.target.value;
    }
  }
});