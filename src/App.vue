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
/* Global styles are here only  */

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

.post {
  margin: 0 10px 0 0px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #cccccc;
}

h3,
label {
  display: inline-block;
  position: relative;
  font-size: 22px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}

h3::before,
label::before {
  content: "";
  display: block;
  width: 105%;
  height: 115%;
  background: #aa0000;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}

.pillbox {
  display: flex;
  align-items: stretch;
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
  font-family: 'Tourney', cursive;
  font-weight: 900;
  display: block;
  margin-top: 50px;
  margin-bottom: 30px;
  background: #444;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
}

.errortext {
  color: whitesmoke;
  background: #aa0000 !important;
  padding: 10px !important;
  border-radius: 0 !important;
  position: relative;
  display: inline-block !important;
  box-shadow: 2px 2px 2px #aaaaaa;
  margin-top: 40px;
}
</style>
