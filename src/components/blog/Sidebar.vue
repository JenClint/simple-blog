<template>
	<div class="sidebar">
		<div class="sidebar-widget about-widget">
			<h3 class="widget-title">关于博客</h3>
			<div class="widget-content">
				<p>这是一个基于Vue3、Element Plus构建的简约博客系统，以莫兰迪冷色系为设计基调。</p>
			</div>
		</div>

		<div class="sidebar-widget categories-widget">
			<h3 class="widget-title">文章分类</h3>
			<div class="widget-content">
				<ul class="category-list">
					<li v-for="category in categories" :key="category.id" class="category-item">
						<router-link :to="`/category/${category.slug}`">
							{{ category.name }}
							<span class="category-count">{{ category.count }}</span>
						</router-link>
					</li>
				</ul>
			</div>
		</div>

		<div class="sidebar-widget popular-widget">
			<h3 class="widget-title">热门文章</h3>
			<div class="widget-content">
				<ul class="popular-list">
					<li v-for="article in popularArticles" :key="article.id" class="popular-item">
						<router-link :to="`/article/${article.id}`">
							<div class="popular-image">
								<img :src="article.cover" :alt="article.title" />
							</div>
							<div class="popular-info">
								<h4 class="popular-title">{{ article.title }}</h4>
								<span class="popular-date">{{ formatDate(article.createdAt) }}</span>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>

		<div class="sidebar-widget tags-widget">
			<h3 class="widget-title">标签云</h3>
			<div class="widget-content">
				<div class="tags-cloud">
					<router-link v-for="tag in uniqueTags" :key="tag" to="/" class="tag-item">
						{{ tag }}
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useBlogStore } from '@/stores/blog'
import { formatDate } from '@/utils'

const blogStore = useBlogStore()

const categories = computed(() => blogStore.getAllCategories)
const popularArticles = computed(() => blogStore.getPopularArticles)

// 获取所有文章中的标签并去重
const uniqueTags = computed(() => {
	const allTags = blogStore.getAllArticles.flatMap(article => article.tags)
	return [...new Set(allTags)]
})
</script>

<style lang="scss" scoped>
.sidebar {
	display: flex;
	flex-direction: column;
	gap: 30px;
}

.sidebar-widget {
	background-color: $glass-bg;
	backdrop-filter: blur($glass-blur);
	-webkit-backdrop-filter: blur($glass-blur);
	border: $glass-border;
	border-radius: $border-radius;
	box-shadow: $box-shadow;
	overflow: hidden;

	.widget-title {
		background-color: rgba($primary-light, 0.7);
		color: $text-color;
		font-size: 1.1rem;
		padding: 15px 20px;
		margin: 0;
		border-bottom: 1px solid $border-color;
		font-weight: 600;
	}

	.widget-content {
		padding: 20px;
	}
}

.about-widget {
	p {
		color: $text-color;
		line-height: 1.6;
		margin: 0;
	}
}

.category-list {
	list-style: none;
	padding: 0;
	margin: 0;

	.category-item {
		border-bottom: 1px solid $border-color;

		&:last-child {
			border-bottom: none;
		}

		a {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10px 0;
			color: $text-color;
			text-decoration: none;
			transition: color 0.3s;

			&:hover {
				color: $primary-color;
			}

			.category-count {
				background-color: rgba($primary-light, 0.5);
				color: $text-color;
				font-size: 0.8rem;
				padding: 2px 8px;
				border-radius: 20px;
			}
		}
	}
}

.popular-list {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 15px;

	.popular-item {
		a {
			display: flex;
			gap: 10px;
			text-decoration: none;

			.popular-image {
				width: 80px;
				height: 60px;
				overflow: hidden;
				border-radius: $border-radius-sm;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.popular-info {
				flex: 1;

				.popular-title {
					margin: 0 0 5px;
					font-size: 0.9rem;
					color: $text-color;
					font-weight: 500;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				.popular-date {
					font-size: 0.8rem;
					color: $text-color;
					opacity: 0.7;
				}
			}

			&:hover {
				.popular-title {
					color: $primary-color;
				}
			}
		}
	}
}

.tags-cloud {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;

	.tag-item {
		background-color: rgba($primary-light, 0.5);
		color: $text-color;
		font-size: 0.85rem;
		padding: 5px 12px;
		border-radius: 20px;
		text-decoration: none;
		transition: all 0.3s;

		&:hover {
			background-color: $primary-color;
			color: white;
		}
	}
}
</style>