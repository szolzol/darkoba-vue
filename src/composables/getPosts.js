import { ref } from 'vue'

const getPosts = () => {

  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      // simulate delay
      // await new Promise(resolve => {
        // setTimeout(resolve, 2000)
      // })

      let data = await fetch('http://192.168.0.50:8181/posts')
      if(!data.ok || posts.length <1) {
        throw Error('O-ó... Nincsenek adatok...')
      }

      posts.value = await data.json()
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { posts, error, load }
}

export default getPosts