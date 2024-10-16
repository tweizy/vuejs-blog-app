<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">All Blog Posts</h1>
    <div v-if="posts.length" class="row">
      <div v-for="post in posts" :key="post.id" class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
            <ul class="list-inline">
              <li v-for="tag in post.tags" :key="tag" class="list-inline-item badge bg-secondary">
                {{ tag }}
              </li>
            </ul>
            <router-link :to="'/posts/' + post.id" class="btn btn-primary mt-3">View Post</router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="alert alert-warning text-center">No posts available</div>
    <router-link to="/create" class="btn btn-success w-100 mt-4">Create New Post</router-link>
  </div>
</template>

<script>
import { getPosts } from "../composables/getPosts";

export default {
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = await getPosts();  // Fetch posts from Firestore
  },
};
</script>
