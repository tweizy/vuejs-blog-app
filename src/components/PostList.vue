<template>
  <div class="row">
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
</template>

<script>
export default {
  name: "PostList",
  props: {
    posts: Array,  // Array of posts to display
  },
};
</script>
