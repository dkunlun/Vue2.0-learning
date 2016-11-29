<template>
	<div>
		<div id="header">
			<div>
				<mu-text-field label="搜索" v-model="query" hintText="请输入书籍信息" type="text" labelFloat/>
				<mu-icon-button icon="search" @click="searchBook(encodeURI(query))"/>
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
import { textField,iconButton } from 'muse-ui';
Vue.component(textField.name, textField)
Vue.component(iconButton.name, iconButton)

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
		]),
		show() {
			console.log(this.query)
		}
	},
	data() {
		return {
			query: ''
		}
	},
	component: {
		textField,
		iconButton
	}
}
</script>
