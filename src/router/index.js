import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardPage.vue')
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: () => import('../views/SponsorsPage.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('../views/StudentsPage.vue')
    },
    {
      path: '/add-student',
      name: 'add-student',
      component: () => import('../views/AddStudentPage.vue')
    },
    {
      path: '/student-info',
      name: 'student-info',
      component: () => import('../views/StudentInfoPage.vue')
    }
  ]
})

export default router
