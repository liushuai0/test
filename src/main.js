import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
new Vue({
  el: '#app',
  render: h => h(App)
})


axios.get(
  'http://httpbin.org',
  ).then(res=>{
  console.log(res);
})
