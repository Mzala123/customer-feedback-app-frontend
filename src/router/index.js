import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import OurStaff  from '../views/OurStaff.vue'
import ContactUs from '../views/ContactUs.vue'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'
import NavHome from '../views/NavHome.vue'
import SideNav from '../components/SideNav.vue'

import AdminDashboard from '../views/admin/AdminDashboard.vue'
import CreateUser from '../views/admin/CreateUser.vue'
import UserList from '../views/admin/UserList.vue'
import AdminProfile from '../views/admin/AdminProfile.vue'

import CustomerDashboard from '../views/customer/CustomerDashboard.vue'



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
      component: LoginView
     },
     {
      path: '/register-account',
      name: 'register',
      component: RegisterView
     }
    ],
  },
  {
    path: '/sidenav',
    component: SideNav,
    children:[
      {
        path: '/admin_dashboard',
        name: 'admin-dashboard',
        component: AdminDashboard
       },
       {
        path: '/admin_profile_settings',
        name: 'admin-profile-settings',
        component: AdminProfile
       },
       {
        path: '/user_list',
        name: 'user-list',
        component: UserList
       },
       {
        path: '/add_user',
        name: 'add-user',
        component: CreateUser
       },
       {
        path:'/customer_dashboard',
        name:'customer-dashboard',
        component:CustomerDashboard
       }
    ]
  }
  

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
