<template>
  <header>
    <router-link :to="{ name: 'Home' }">
      <h1 class="darquba">DarQba</h1>
    </router-link>
    <nav>
      <router-link :to="{ name: 'Home' }">Feladányok</router-link>
      <router-link :to="{ name: 'Create' }">Írj Te is!</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.darquba {
  font-weight: 900;
  background: linear-gradient(to right,
      #aa0000 20%,
      #000000 30%,
      #444 70%,
      #e73434 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 10s ease-in-out infinite alternate;
}

@keyframes textShine {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  padding-bottom: 30px;
}

header h1 {
  color: #444;
  font-size: 48px;
  margin: 10px 0px 10px 0px;

}

header a {
  color: #bbb;
  text-decoration: none;
  padding-right: 20px;

}

header a.router-link-active {
  color: #444;
}

nav {
  margin: 10px 0 10px 0px;
}
</style>