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
import { doc, setDoc, collection, addDoc } from "firebase/firestore";


export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const answer = ref('')
    const tags = ref([])
    const tag = ref('')

    const router = useRouter()
    //console.log(router)
    //router.go(1)
    //router.go(-1)

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
        tags: tags.value
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

    return { answer, body, title, tags, tag, handleKeydown, handleSubmit }
  },
}
</script>

<style scoped>
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #b9b9b9;
}

textarea {
  height: 100px;
}

label {
  display: inline-block;
  margin: 0 20px 0 40px;

  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}

label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #444;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}

button {
  display: block;
  margin-top: 30px;
  margin-bottom: 30px;
  background: #aa0000;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px
}
</style>