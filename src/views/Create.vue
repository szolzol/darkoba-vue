<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Cím:</label>
      <input v-model="title" type="text" required>
      <label>Feladvány:</label>
      <textarea v-model="body" required></textarea>
      <label>Megoldás:</label>
      <textarea v-model="answer" required></textarea>
      <label>Tagok (Enter a bevitelhez):</label>
      <input @keydown.enter.prevent="handleKeydown" v-model="tag" type="text">
      <div v-for="tag in tags" :key="tag" class="pill">
        #{{ tag }}
      </div>
      <button>Feladvány hozzáadása</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { db } from '../firebase/config'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const answer = ref('')
    const tags = ref([])
    const tag = ref('')
    const storyIcon = ref('')
    const postDate = ref('')

    const router = useRouter()

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g, '') // remove all whitespace
        tags.value.push(tag.value)
      }
      tag.value = ''
    }

    const handleSubmit = async () => {
      const post = {
        // id: Math.floor(Math.random() * 10000),
        title: title.value,
        body: body.value,
        answer: answer.value,
        tags: tags.value,
        storyIcon: "fa - solid fa- ghost",
        postDate: serverTimestamp()
      }
      //JSON server code:
      // await fetch('192.168.0.50:8181/posts', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(post)
      // })

      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "posts"), post);
      console.log("Document written with ID: ", docRef.id);

      router.push({ name: 'Home' })
    }

    return { postDate, storyIcon, answer, body, title, tags, tag, handleKeydown, handleSubmit }
  },
}
</script>

<style scoped>
input,
textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #b9b9b9;
  margin: 10px 0px 40px 0px;
  font-size: 16px;
  font-family: 'Tourney', cursive;
  font-weight: 700;
}

textarea {
  height: 110px;
}
</style>