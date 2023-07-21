<template>
  <div class="details">
    <div class="errortext" v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <div class="storyIcon">
        <font-awesome-icon :icon="post.storyIcon" size="6x" />
      </div>
      <p class="pre">{{ post.body }}</p>
      <p class="answer">{{ post.answer }}</p>
      <button @click="handleClick" class="delete">Feladvány törlése</button>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPost from '@/composables/getPost'
import { useRoute, useRouter } from 'vue-router'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase/config'
import Spinner from '../components/Spinner.vue'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const { error, post, load } = getPost(route.params.id)

    load()

    const handleClick = async () => {
      await deleteDoc(doc(db, "posts", props.id));
      router.push('/')
    }
    return { error, post, handleClick }
  },
}
</script>


<style scoped>
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
  font-weight: 700;

}

button.delete {
  background: #aa0000;
}

.storyIcon {
  margin-top: 30px;
}
</style>