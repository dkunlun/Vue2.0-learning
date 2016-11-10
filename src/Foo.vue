<template>
	<div id="app">
		<div>{{msg}}</div>
		<li><router-link to="/first">点我跳转到第一页</router-link></li>
		<li><router-link to="/second">点我跳转到第二页</router-link></li>
		<li><router-link to="/count">点我跳转到count</router-link></li>
		<li><router-link to="/list">点我跳转到list</router-link></li>
		<li><router-link to="/note">点我跳转到note</router-link></li>
		<router-view class="view"></router-view>
	</div>
</template>
<script>
export default {
	name: 'app',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	}
}
</script>
