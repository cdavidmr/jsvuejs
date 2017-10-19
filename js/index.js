Vue.use(VueMaterial)

var App = new Vue({
  el: '#appID',
    methods: {
    greet: function (message) {
      alert(message)
    }
  }
})