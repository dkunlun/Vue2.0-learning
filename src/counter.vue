<template>
	<div id="app">
		<div>Clicked: {{$store.state.count}} times, count is {{ evenOrOdd }},
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementIfOdd">Increment if odd</button>
		<button @click="incrementAsync">Increment async</button>
		<button @click="getList">getList</button>
		<div v-for="item in $store.state.list">{{item.title}}</div>
	</div>
	<div>
		<page></page>
	</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import page from './component/pager/page.vue';
Vue.component(page.name, page);
export default {
	computed: mapGetters([
		'evenOrOdd'
	]),
	methods: mapActions([
		'increment',
		'decrement',
		'incrementIfOdd',
		'incrementAsync',
		'getList'
	]),
	component: {
		page
	}
}
</script>