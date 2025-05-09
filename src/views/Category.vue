<template>
	<div class="category-page">
		<el-row :gutter="30">
			<el-col :xs="24" :md="16">
				<div class="main-content">
					<div class="section-header">
						<h2 class="section-title" v-if="category">
							分类: {{ category.name }}
							<span class="category-count">({{ category.count }})</span>
						</h2>
						<h2 class="section-title" v-else>未知分类</h2>
					</div>

					<el-empty v-if="isLoading" description="加载中...">
						<el-skeleton :rows="3" animated />
					</el-empty>

					<el-empty v-else-if="!articles.length" description="该分类下暂无文章" />

					<div v-else class="article-list">
						<article-card v-for="article in articles" :key="article.id" :article="article" class="article-item" />
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
import { onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogStore } from '@/stores/blog'
import { ArticleCard, Sidebar } from '@/components/blog'

const route = useRoute()
const blogStore = useBlogStore()

const isLoading = computed(() => blogStore.isLoading)
const category = computed(() => blogStore.getCategoryBySlug(route.params.slug))
const articles = computed(() => blogStore.getArticlesByCategory(route.params.slug))

watch(() => route.params.slug, async (newSlug) => {
	if (newSlug) {
		await blogStore.fetchArticles()
	}
})

onMounted(async () => {
	await blogStore.fetchArticles()
})
</script>

<style lang="scss" scoped>
.category-page {
	padding: 20px 0;
}

.section-header {
	margin-bottom: 20px;

	.section-title {
		font-size: 1.5rem;
		color: $text-color;
		font-weight: 600;
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

		.category-count {
			font-size: 1rem;
			color: $text-color;
			opacity: 0.7;
			margin-left: 5px;
		}
	}
}

.article-list {
	display: flex;
	flex-direction: column;
	gap: 30px;
}

@media (max-width: $breakpoint-md) {
	.sidebar-container {
		margin-top: 40px;
	}
}
</style>