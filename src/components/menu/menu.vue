<template>
	<div id="app">
		<div>
			<el-menu theme="dark" :router="router" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="/shopcart">点我跳转到shopcart</el-menu-item>
				<!-- <el-submenu index="2">
					<template slot="title">我的工作台</template>
					<el-menu-item index="2-1">选项1</el-menu-item>
					<el-menu-item index="2-2">选项2</el-menu-item>
					<el-menu-item index="2-3">选项3</el-menu-item>
				</el-submenu> -->
				<el-menu-item index="/second">点我跳转到第二页</el-menu-item>
				<el-menu-item index="/count">点我跳转到count</el-menu-item>
				<el-menu-item index="/list">点我跳转到list</el-menu-item>
				<el-menu-item index="/note">点我跳转到note</el-menu-item>
				<el-menu-item index="/draggable">点我跳转到draggable</el-menu-item>
				<el-menu-item index="/book">点我跳转到book</el-menu-item>
			</el-menu>
		</div>
		<router-view class="view"></router-view>
	</div>
</template>

<script>
import Vue from 'vue';
import { Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
export default {
	name: 'myMenu',
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	},
	component: {
		Menu,
		Submenu,
		MenuItem,
		MenuItemGroup
	},
	data() {
		return {
			router: true
		}
	}
}
</script>