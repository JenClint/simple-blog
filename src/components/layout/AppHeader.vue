<template>
	<header class="app-header">
		<div class="container">
			<div class="header-content">
				<div class="logo">
					<router-link to="/">
						<h1>简易博客</h1>
					</router-link>
				</div>

				<!-- 桌面端导航 -->
				<nav class="main-nav hide-on-mobile">
					<router-link to="/" class="nav-item" active-class="active">首页</router-link>
					<el-dropdown trigger="click">
						<span class="nav-item dropdown-trigger">
							分类 <el-icon class="el-icon--right"><arrow-down /></el-icon>
						</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item v-for="category in categories" :key="category.id">
									<router-link :to="`/category/${category.slug}`" class="dropdown-link">
										{{ category.name }} ({{ category.count }})
									</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
					<router-link to="/about" class="nav-item" active-class="active">关于</router-link>
				</nav>

				<!-- 移动端菜单按钮 -->
				<div class="mobile-menu-button hide-on-desktop" @click="showMobileMenu = !showMobileMenu">
					<el-icon size="24">
						<menu />
					</el-icon>
				</div>
			</div>
		</div>

		<!-- 移动端菜单 -->
		<transition name="slide-fade">
			<div v-if="showMobileMenu" class="mobile-menu">
				<nav class="mobile-nav">
					<router-link to="/" class="mobile-nav-item" active-class="active" @click="closeMobileMenu">首页</router-link>
					<div class="mobile-nav-item" :class="{ open: showCategorySubmenu }"
						@click="showCategorySubmenu = !showCategorySubmenu">
						分类
						<el-icon class="el-icon--right"><arrow-down /></el-icon>
					</div>
					<div v-if="showCategorySubmenu" class="submenu">
						<router-link v-for="category in categories" :key="category.id" :to="`/category/${category.slug}`"
							class="submenu-item" @click="closeMobileMenu">
							{{ category.name }} ({{ category.count }})
						</router-link>
					</div>
					<router-link to="/about" class="mobile-nav-item" active-class="active"
						@click="closeMobileMenu">关于</router-link>
				</nav>
				<div class="mobile-menu-close" @click="closeMobileMenu">
					<el-icon size="24">
						<close />
					</el-icon>
				</div>
			</div>
		</transition>
	</header>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, Close, ArrowDown } from '@element-plus/icons-vue'
import { useBlogStore } from '@/stores/blog'

const blogStore = useBlogStore()
const categories = blogStore.getAllCategories

const showMobileMenu = ref(false)
const showCategorySubmenu = ref(false)

const closeMobileMenu = () => {
	showMobileMenu.value = false
	showCategorySubmenu.value = false
}
</script>

<style lang="scss" scoped>
.app-header {
	background-color: $glass-bg;
	backdrop-filter: blur($glass-blur);
	-webkit-backdrop-filter: blur($glass-blur);
	border-bottom: $glass-border;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	position: sticky;
	top: 0;
	z-index: 100;
}

.header-content {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: $header-height;
}

.logo {
	a {
		text-decoration: none;

		h1 {
			color: $primary-light;
			font-size: 1.5rem;
			margin: 0;
			font-weight: 600;
		}
	}
}

.main-nav {
	display: flex;
	gap: 20px;
	align-items: center;

	.nav-item {
		color: $text-color-light;
		font-size: 1rem;
		text-decoration: none;
		padding: 8px 0;
		position: relative;
		cursor: pointer;

		&:after {
			content: "";
			position: absolute;
			width: 0;
			height: 2px;
			bottom: 0;
			left: 0;
			background-color: $primary-light;
			transition: width 0.3s;
		}

		&:hover,
		&.active,
		&:focus {
			color: $primary-light;

			&:after {
				width: 100%;
			}
		}

		&.dropdown-trigger {
			display: flex;
			align-items: center;
			gap: 5px;
		}
	}
}

.dropdown-link {
	color: $text-color;
	text-decoration: none;
	display: block;
	width: 100%;

	&:hover {
		color: $primary-light;
	}
}

.mobile-menu-button {
	cursor: pointer;
	color: $text-color-light;

	&:hover {
		color: $primary-light;
	}
}

.mobile-menu {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: $glass-bg;
	backdrop-filter: blur(15px);
	-webkit-backdrop-filter: blur(15px);
	z-index: 200;
	padding: 20px;
	display: flex;
	flex-direction: column;
}

.mobile-nav {
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	gap: 15px;

	.mobile-nav-item {
		color: $text-color-light;
		font-size: 1.2rem;
		text-decoration: none;
		padding: 10px 0;
		border-bottom: 1px solid $border-color;
		display: flex;
		justify-content: space-between;
		align-items: center;

		&.active {
			color: $primary-light;
		}

		&.open {
			color: $primary-light;
		}
	}

	.submenu {
		margin-left: 20px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px 0;
		border-bottom: 1px solid $border-color;

		.submenu-item {
			color: $text-color;
			font-size: 1rem;
			text-decoration: none;
			padding: 8px 0;

			&:hover {
				color: $primary-light;
			}
		}
	}
}

.mobile-menu-close {
	position: absolute;
	top: 20px;
	right: 20px;
	cursor: pointer;
	color: $text-color-light;

	&:hover {
		color: $primary-light;
	}
}

.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(-20px);
	opacity: 0;
}
</style>