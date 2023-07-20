<template>
  <header>
    <router-link :to="{ name: 'Home' }">
      <h1>Darkoba</h1>
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
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
}

header h1 {
  color: #444;
  font-size: 48px;
  margin: 10px 0px 10px 0px;

}

header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 30px;
}

header a.router-link-active {
  color: #444;
  font-weight: bold;
}
</style>