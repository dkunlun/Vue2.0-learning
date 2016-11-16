<template>
	<div id="app">
		<div class="Foo-content">
			<ul id="menu">
				<li><router-link to="/shopcart">点我跳转到shopcart</router-link></li>
				<li><router-link to="/second">点我跳转到第二页</router-link></li>
				<li><router-link to="/count">点我跳转到count</router-link></li>
				<li><router-link to="/list">点我跳转到list</router-link></li>
				<li><router-link to="/note">点我跳转到note</router-link></li>
			</ul>
		</div>
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

<style>
	#menu>li {
		display: inline-block;
		width: 15%;
	}
	.Foo-content {
		text-align: center;
		padding: 18px 0 5px 0;
	}
</style>
