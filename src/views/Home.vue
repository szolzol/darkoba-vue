<template>
  <div class="home">
    <p class="rules"> Minden
      feladványnál szükségetek lesz egy játékmesterre, a
      megoldást csak ő olvashatja el. A többiek ezután olyan
      kérdéseket tesznek fel neki, amelyekre IGEN-nel vagy NEM-mel tud
      a játékmester válaszolni. Ha eleinte a sötétben is tapogatóztok,
      jó logikával lépésről-lépésre eljuthattok a megoldásig.
      <br>
      <br>
      Amikor a játékmester úgy dönt, hogy valaki rájött a történet
      nyitjára, felolvassa a többieknek a megfejtést, felfedve a
      rejtély teljes megoldását.
    </p>
    <div class="errortext" v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import getPosts from '../composables/getPosts'

// component imports
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Home',
  components: { PostList, Spinner },
  setup() {
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }
  },
}
</script>

<style scoped>
.rules {
  margin: 20px auto 20px auto;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #cccccc;
  border-top: 1px dashed #cccccc;
  color: rgb(109, 109, 109);
  text-align: justify;

}
</style>
