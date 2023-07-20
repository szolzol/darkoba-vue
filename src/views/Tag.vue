<template>
    <div class="tagpage">
        <div class="pill">
            #{{ route.params.tag }}
        </div>
        <router-link :to="{ name: 'Home' }">
            <div class="pill">
                X
            </div>
        </router-link>
        <div class="errortext" v-if="error">{{ error }}</div>
        <div v-if="postsWithTag">
            <PostList :posts="postsWithTag" />
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
// import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'

export default {
    name: 'Tag',
    components: { PostList, Spinner },
    props: ['post'],
    setup(props) {

        const router = useRouter()
        const route = useRoute()

        const { posts, error, load } = getPosts()
        load()

        const postsWithTag = computed(() => {
            return posts.value.filter(p => p.tags.includes(route.params.tag))
        })

        return { router, route, posts, error, postsWithTag }
    }
}
</script>

<style scoped></style>