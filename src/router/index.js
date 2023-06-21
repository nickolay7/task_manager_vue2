import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';
import Tasks from '@/pages/Tasks.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/tasks', component: Tasks },
];

const router = new VueRouter({
  routes,
});

export default router;
