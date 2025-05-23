# 简易博客系统

这是一个基于Vue3+Vite+Element Plus+Vue Router+Pinia+VueUse构建的简约博客系统。设计风格采用简洁的莫兰迪冷色系。

## 功能特点

- 文章列表展示
- 文章详情页面
- 分类筛选功能
- 响应式设计，适配移动端和桌面端
- 简洁美观的莫兰迪冷色系UI

## 技术栈

- Vue 3 - 渐进式JavaScript框架
- Vite - 现代前端构建工具
- Element Plus - 基于Vue 3的组件库
- Vue Router - Vue.js官方路由管理器
- Pinia - Vue 3的状态管理库
- VueUse - Vue组合式API实用工具集合

## 快速开始

1. 安装依赖：
```
npm install
```

2. 本地开发：
```
npm run dev
```

3. 构建生产版本：
```
npm run build
```

4. 预览生产版本：
```
npm run preview
```

## Docker部署

本项目支持使用Docker进行构建和部署。

### 构建Docker镜像

```bash
docker build -t simple-blog .
```

### 运行Docker容器

```bash
docker run -d -p 8080:80 --name simple-blog-app simple-blog
```

访问 http://localhost:8080 即可查看应用。

### 使用Docker Compose（可选）

创建docker-compose.yml文件：

```yaml
version: '3'
services:
  simple-blog:
    build: .
    ports:
      - "8080:80"
    restart: always
```

运行：

```bash
docker-compose up -d
```

## 环境变量配置

项目使用不同的环境变量文件来区分开发和生产环境配置：

- `.env` - 基础环境变量，适用于所有环境
- `.env.development` - 开发环境特定变量
- `.env.production` - 生产环境特定变量

环境变量以 `APP_` 为前缀，使用 `src/utils/env.js` 中的工具函数可以方便地获取环境变量值：

```js
import { getEnv, getApiBaseUrl } from '@/utils'

// 获取API基础URL
const apiUrl = getApiBaseUrl()

// 获取自定义环境变量
const title = getEnv('TITLE', '默认值')
```

## Vite 配置

Vite配置位于项目根目录的 `vite.config.js` 文件中，主要包括：

1. **路径别名**：`@` 指向 `src` 目录，方便导入
2. **样式预处理**：自动导入SCSS变量
3. **开发服务器**：配置了端口、跨域支持和API代理
4. **构建优化**：
   - 静态资源分类打包
   - 代码分块策略
   - 依赖预优化
5. **环境变量**：自定义环境变量前缀为 `APP_`

要添加新的构建配置，请修改 `vite.config.js` 文件。

## 页面说明

- 首页：展示博客文章列表
- 文章详情页：展示完整文章内容
- 分类页：按分类查看文章
- 关于页：博客相关信息
- 404页：处理不存在的路径

## 项目结构

```
/src
  /assets - 静态资源
  /components - 通用组件
    /blog - 博客相关组件
    /layout - 布局组件
  /views - 页面组件
  /stores - Pinia状态管理
  /router - 路由配置
  /styles - 全局样式
  /utils - 工具函数
  App.vue - 根组件
  main.js - 入口文件
```

## 颜色方案

采用莫兰迪冷色系，主要包括：
- 主色调：#94A3B8（灰蓝色）
- 背景色：#F8FAFC（淡灰色）
- 文字颜色：#334155（深灰色）
- 强调色：#64748B（中灰蓝色）
- 边框色：#E2E8F0（浅灰色）

## 项目总结

本项目是一个基于Vue3生态系统的简易博客系统，主要特点和亮点如下：

1. **现代化技术栈**：使用Vue3、Vite、Pinia等最新技术，代码简洁高效
2. **组件化设计**：将UI拆分为可复用的组件，便于维护和扩展
3. **响应式布局**：适配不同屏幕尺寸，提供良好的移动端体验
4. **状态管理**：使用Pinia管理博客数据，实现状态集中管理
5. **优雅的UI设计**：采用莫兰迪冷色系，视觉效果简洁优雅
6. **灵活配置**：使用环境变量和Vite配置，适应不同环境需求

## 后续改进方向

1. **用户认证**：添加用户登录、注册功能，实现个人中心
2. **评论系统**：为文章添加评论功能，增加互动性
3. **搜索功能**：实现全文搜索，方便用户查找内容
4. **后端集成**：连接实际的后端API，替代模拟数据
5. **性能优化**：添加图片懒加载、代码分割等优化手段
6. **国际化**：支持多语言切换，扩大用户群体
7. **暗黑模式**：添加深色主题支持，减轻夜间阅读视觉疲劳
8. **SEO优化**：提升搜索引擎可见性
9. **PWA支持**：实现离线访问能力

## 主题特性

### 响应式设计
- 网站完全适配移动端和桌面端
- 自适应组件布局

### 多主题支持
- 支持暗色系莫兰迪风格主题
  - 深灰蓝色背景色系
  - 优雅的低饱和度色彩
  - 精心调配的暗色系配色
- 磨砂玻璃特效
  - 半透明背景
  - 模糊效果
  - 轻微边框

### 组件库
- 基于Element Plus定制设计
- 统一的设计语言