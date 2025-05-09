<template>
	<footer class="app-footer">
		<div class="container">
			<div class="footer-content">
				<div class="footer-info">
					<div class="footer-logo">简易博客</div>
					<div class="footer-description">基于Vue3+Vite+Element Plus构建的简约博客</div>
				</div>
				<div class="footer-links">
					<h3>快速导航</h3>
					<nav class="footer-nav">
						<router-link to="/" class="footer-nav-item">首页</router-link>
						<router-link to="/about" class="footer-nav-item">关于</router-link>
					</nav>
				</div>
				<div class="footer-categories">
					<h3>文章分类</h3>
					<div class="footer-category-list">
						<router-link v-for="category in categories" :key="category.id" :to="`/category/${category.slug}`"
							class="footer-category-item">
							{{ category.name }}
						</router-link>
					</div>
				</div>
			</div>
			<div class="footer-bottom">
				<div class="copyright">
					© {{ currentYear }} 简易博客系统. All Rights Reserved.
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { computed } from 'vue'
import { useBlogStore } from '@/stores/blog'

const blogStore = useBlogStore()
const categories = blogStore.getAllCategories

const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
.app-footer {
	background-color: #fff;
	border-top: 1px solid $border-color;
	padding: 40px 0 20px;
	margin-top: 60px;
}

.footer-content {
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	gap: 30px;
	margin-bottom: 30px;

	@media (max-width: $breakpoint-md) {
		grid-template-columns: 1fr;
		text-align: center;
	}
}

.footer-info {
	.footer-logo {
		font-size: 1.5rem;
		color: $primary-color;
		font-weight: 600;
		margin-bottom: 10px;
	}

	.footer-description {
		color: $text-color;
		opacity: 0.8;
		line-height: 1.5;
	}
}

.footer-links,
.footer-categories {
	h3 {
		font-size: 1.1rem;
		color: $text-color;
		margin-bottom: 15px;
		font-weight: 600;
	}
}

.footer-nav,
.footer-category-list {
	display: flex;
	flex-direction: column;
	gap: 8px;

	.footer-nav-item,
	.footer-category-item {
		color: $text-color;
		opacity: 0.8;
		text-decoration: none;
		transition: all 0.3s;

		&:hover {
			opacity: 1;
			color: $primary-color;
		}
	}
}

.footer-bottom {
	padding-top: 20px;
	border-top: 1px solid $border-color;
	text-align: center;

	.copyright {
		color: $text-color;
		opacity: 0.7;
		font-size: 0.9rem;
	}
}
</style>