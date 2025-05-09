<template>
	<div class="article-detail-page">
		<el-row :gutter="30">
			<el-col :xs="24" :md="16">
				<div class="main-content">
					<el-empty v-if="isLoading" description="加载中...">
						<el-skeleton :rows="10" animated />
					</el-empty>

					<el-empty v-else-if="!article" description="文章不存在" />

					<article-content v-else :article="article" />
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
import { useRoute } from 'vue-router'
import { useBlogStore } from '@/stores/blog'
import { ArticleContent, Sidebar } from '@/components/blog'

const route = useRoute()
const blogStore = useBlogStore()

const isLoading = computed(() => blogStore.isLoading)
const article = computed(() => blogStore.getArticleById(route.params.id))

onMounted(async () => {
	await blogStore.fetchArticles()
})
</script>

<style lang="scss" scoped>
.article-detail-page {
	padding: 20px 0;
}

@media (max-width: $breakpoint-md) {
	.sidebar-container {
		margin-top: 40px;
	}
}
</style>