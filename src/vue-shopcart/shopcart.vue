<template>
	<div id="app">
		<ul>
			<li v-for="item in shopcartList">{{item.name}}</li>
		</ul>
	</div>
</template>


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
