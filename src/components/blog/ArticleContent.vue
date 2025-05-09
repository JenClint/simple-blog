<template>
	<div class="article-content-wrapper">
		<div class="article-header">
			<div class="article-meta">
				<router-link :to="`/category/${article.category.slug}`" class="article-category">
					{{ article.category.name }}
				</router-link>
				<span class="article-date">{{ formattedDate }}</span>
			</div>
			<h1 class="article-title">{{ article.title }}</h1>
			<div class="article-info">
				<div class="author">
					<span>作者: {{ article.author }}</span>
				</div>
				<div class="stats">
					<div class="views">
						<el-icon>
							<view />
						</el-icon>
						<span>{{ article.viewCount }} 阅读</span>
					</div>
				</div>
			</div>
			<div class="article-tags">
				<span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
			</div>
		</div>

		<div class="article-cover">
			<img :src="article.cover" :alt="article.title" />
		</div>

		<div class="article-body markdown-content" v-html="renderedContent"></div>

		<div class="article-footer">
			<div class="divider"></div>
			<div class="article-navigation">
				<div class="prev-article" v-if="prevArticle">
					<router-link :to="`/article/${prevArticle.id}`">
						<div class="nav-label">上一篇</div>
						<div class="nav-title">{{ prevArticle.title }}</div>
					</router-link>
				</div>
				<div class="next-article" v-if="nextArticle">
					<router-link :to="`/article/${nextArticle.id}`">
						<div class="nav-label">下一篇</div>
						<div class="nav-title">{{ nextArticle.title }}</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useBlogStore } from '@/stores/blog'
import { View } from '@element-plus/icons-vue'
import { marked } from 'marked'
import { formatDateCN } from '@/utils'

const props = defineProps({
	article: {
		type: Object,
		required: true
	}
})

const blogStore = useBlogStore()
const allArticles = computed(() => blogStore.getAllArticles)

// 渲染Markdown内容
const renderedContent = computed(() => {
	return marked(props.article.content)
})

// 格式化日期
const formattedDate = computed(() => {
	return formatDateCN(props.article.createdAt)
})

// 获取上一篇和下一篇文章
const currentIndex = computed(() => {
	return allArticles.value.findIndex(a => a.id === props.article.id)
})

const prevArticle = computed(() => {
	return currentIndex.value > 0 ? allArticles.value[currentIndex.value - 1] : null
})

const nextArticle = computed(() => {
	return currentIndex.value < allArticles.value.length - 1 ? allArticles.value[currentIndex.value + 1] : null
})
</script>

<style lang="scss" scoped>
.article-content-wrapper {
	max-width: 800px;
	margin: 0 auto;
	background-color: $glass-bg;
	backdrop-filter: blur($glass-blur);
	-webkit-backdrop-filter: blur($glass-blur);
	border: $glass-border;
	border-radius: $border-radius;
	box-shadow: $box-shadow;
	padding: 25px;
}

.article-header {
	margin-bottom: 20px;

	.article-meta {
		display: flex;
		gap: 15px;
		margin-bottom: 10px;

		.article-category {
			color: $primary-color;
			text-decoration: none;
			font-weight: 500;

			&:hover {
				text-decoration: underline;
			}
		}

		.article-date {
			color: $text-color;
			opacity: 0.7;
		}
	}

	.article-title {
		font-size: 2rem;
		margin-bottom: 15px;
		font-weight: 700;
		color: $text-color;
		line-height: 1.3;
	}

	.article-info {
		display: flex;
		justify-content: space-between;
		margin-bottom: 15px;
		font-size: 0.9rem;

		.author,
		.stats {
			color: $text-color;
			opacity: 0.8;
		}

		.stats {
			display: flex;
			gap: 15px;

			.views {
				display: flex;
				align-items: center;
				gap: 5px;
			}
		}
	}

	.article-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-bottom: 20px;

		.tag {
			background-color: rgba($primary-light, 0.5);
			color: $text-color;
			font-size: 0.8rem;
			padding: 4px 10px;
			border-radius: 15px;
		}
	}
}

.article-cover {
	width: 100%;
	height: 400px;
	overflow: hidden;
	border-radius: $border-radius;
	margin-bottom: 30px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.article-body {
	margin-bottom: 40px;
}

.article-footer {
	margin-top: 40px;

	.divider {
		height: 1px;
		background-color: $border-color;
		margin-bottom: 20px;
	}

	.article-navigation {
		display: flex;
		justify-content: space-between;

		.prev-article,
		.next-article {
			max-width: 45%;

			a {
				text-decoration: none;
				display: block;
				padding: 15px;
				background-color: rgba(255, 255, 255, 0.5);
				backdrop-filter: blur($glass-blur);
				-webkit-backdrop-filter: blur($glass-blur);
				border: $glass-border;
				border-radius: $border-radius;
				box-shadow: $box-shadow;
				transition: transform 0.3s, box-shadow 0.3s;

				&:hover {
					transform: translateY(-5px);
					box-shadow: $box-shadow-lg;
				}

				.nav-label {
					color: $primary-color;
					font-size: 0.8rem;
					margin-bottom: 5px;
				}

				.nav-title {
					color: $text-color;
					font-weight: 500;
					font-size: 0.95rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}

		.next-article {
			text-align: right;
		}
	}
}
</style>

<style lang="scss">
// 这里使用非scoped样式，以便样式能够应用到v-html中的内容
.markdown-content {
	line-height: 1.8;
	color: $text-color;

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 1.5em;
		margin-bottom: 0.5em;
		font-weight: 600;
	}

	h1 {
		font-size: 2rem;
		border-bottom: 1px solid $border-color;
		padding-bottom: 0.5em;
	}

	h2 {
		font-size: 1.5rem;
		border-bottom: 1px solid $border-color;
		padding-bottom: 0.3em;
	}

	h3 {
		font-size: 1.25rem;
	}

	p {
		margin: 1em 0;
	}

	a {
		color: $primary-color;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	code {
		background-color: rgba($primary-light, 0.3);
		color: $primary-dark;
		padding: 0.2em 0.4em;
		border-radius: 3px;
		font-family: monospace;
		font-size: 0.9em;
	}

	pre {
		background-color: rgba(248, 248, 248, 0.7);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		border-radius: $border-radius;
		padding: 1em;
		overflow: auto;
		margin: 1.5em 0;

		code {
			background: none;
			padding: 0;
			color: $text-color;
			font-size: 0.9em;
			display: block;
		}
	}

	ul,
	ol {
		padding-left: 2em;
		margin: 1em 0;
	}

	blockquote {
		border-left: 4px solid $primary-light;
		padding-left: 1em;
		margin-left: 0;
		color: $text-color;
		opacity: 0.8;
		background-color: rgba($primary-light, 0.1);
		padding: 0.5em 1em;
		border-radius: 0 $border-radius-sm $border-radius-sm 0;
	}

	img {
		max-width: 100%;
		border-radius: $border-radius;
		margin: 1em 0;
	}
}
</style>