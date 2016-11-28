<template>
	<div>
		<div id="header">
			<div>
				<mu-text-field label="密码" hintText="请输入密码" type="password" labelFloat/>
				<!-- <el-input placeholder="请输入内容" v-model="query" style="width: 300px;">
					<el-button slot="append" icon="search" @click="searchBook(query)"></el-button>
				</el-input> -->
			</div>
			<div>
				<ul id="list">
					<li v-for="item in bookList" class="item" @click="detailBook(item.id)">
						<router-link :to="{name: 'detailBook', params: { id : item.id }}">
							<div>{{item.title}}</div>
							<img :src="item.images.medium">
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style>
	.item {
		margin: 10px 10px;
		display: inline-block;
		width: 300px;
		height: 300px;
	}
</style>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { textField } from 'muse-ui';
Vue.component(textField.name, textField)

export default {
	name: 'book',
	computed: {
		...mapGetters([
			'bookList'
		])
	},
	methods: {
		...mapActions([
			'searchBook',
			'detailBook'
		])
	},
	data() {
		return {
			query: ''
		}
	},
	component: {
		textField
	}
}
</script>
