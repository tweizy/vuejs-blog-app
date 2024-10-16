import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CreatePostView from '../views/CreatePostView.vue';
import PostDetailView from '../views/PostDetailView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/create', component: CreatePostView },
  { path: '/posts/:id', component: PostDetailView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  // Ensure history mode is used
  routes,
});

export default router;
