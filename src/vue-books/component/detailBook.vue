<template>
	<div>
		<div id="header">
			<div>
				<img :src="detailBook.image">
				<div>
					<span>作者:</span>
					<span v-for="item in detailBook.author">{{item}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	
</style>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';


export default {
	name: 'book',
	computed: {
		...mapGetters([
			'detailBook'
		])
	},
	methods: {
		...mapActions([
			'detailBookGet'
		])
	},
	data() {
		return {
			
		}
	},
	component: {
		
	},
	mounted() {
		this.detailBookGet(this.$route.params.id);
	}
}
</script>
