<template>
	<div class="home-page">
		<el-row :gutter="30">
			<el-col :xs="24" :md="16">
				<div class="main-content">
					<div class="section-header">
						<h2 class="section-title">最新文章</h2>
					</div>

					<el-empty v-if="isLoading" description="加载中...">
						<el-skeleton :rows="3" animated />
					</el-empty>

					<el-empty v-else-if="!articles.length" description="暂无文章" />

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
import { onMounted, computed } from 'vue'
import { useBlogStore } from '@/stores/blog'
import { ArticleCard, Sidebar } from '@/components/blog'

const blogStore = useBlogStore()
const isLoading = computed(() => blogStore.isLoading)
const articles = computed(() => blogStore.getLatestArticles)

onMounted(async () => {
	await blogStore.fetchArticles()
})
</script>

<style lang="scss" scoped>
.home-page {
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