import { createRouter, createWebHistory } from 'vue-router'
import { useViewStore } from '@/stores/view.js'
import routes from './routes'

console.log(import.meta)

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
  // 切换路由后，平滑滚动到顶部
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
      behavior: 'smooth'
    }
  }
})

router.beforeEach((to, from, next) => {
  useViewStore().addView(to)
  next()
})

router.afterEach(() => {
  // window.scrollTo(0, 0)
})

export default router
