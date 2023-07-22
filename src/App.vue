<!-- Terminal: npm run build && firebase deploy --only hosting:darqba -->

<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Navbar, Footer }
}
</script>

<style>
/* Google Fonts import  */
@import url('https://fonts.googleapis.com/css2?family=Tourney:ital,wght@0,200;0,400;0,600;0,700;0,900;1,200;1,600;1,700;1,900&display=swap');

#app {
  font-family: 'Tourney', cursive;
  font-weight: 900;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444;
  max-width: 800px;
  margin: 10px auto;
  text-align: justify;
  padding-left: 10px;
  padding-right: 10px;

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

button {
  display: block;
  margin-top: 50px;
  margin-bottom: 30px;
  background: #444;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px
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
