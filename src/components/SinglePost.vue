<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <div class="title">
        <h3>{{ post.title }}
          <span class="storyIcon">
            <font-awesome-icon :icon="post.storyIcon" />
          </span>
        </h3>
      </div>
    </router-link>
    <p>{{ snippet }}</p>
    <div class="pillbox">
      <div v-for="tag in post.tags" :key="post.tag">
        <router-link :to="{ name: 'Tag', params: { tag: tag } }">
          <span class="pill">#{{ tag }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 150) + '...'
    })

    return { snippet }
  }
}
</script>

<style scoped>
.storyIcon {
  color: white;
  padding-left: 15px;
  font-size: 1em
}
</style>
