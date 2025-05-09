<template>
	<div class="article-card">
		<div class="article-cover">
			<router-link :to="`/article/${article.id}`">
				<img :src="article.cover" :alt="article.title" />
			</router-link>
		</div>
		<div class="article-content">
			<div class="article-meta">
				<router-link :to="`/category/${article.category.slug}`" class="article-category">
					{{ article.category.name }}
				</router-link>
				<span class="article-date">{{ formattedDate }}</span>
			</div>
			<h2 class="article-title">
				<router-link :to="`/article/${article.id}`">
					{{ article.title }}
				</router-link>
			</h2>
			<p class="article-excerpt">
				{{ article.excerpt }}
			</p>
			<div class="article-footer">
				<div class="article-author">
					<span>作者: {{ article.author }}</span>
				</div>
				<div class="article-stats">
					<el-icon>
						<view />
					</el-icon>
					<span>{{ article.viewCount }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { View } from '@element-plus/icons-vue'
import { formatDate, formatRelativeTime } from '@/utils'

const props = defineProps({
	article: {
		type: Object,
		required: true
	},
	useRelativeTime: {
		type: Boolean,
		default: false
	}
})

const formattedDate = computed(() => {
	return props.useRelativeTime
		? formatRelativeTime(props.article.createdAt)
		: formatDate(props.article.createdAt)
})
</script>

<style lang="scss" scoped>
.article-card {
	background-color: $glass-bg;
	backdrop-filter: blur($glass-blur);
	-webkit-backdrop-filter: blur($glass-blur);
	border: $glass-border;
	border-radius: $border-radius;
	overflow: hidden;
	transition: transform 0.3s, box-shadow 0.3s;
	box-shadow: $box-shadow;

	&:hover {
		transform: translateY(-5px);
		box-shadow: $box-shadow-lg;
	}
}

.article-cover {
	height: 200px;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s;

		&:hover {
			transform: scale(1.05);
		}
	}
}

.article-content {
	padding: 20px;
}

.article-meta {
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	font-size: 0.9rem;

	.article-category {
		color: $primary-light;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	.article-date {
		color: $text-color-muted;
	}
}

.article-title {
	font-size: 1.25rem;
	margin-bottom: 10px;
	font-weight: 600;

	a {
		color: $text-color-light;
		text-decoration: none;

		&:hover {
			color: $primary-light;
		}
	}
}

.article-excerpt {
	color: $text-color;
	margin-bottom: 20px;
	line-height: 1.6;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.article-footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 15px;
	border-top: 1px solid $border-color;
	font-size: 0.9rem;

	.article-author {
		color: $text-color-muted;
	}

	.article-stats {
		display: flex;
		align-items: center;
		gap: 5px;
		color: $text-color-muted;
	}
}
</style>