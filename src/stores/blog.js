import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 模拟博客数据（实际项目中应通过API获取）
const mockArticles = [
  {
    id: 1,
    title: '初识Vue3的组合式API',
    slug: 'vue3-composition-api-intro',
    content: `# 初识Vue3的组合式API

Vue 3中的组合式API（Composition API）是一种新的编写Vue组件的方式，它提供了更好的代码组织和逻辑复用能力。

## 为什么需要组合式API？

在Vue 2中，我们使用选项式API（Options API）来组织代码，包括data、methods、computed等选项。随着组件变得复杂，相关联的逻辑会分散在不同的选项中，导致代码可读性下降。

组合式API允许我们基于逻辑功能组织代码，而不是基于选项类型。

## 核心概念

- setup()函数：组合式API的入口点
- 响应式API：ref、reactive、computed等
- 生命周期钩子：onMounted、onUpdated等

## 示例代码

\`\`\`js
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)

    function increment() {
      count.value++
    }

    onMounted(() => {
      console.log('组件已挂载')
    })

    return {
      count,
      increment
    }
  }
}
\`\`\`

通过组合式API，我们可以更灵活地组织和复用逻辑，提高代码的可维护性。`,
    excerpt: 'Vue 3中的组合式API（Composition API）是一种新的编写Vue组件的方式，它提供了更好的代码组织和逻辑复用能力。',
    cover: 'https://picsum.photos/seed/vue3/800/400',
    author: '张三',
    category: { id: 1, name: '前端开发', slug: 'frontend' },
    tags: ['Vue.js', '前端', 'JavaScript'],
    createdAt: '2023-07-15T10:00:00Z',
    viewCount: 1024
  },
  {
    id: 2,
    title: 'Element Plus常用组件介绍',
    slug: 'element-plus-components',
    content: `# Element Plus常用组件介绍

Element Plus是一个基于Vue 3的组件库，提供了丰富的UI组件，帮助开发者快速搭建美观的用户界面。

## 安装

\`\`\`bash
npm install element-plus
\`\`\`

## 常用组件

### 按钮（Button）

按钮组件用于触发操作。

\`\`\`vue
<template>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</template>
\`\`\`

### 表单（Form）

表单组件用于数据收集、验证和提交。

\`\`\`vue
<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="用户名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: ''
})

const onSubmit = () => {
  console.log('表单提交', form)
}
</script>
\`\`\`

### 表格（Table）

表格组件用于展示大量结构化数据。

\`\`\`vue
<template>
  <el-table :data="tableData">
    <el-table-column prop="date" label="日期"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>

<script setup>
const tableData = [
  {
    date: '2023-01-01',
    name: '张三',
    address: '北京市朝阳区'
  },
  {
    date: '2023-01-02',
    name: '李四',
    address: '上海市浦东新区'
  }
]
</script>
\`\`\`

Element Plus提供了丰富的组件和主题定制能力，极大地提高了Vue 3应用的开发效率。`,
    excerpt: 'Element Plus是一个基于Vue 3的组件库，提供了丰富的UI组件，帮助开发者快速搭建美观的用户界面。',
    cover: 'https://picsum.photos/seed/element/800/400',
    author: '李四',
    category: { id: 1, name: '前端开发', slug: 'frontend' },
    tags: ['Element Plus', 'UI组件', 'Vue.js'],
    createdAt: '2023-08-01T14:30:00Z',
    viewCount: 856
  },
  {
    id: 3,
    title: 'Pinia状态管理实践',
    slug: 'pinia-state-management',
    content: `# Pinia状态管理实践

Pinia是Vue的官方状态管理库，专为Vue 3设计，提供了简单易用的API和出色的TypeScript支持。

## 特点

- 直观的API设计
- 完整的TypeScript支持
- 开发工具支持（devtools扩展）
- 轻量级（约1kb）
- 模块化设计，支持代码拆分

## 安装

\`\`\`bash
npm install pinia
\`\`\`

## 基本用法

### 创建Store

\`\`\`js
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    },
    async fetchInitialCount() {
      // 模拟API请求
      const data = await fetch('/api/count')
      const json = await data.json()
      this.count = json.count
    }
  }
})
\`\`\`

### 使用Store

\`\`\`vue
<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <p>Double count: {{ counter.doubleCount }}</p>
    <button @click="counter.increment()">Increment</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

// 如果需要，可以调用action加载数据
counter.fetchInitialCount()
</script>
\`\`\`

## 组合式API风格

Pinia也支持使用组合式API风格定义Store：

\`\`\`js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  async function fetchInitialCount() {
    // 模拟API请求
    const data = await fetch('/api/count')
    const json = await data.json()
    count.value = json.count
  }

  return { count, doubleCount, increment, fetchInitialCount }
})
\`\`\`

Pinia相比Vuex有更简洁的API和更好的TypeScript支持，是Vue 3项目中状态管理的推荐选择。`,
    excerpt: 'Pinia是Vue的官方状态管理库，专为Vue 3设计，提供了简单易用的API和出色的TypeScript支持。',
    cover: 'https://picsum.photos/seed/pinia/800/400',
    author: '王五',
    category: { id: 1, name: '前端开发', slug: 'frontend' },
    tags: ['Pinia', 'Vue.js', '状态管理'],
    createdAt: '2023-08-15T09:45:00Z',
    viewCount: 735
  },
  {
    id: 4,
    title: '莫兰迪色系在Web设计中的应用',
    slug: 'morandi-colors-in-web-design',
    content: `# 莫兰迪色系在Web设计中的应用

莫兰迪色系是以意大利画家乔治·莫兰迪（Giorgio Morandi）命名的一组低饱和度、高明度的柔和色彩。这些颜色带有一种宁静、优雅的氛围，近年来在Web设计中越来越受欢迎。

## 莫兰迪色系的特点

莫兰迪色系主要有以下特点：

- 低饱和度：色彩被"压暗"，不鲜艳刺眼
- 高明度：颜色明亮但不耀眼
- 柔和：给人平静、舒适的感觉
- 自然：多取材于自然界的色彩

## 常用的莫兰迪色彩

### 暖色系
- 浅粉：#E8D0CE
- 淡橙：#E2C1B2
- 浅棕：#D1B7A1
- 米黄：#E5DBC5

### 冷色系
- 浅灰蓝：#94A3B8
- 淡青绿：#A7BCBD
- 浅紫灰：#C1BAD4
- 雾灰：#CBD5E1

## 在Web设计中的应用

### 1. 背景色

莫兰迪色系的浅色调非常适合作为网站背景，能创造出舒适而不单调的视觉效果。

\`\`\`css
body {
  background-color: #F8FAFC; /* 浅灰色背景 */
  color: #334155; /* 深灰色文字 */
}
\`\`\`

### 2. 配色方案

一个典型的莫兰迪冷色系配色方案：

\`\`\`css
:root {
  --primary-color: #94A3B8; /* 主色调-灰蓝色 */
  --accent-color: #64748B; /* 强调色-中灰蓝色 */
  --bg-color: #F8FAFC; /* 背景色-淡灰色 */
  --text-color: #334155; /* 文字颜色-深灰色 */
  --border-color: #E2E8F0; /* 边框色-浅灰色 */
}
\`\`\`

### 3. 按钮和交互元素

莫兰迪色系用于按钮和交互元素时，可以创造出优雅而不张扬的UI效果。

\`\`\`css
.button {
  background-color: #94A3B8;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #64748B;
}
\`\`\`

### 4. 文字和阴影

莫兰迪色系的文字颜色和阴影效果同样能带来柔和的视觉体验。

\`\`\`css
h1, h2, h3 {
  color: #334155;
}

p {
  color: #475569;
}

.card {
  box-shadow: 0 4px 12px rgba(148, 163, 184, 0.1);
}
\`\`\`

## 设计案例

许多现代简约风格的网站和应用采用了莫兰迪色系，如Airbnb、Pinterest等平台的部分设计元素。这种色彩方案特别适合展示型网站，如作品集、博客和电商平台。

## 小结

莫兰迪色系以其低调优雅的特性，能够创造出舒适而不失专业感的用户界面。在追求视觉平静和用户体验的现代Web设计中，莫兰迪色系是一个值得尝试的选择。`,
    excerpt: '莫兰迪色系是以意大利画家乔治·莫兰迪命名的一组低饱和度、高明度的柔和色彩。这些颜色带有一种宁静、优雅的氛围，近年来在Web设计中越来越受欢迎。',
    cover: 'https://picsum.photos/seed/morandi/800/400',
    author: '赵六',
    category: { id: 2, name: '设计', slug: 'design' },
    tags: ['UI设计', '色彩', '莫兰迪色系'],
    createdAt: '2023-08-30T16:20:00Z',
    viewCount: 962
  },
  {
    id: 5,
    title: 'Vue Router路由管理详解',
    slug: 'vue-router-guide',
    content: `# Vue Router路由管理详解

Vue Router是Vue.js官方的路由管理器。它与Vue.js深度集成，使构建单页应用变得轻而易举。

## 特性

- 嵌套路由映射
- 动态路由选择
- 模块化、基于组件的路由配置
- 路由参数、查询、通配符
- 过渡效果
- 细粒度的导航控制
- 自动激活CSS类的链接
- HTML5历史模式或哈希模式

## 安装

\`\`\`bash
npm install vue-router@4 # 用于Vue 3
\`\`\`

## 基本路由配置

\`\`\`js
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
\`\`\`

## 在应用中使用路由

\`\`\`js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
\`\`\`

\`\`\`vue
<!-- App.vue -->
<template>
  <div>
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link>
    </nav>
    <router-view/>
  </div>
</template>
\`\`\`

## 动态路由匹配

\`\`\`js
const routes = [
  // 动态路径参数以冒号开始
  { path: '/user/:id', component: User }
]
\`\`\`

在组件中访问路由参数：

\`\`\`vue
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.params.id) // 获取动态路由参数
</script>
\`\`\`

## 路由导航

### 编程式导航

\`\`\`js
import { useRouter } from 'vue-router'

const router = useRouter()

// 字符串路径
router.push('/users')

// 对象
router.push({ path: '/users' })

// 命名路由，带参数
router.push({ name: 'User', params: { id: '123' } })

// 查询参数
router.push({ path: '/search', query: { q: 'vue' } })
\`\`\`

### 导航守卫

\`\`\`js
router.beforeEach((to, from, next) => {
  // 检查用户是否已认证
  if (to.meta.requiresAuth && !isAuthenticated) {
    // 重定向到登录页
    next({ name: 'Login' })
  } else {
    next() // 继续导航
  }
})
\`\`\`

## 嵌套路由

\`\`\`js
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'posts',
        component: UserPosts
      }
    ]
  }
]
\`\`\`

这样就能实现形如 \`/user/123/profile\` 和 \`/user/123/posts\` 的嵌套路由。

Vue Router是Vue应用中不可或缺的部分，掌握它的使用对于构建复杂的单页应用至关重要。`,
    excerpt: 'Vue Router是Vue.js官方的路由管理器。它与Vue.js深度集成，使构建单页应用变得轻而易举。',
    cover: 'https://picsum.photos/seed/router/800/400',
    author: '张三',
    category: { id: 1, name: '前端开发', slug: 'frontend' },
    tags: ['Vue.js', 'Vue Router', '前端'],
    createdAt: '2023-09-05T11:15:00Z',
    viewCount: 831
  }
]

