import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import SignUp from '@/views/SignUp.vue'
import SignIn from '@/views/SignIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	  {
		path: '/',
		name: 'Home',
		component: Home
	  },
	  {
		path: '/signup',
		name: 'SignUp',
		component: SignUp
	  },
	  {
		path: '/signin',
		name: 'SignIn',
		component: SignIn
	  }
  ]
})

export default router
