<template>
	<div id="app">
		<ul>
			<li v-for="item in goodsList">1</li>
		</ul>
	</div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	name: 'app',
	computed: mapGetters([
		'goodsList'
	]),
	methods: mapActions([
		'getGoodsList'
	]),
	data() {
		return {
			msg: 'First page!'
		}
	},
	created () {
		this.getGoodsList()
	}
}
</script>
