<template>
  <div class="container mt-5" v-if="post">
    <div class="card">
      <div class="card-body">
        <h1 class="card-title">{{ post.title }}</h1>
        <p class="card-text">{{ post.body }}</p>
        <ul class="list-inline">
          <li v-for="tag in post.tags" :key="tag" class="list-inline-item badge bg-secondary">
            {{ tag }}
          </li>
        </ul>
        <router-link to="/" class="btn btn-primary mt-3">Back to Posts</router-link>
      </div>
    </div>
  </div>
  <div v-else class="container mt-5">
    <div class="alert alert-danger text-center">Post not found</div>
  </div>
</template>

<script>
import { getPost } from "../composables/getPost";

export default {
  data() {
    return {
      post: null,  // Stores the post fetched by ID
    };
  },
  async created() {
    const postId = this.$route.params.id;
    this.post = await getPost(postId);  // Fetch post by ID
  },
};
</script>

<style scoped>
/* Custom styles if necessary */
</style>
