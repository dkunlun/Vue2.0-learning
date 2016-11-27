<template>
	<div>
		<div id="header">
			<div>
				<el-input placeholder="请输入内容" v-model="query" style="width: 300px;">
					<el-button slot="append" icon="search" @click="searchBook(query)"></el-button>
				</el-input>
			</div>
			<div>
				<ul id="list">
					<li v-for="item in bookList">{{item.title}}<img :src="item.images.medium"></li>
				</ul>
			</div>
		</div>
		<NavMenu/>
	</div>
</template>

<style>
	
</style>

<script>
import 'element-ui/lib/theme-default/index.css'
import { Input, Button } from 'element-ui'
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)

export default {
	name: 'book',
	computed: {
		...mapGetters([
			'bookList'
		])
	},
	methods: {
		...mapActions([
			'searchBook'
		]),
		show(data) {
			console.log(data)
		}
	},
	data() {
		return {
			query: ''
		}
	},
	component: {
		Input,
		Button
	}
}
</script>
