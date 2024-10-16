<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Create New Post</h1>
    <form @submit.prevent="submitPost" class="mb-5">
      <div class="form-group mb-3">
        <label for="title" class="form-label">Title</label>
        <input v-model="newPost.title" type="text" id="title" class="form-control" required />
      </div>
      <div class="form-group mb-3">
        <label for="body" class="form-label">Body</label>
        <textarea v-model="newPost.body" id="body" class="form-control" rows="4" required></textarea>
      </div>
      <div class="form-group mb-3">
        <label for="tags" class="form-label">Tags (comma-separated)</label>
        <input v-model="newPost.tags" type="text" id="tags" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary w-100">Create Post</button>
    </form>
    <router-link to="/" class="btn btn-secondary w-100">Back to Posts</router-link>
  </div>
</template>

<script>
import { addPost } from "../composables/createPost";

export default {
  data() {
    return {
      newPost: {
        title: "",
        body: "",
        tags: "",
      },
    };
  },
  methods: {
    async submitPost() {
      const post = {
        title: this.newPost.title,
        body: this.newPost.body,
        tags: this.newPost.tags.split(",").map(tag => tag.trim()),  // Format tags as an array
      };

      // Call the addPost function to insert the post into Firestore
      await addPost(post);

      // Redirect to the homepage after successfully creating a post
      this.$router.push("/");
    },
  },
};
</script>
