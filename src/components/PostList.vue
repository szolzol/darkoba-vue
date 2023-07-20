<template>
  <div class="post-list">
    <div v-if="posts.length">

      <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post" />
      </div>
    </div>
    <div class="errortext" v-else>
      Nincsenek feladványok ilyen taggel...
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'

// component imports
import SinglePost from './SinglePost.vue'

export default {
  props: ['posts'],
  components: { SinglePost },
  setup() {

  }
}
</script>

<style scoped></style>