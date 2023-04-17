import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import OurStaff  from '../views/OurStaff.vue'
import ContactUs from '../views/ContactUs.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import NavHome from '../views/NavHome.vue'


const routes = [
  {
    path: '/',
    component: NavHome,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
       },
     {
      path: '/about',
      name: 'about-us',
      component: AboutView
     },{
      path: '/our_stuff',
      name: 'our-stuff',
      component: OurStaff
     },
     {
      path: '/contact_us',
      name: 'contact-us',
      component: ContactUs
     },
     {
      path: '/login',
      name: 'login',
      component: Login
     },
     {
      path: '/register-account',
      name: 'register',
      component: Register
     }
    ]
  },


  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
  
})

export default router
