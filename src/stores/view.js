import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useViewStore = defineStore(
  'view',
  () => {
    const views = ref([])

    /**
     * 添加缓存页面
     * @param view
     */
    function addView(view) {
      console.log('addView')
      if (views.value.indexOf(view.name) > -1) return
      if (!view?.meta?.noCache) {
        views.value.push(view.name)
      }
      console.log(view.value)
    }

    /**
     * 删除某个页面
     * @param view
     */
    function delView(view) {
      const index = views.value.indexOf(view.name)
      index > -1 && views.value.splice(index, 1)
    }

    /**
     * 删除所有页面
     */
    function delAllViews() {
      views.value = []
    }

    return { views, addView, delView, delAllViews }
  },
  {
    persist: {
      storage: sessionStorage
    }
  }
)
