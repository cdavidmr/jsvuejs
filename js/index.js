
Vue.use(VueMaterial)
var cons = 0;
var App = new Vue({
  el: '#appID',
  methods: {
    greet: function (message) {
      alert(message)
    }
  }
})

for (i=0;i<9;i++){
  console.log(i)
  cons=i;
}
var App2 = new Vue({
  el: '#app2',
  data: {
    counter: cons,
  }
})