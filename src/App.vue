<template>
  <div class="home-div">
    <HomeView/>
  </div>
</template>
<script>
import HomeView from './views/HomeView.vue';
export default {
  components:{
    HomeView
  }
}
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}



</style>
