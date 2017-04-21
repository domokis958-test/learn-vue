var data = {
    title: 'The VueJS Instance',
    showParagraph: false
  };

Vue.component('hello', {
  template: '<h1>Hello!</h1>'
})

var vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs.myButton);
      this.$refs.myButton.innerText = 'Test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1');

vm1.newProp = 'New'; // this also works. we are creating new property. but this is not watched by vue and is useless for many things.
console.log(vm1.$data === data);
vm1.$refs.heading.innerText = 'Something else';

setTimeout(function() {
  vm1.title = "Changed by title";
  vm1.show();
  
}, 3000);
var vm2 = new Vue({
  el : '#app2',
  data : {
    title: 'The second instance' 
  },
  methods : {
    onChange() {
       vm1.title = 'Changed';
    }
  }
});

var vm3 = new Vue({
  el: 'hello',
  template: '<h1>Hello</h1>',
});

