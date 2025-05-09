<template>
	<div class="not-found-page">
		<div class="not-found-container">
			<div class="error-code">404</div>
			<h1 class="error-title">页面未找到</h1>
			<p class="error-message">抱歉，您访问的页面不存在或已被移除。</p>
			<router-link to="/" class="back-home">
				<el-button type="primary">返回首页</el-button>
			</router-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.not-found-page {
	min-height: calc(100vh - $header-height - $footer-height - 120px);
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 40px 0;
}

.not-found-container {
	max-width: 500px;
}

.error-code {
	font-size: 8rem;
	font-weight: 700;
	color: $primary-color;
	line-height: 1;
	margin-bottom: 20px;
	opacity: 0.8;
}

.error-title {
	font-size: 2rem;
	color: $text-color;
	margin-bottom: 15px;
}

.error-message {
	font-size: 1.1rem;
	color: $text-color;
	opacity: 0.8;
	margin-bottom: 30px;
}

.back-home {
	display: inline-block;
}
</style>