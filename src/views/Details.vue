<template>
  <div class="details">
    <div class="errortext" v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <p class="answer">{{ post.answer }}</p>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPost from '@/composables/getPost'
import { useRoute } from 'vue-router'

// component imports
import Spinner from '../components/Spinner.vue'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute()
    // console.log(route)
    // console.log(route.params)
    const { error, post, load } = getPost(route.params.id)

    load()

    return { error, post }
  },
}
</script>

<style scoped>
.post {
  max-width: 90%;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}

.answer {
  white-space: pre-wrap;
  font-style: italic;

}
</style>