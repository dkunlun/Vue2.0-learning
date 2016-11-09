<template>
	<div id="app">
		<div>{{msg}}</div>
		<li><router-link to="/first">点我跳转到第一页</router-link></li>
		<li><router-link to="/second">点我跳转到第二页</router-link></li>
		<li><router-link to="/count">点我跳转到count</router-link></li>
		<router-view class="view"></router-view>
	</div>
</template>
<script>
// import Second from './Second.vue';
export default {
	name: 'app',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	}
	// components: { Second }
}
</script>
