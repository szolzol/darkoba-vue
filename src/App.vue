<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444;
  max-width: 800px;
  margin: 0 auto;
}

.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}

.errortext {
  color: whitesmoke;
  background: #aa0000 !important;
  padding: 10px !important;
  border-radius: 0 !important;
  position: relative;
  display: inline-block !important;
  box-shadow: 1px 1px 1px #aaaaaa;
  margin-top: 40px;
}
</style>
