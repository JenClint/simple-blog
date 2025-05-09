<template>
	<div class="about-page">
		<el-row :gutter="30">
			<el-col :xs="24" :md="16">
				<div class="main-content card">
					<h1 class="about-title">关于我们</h1>

					<div class="about-content">
						<p class="about-intro">
							这是一个基于Vue3、Element Plus构建的简约博客系统，以莫兰迪冷色系为设计基调，为用户提供简洁、优雅的阅读体验。
						</p>

						<h2 class="section-title">技术栈</h2>
						<ul class="tech-list">
							<li><el-tag>Vue 3</el-tag> - 渐进式JavaScript框架</li>
							<li><el-tag>Vite</el-tag> - 现代前端构建工具</li>
							<li><el-tag>Element Plus</el-tag> - 基于Vue 3的组件库</li>
							<li><el-tag>Vue Router</el-tag> - Vue.js官方路由管理器</li>
							<li><el-tag>Pinia</el-tag> - Vue 3的状态管理库</li>
							<li><el-tag>VueUse</el-tag> - Vue组合式API实用工具集合</li>
						</ul>

						<h2 class="section-title">设计特点</h2>
						<p>本博客采用莫兰迪冷色系设计，以低饱和度、高明度的柔和色彩为特点，给用户带来平静、舒适的视觉体验。主要颜色包括：</p>

						<div class="color-palette">
							<div class="color-block" style="background-color: #94A3B8">
								<span>#94A3B8</span>
								<span>主色调-灰蓝色</span>
							</div>
							<div class="color-block" style="background-color: #CBD5E1">
								<span>#CBD5E1</span>
								<span>主色调浅色</span>
							</div>
							<div class="color-block" style="background-color: #64748B">
								<span>#64748B</span>
								<span>主色调深色</span>
							</div>
							<div class="color-block" style="background-color: #F8FAFC">
								<span>#F8FAFC</span>
								<span>背景色-淡灰色</span>
							</div>
							<div class="color-block" style="background-color: #334155">
								<span>#334155</span>
								<span>文字颜色-深灰色</span>
							</div>
						</div>

						<h2 class="section-title">联系我们</h2>
						<p>如果你有任何问题或建议，请随时联系我们：</p>

						<div class="contact-info">
							<p><el-icon>
									<message />
								</el-icon> 邮箱：contact@simpleblog.com</p>
							<p><el-icon>
									<location />
								</el-icon> 地址：北京市朝阳区科技园区</p>
							<p><el-icon>
									<phone />
								</el-icon> 电话：010-12345678</p>
						</div>
					</div>
				</div>
			</el-col>

			<el-col :xs="24" :md="8" class="sidebar-container">
				<Sidebar />
			</el-col>
		</el-row>
	</div>
</template>

<script setup>
import { Sidebar } from '@/components/blog'
import { Message, Location, Phone } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.about-page {
	padding: 20px 0;
}

.about-title {
	font-size: 2rem;
	color: $text-color;
	margin-bottom: 30px;
	position: relative;
	display: inline-block;
	padding-bottom: 10px;

	&:after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 50px;
		height: 3px;
		background-color: $primary-color;
	}
}

.about-intro {
	font-size: 1.1rem;
	color: $text-color;
	margin-bottom: 30px;
	line-height: 1.8;
}

.section-title {
	font-size: 1.5rem;
	color: $text-color;
	margin: 30px 0 15px;
}

.tech-list {
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: column;
	gap: 10px;

	li {
		display: flex;
		align-items: center;
		gap: 10px;
		color: $text-color;
	}
}

.color-palette {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 15px;
	margin: 20px 0;

	.color-block {
		height: 100px;
		border-radius: $border-radius;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: white;
		padding: 10px;
		text-align: center;

		&:nth-child(4) {
			color: $text-color;
			border: 1px solid $border-color;
		}
	}
}

.contact-info {
	margin-top: 20px;
	color: $text-color;
	display: flex;
	flex-direction: column;
	gap: 15px;

	p {
		display: flex;
		align-items: center;
		gap: 10px;
	}
}

@media (max-width: $breakpoint-md) {
	.sidebar-container {
		margin-top: 40px;
	}
}
</style>