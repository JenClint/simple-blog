<template>
	<div class="app-container">
		<el-config-provider namespace="ep">
			<app-header />
			<main class="main-content">
				<router-view v-slot="{ Component }">
					<transition name="fade" mode="out-in">
						<component :is="Component" />
					</transition>
				</router-view>
			</main>
			<app-footer />
		</el-config-provider>
	</div>
</template>

<script setup>
import { AppHeader, AppFooter } from '@/components/layout';
</script>

<style lang="scss">
.app-container {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: $bg-color;
}

.main-content {
	flex: 1;
	padding: 20px;
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>