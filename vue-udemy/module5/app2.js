new Vue({
  el: '#app',
  data: {
      title: 'The VueJs instance',
      changed: 'Changed'
  },
  beforeCreate() {
      console.log("before create ");
  },
  created() {
      console.log("created");
  },
  beforeMount() {
      console.log("before mount");
  },
  mounted() {
      console.log("mounted");
  },
  beforeUpdate() {
      console.log("before update");
  },
  updated() {
      console.log("update");
  },
  beforeDestroy() {
      console.log("before destroy");
  },
  destroyed() {
      console.log("destroyed");
  },
  methods: {
      destroy() {
          this.$destroy();
      }
  }
});

