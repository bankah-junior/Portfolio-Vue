import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/welcome/Welcome.vue'
import About from '../views/about/About.vue'
import Certificates from '../views/certificates/Certificates.vue'
import Profile from '../views/profile/Profile.vue'
import Projects from '../views/projects/Projects.vue'
import Technologies from '../views/technologies/Technologies.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: Certificates
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/technologies',
    name: 'Technologies',
    component: Technologies
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
