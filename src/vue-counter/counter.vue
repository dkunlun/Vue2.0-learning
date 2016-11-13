<template>
	<div id="app">
		<div>Clicked: {{count}} times, count is {{ evenOrOdd }},
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementIfOdd">Increment if odd</button>
		<button @click="incrementAsync">Increment async</button>
		<button @click="getList">getList</button>
		<div v-for="item in list">{{item.title}}</div>
	</div>
	<div>

	</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: mapGetters([
		'evenOrOdd',
		'count',
		'list'
	]),
	methods: mapActions([
		'increment',
		'decrement',
		'incrementIfOdd',
		'incrementAsync',
		'getList'
	]),
	component: {
		
	}
}
</script>