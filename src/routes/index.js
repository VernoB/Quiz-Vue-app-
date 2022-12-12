import {createRouter, createWebHashHistory} from 'vue-router';
import Quizes from '../views/Quizes.vue'
import Quiz from '../views/Quiz.vue'
import  error404 from '../views/404.vue';


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: Quizes },
    {path: '/quiz/:id(\\d+)', name: 'quiz', component: Quiz},
    {path: '/catchall(.*)*', name: '404', component: error404}
  ]
})
export default router