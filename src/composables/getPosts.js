import { ref } from 'vue'
import { db } from '../firebase/config'
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

const getPosts = () => {

  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      //JSON server code:
      
      // Terminal: npx json-server --host 192.168.0.50 --watch data/db.json --port 8181
      
      // let data = await fetch('http://192.168.0.50:8181/posts')
      // if(!data.ok || posts.length <1) {
      //   throw Error('O-ó... Nincsenek adatok...')
      // }
      // posts.value = await data.json()
      const querySnapshot = await getDocs(collection(db, "posts"));
;
      posts.value = querySnapshot.docs.map(doc => {
        // console.log(doc.data())
        return { ...doc.data(), id: doc.id }
      })
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { posts, error, load }
}

export default getPosts