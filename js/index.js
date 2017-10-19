Vue.use(VueMaterial)

var App = new Vue({
  el: '#appID',
  methods: {
    greet: function (message) {
      alert(message)
    }
  }
})

var App2 = new Vue({
  el: '#app2',
  data: {
    counter: 0,
  }
})