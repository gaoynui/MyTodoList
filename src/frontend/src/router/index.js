import Vue from 'vue'
import Router from 'vue-router'

// 加载组件，如果需要懒加载请参阅文档
import part1 from '../pages/part1.vue'
import part2 from '../pages/part2.vue'
import part3 from '../pages/part3.vue'
import part4 from '../pages/part4.vue'
import part5 from '../pages/part5.vue'
import part6 from '../pages/part6.vue'
import part7 from '../pages/part7.vue'
import part8 from '../pages/part8.vue'

Vue.use(Router)

// routes要求为一个数组，path指定路由，component指定组件
export default new Router({
  routes: [
    {
      path: '/part1',
      name: 'part1',
      component: part1
    },
    {
      path: '/part2',
      name: 'part2',
      component: part2
    },
    {
      path: '/part3',
      name: 'part3',
      component: part3
    },
    {
      path: '/part4',
      name: 'part4',
      component: part4
    },
    {
      path: '/part5',
      name: 'part5',
      component: part5
    },
    {
      path: '/part6',
      name: 'part6',
      component: part6
    },
    {
      path: '/part7',
      name: 'part7',
      component: part7
    },
    {
      path: '/part8',
      name: 'part8',
      component: part8
    }
  ]
})
