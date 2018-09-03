<template>
  <div id="app">
    <navbar1></navbar1>
    <img src="./assets/logo.png" >
  <hr>
    <router-view></router-view>

  </div>
</template>

<script>
  import service from './components/Service.vue'
  import bootstrap from './components/Bootstrap.vue'
  import navbar1 from './components/NavBar.vue'


  export default {
  name: 'app',
    components: {
      service,
        bootstrap,
        navbar1
    },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