// 分类数据
const mockCategories = [
  { id: 1, name: '前端开发', slug: 'frontend', count: 4 },
  { id: 2, name: '设计', slug: 'design', count: 1 },
  { id: 3, name: '后端开发', slug: 'backend', count: 0 }
]

export const useBlogStore = defineStore('blog', () => {
  const articles = ref(mockArticles)
  const categories = ref(mockCategories)
  const isLoading = ref(false)

  // 获取所有文章
  const getAllArticles = computed(() => articles.value)

  // 获取最新文章
  const getLatestArticles = computed(() => {
    return [...articles.value].sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })
  })

  // 获取热门文章
  const getPopularArticles = computed(() => {
    return [...articles.value]
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, 3)
  })

  // 根据ID获取文章
  const getArticleById = (id) => {
    return articles.value.find(article => article.id === Number(id))
  }

  // 根据分类获取文章
  const getArticlesByCategory = (slug) => {
    return articles.value.filter(
      article => article.category.slug === slug
    )
  }

  // 获取所有分类
  const getAllCategories = computed(() => categories.value)

  // 根据slug获取分类
  const getCategoryBySlug = (slug) => {
    return categories.value.find(category => category.slug === slug)
  }

  // 模拟异步加载
  const fetchArticles = async () => {
    isLoading.value = true
    // 模拟API请求延迟
    await new Promise(resolve => setTimeout(resolve, 500))
    isLoading.value = false
    return articles.value
  }

  return {
    articles,
    categories,
    isLoading,
    getAllArticles,
    getLatestArticles,
    getPopularArticles,
    getArticleById,
    getArticlesByCategory,
    getAllCategories,
    getCategoryBySlug,
    fetchArticles
  }
})