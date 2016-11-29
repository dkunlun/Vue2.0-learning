<template>
	<div>
		<mu-paper class="menu">
			<mu-menu>
				<mu-menu-item @click="show({name: 'shopcart'})" title="Shopcart"/>
				<mu-menu-item @click="show({name: 'second'})" title="Second"/>
				<mu-menu-item @click="show({name: 'count'})" title="Counter"/>
				<mu-menu-item @click="show({name: 'list'})" title="list"/>
				<mu-menu-item @click="show({name: 'note'})" title="note"/>
				<mu-menu-item @click="show({name: 'draggable'})" title="draggable"/>
				<mu-menu-item @click="show({name: 'book'})" title="Book"/>
			</mu-menu>
		</mu-paper>
		<div id="content">
			<router-view class="view"></router-view>
		</div>
	</div>
</template>

<style>
.menu,#content {
	display: inline-block;
}
#content {
	width: 88%;
    vertical-align: top;
}
</style>

<script>
import Vue from 'vue';
import { menu,menuItem,paper } from 'muse-ui';

Vue.component(menu.name, menu)
Vue.component(menuItem.name, menuItem)
Vue.component(paper.name, paper)

export default {
	name: 'myMenu',
	methods: {
		show(params) {
			this.$router.push(params)
		}
	},
	component: {
		menu,
		menuItem,
		paper
	},
	data() {
		return {
			router: true
		}
	}
}
</script>