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
      path: '/apply-sponsor',
      name: 'apply-sponsor',
      component: () => import('../views/ApplyAsSponsor.vue')
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
      path: '/sponsors/:id',
      name: 'sponsor-info',
      component: () => import('../views/SponsorInfoPage.vue')
    },

    {
      path: '/students',
      name: 'students',
      component: () => import('../views/StudentsPage.vue')
    },
    {
      path: '/students/:id',
      name: 'student-info',
      component: () => import('../views/StudentInfoPage.vue')
    },
    {
      path: '/add-student',
      name: 'add-student',
      component: () => import('../views/AddStudentPage.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  const auth = localStorage.getItem('token')

  if (auth && to.name === 'login') {
    next('/')
  }

  if (!auth && to.name !== 'login') {
    next({name: 'login'})
  } else {
    next()
  }
  console.log(to)
})
export default router
