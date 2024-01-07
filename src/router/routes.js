import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'HOME'
    },
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'ABOUT',
      noCache: true
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

export default routes
