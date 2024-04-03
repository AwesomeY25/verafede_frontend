import { createRouter, createWebHistory } from 'vue-router';
import AssignedTasks from './components/AssignedTasks.vue';
import TaskDetails from './components/TaskDetails.vue';

const routes = [
  { path: '/', redirect: '/tasks' }, // Redirect '/' to '/tasks'
  { path: '/tasks', name: 'AssignedTasks', component: AssignedTasks },
  { path: '/task/:id', name: 'TaskDetails', component: TaskDetails, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
