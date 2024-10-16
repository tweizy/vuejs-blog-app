<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <ul class="list-inline">
      <li v-for="tag in tags" :key="tag" class="list-inline-item">
        <span class="badge bg-secondary">{{ tag }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TagCloud",
  props: {
    tags: Array,  // Array of tags
  },
};
</script>
