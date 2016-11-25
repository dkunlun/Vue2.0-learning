<template>
	<div id="app">
		<div id="left">
			<ul class="list">
				<li v-for="item in shopcartList">{{item.name}}</li>
			</ul>
		</div>
	</div>
</template>

<style type="text/css">
	li {
		display: block;
	}
	.list li {
		padding: 20px 20px;
		border: 1px solid;
	}
	#left {
		width: 10%;
		height: 100%;
	}
</style>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	name: 'app',
	computed: mapGetters([
		'shopcartList'
	]),
	methods: mapActions([
		'getShopCartList'
	]),
	data() {
		return {
			msg: 'First page!'
		}
	},
	created () {
		this.getShopCartList()
	}
}
</script>
