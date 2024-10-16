<template>
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
</template>

<script>
export default {
  name: "SinglePost",
  props: {
    post: Object,  // The post object to display
  },
};
</script>
