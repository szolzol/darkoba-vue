import { ref } from 'vue'

const getPost = (id) => {

  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      // simulate delay
      // await new Promise(resolve => {
        // setTimeout(resolve, 2000)
      // })

      let data = await fetch('http://192.168.0.50:8181/posts/' + id)
      if (!data.ok) {
        throw Error('Nincs ilyen feladványunk...')
      }
      post.value =  await data.json()
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { post, error, load } 
}

export default getPost