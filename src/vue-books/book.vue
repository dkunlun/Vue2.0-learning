<template>
	<div id="app">
		<div id="header">
			<div>
				<input v-model="query" type="text">
				<button @click="searchBook(query)">搜索</button>
			</div>
			<div>
				<ul id="list">
					<li v-for="item in bookList">1</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style>
	
</style>

<script>
import { mapGetters, mapActions } from 'vuex';

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
	}
}
</script>
