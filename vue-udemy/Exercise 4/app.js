new Vue({
  el: '#exercise',
  data: {
    test : true,
    class1V : 'class1',
    class2V : 'class2',
    inputClass : 'class1',
    inputStyle : 'effect2',
    classBinding : {
      'class1' : true
    },
    className : '11',
    shouldChoose : false

  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.test = !vm.test;
      }, 2000)
    
    }
  },
  computed: {
    classBindingComputed: function() {
        return this.inputClass
    },
    computedBinding2() {
      return {
        class2 : this.shouldChoose == 'true',
      }
    }
  }
});
