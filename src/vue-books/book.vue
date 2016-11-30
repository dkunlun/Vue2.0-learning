<template>
	<div>
		<div id="header">
			<div>
				<mu-text-field label="搜索" @keyup="show" v-model="query" hintText="请输入书籍信息" type="text" labelFloat/>
				<mu-icon-button icon="search" @click="searchBook(query)"/>
			</div>
			<div>
				<ul id="list">
					<li v-for="item in bookList" class="item" @click="detailBook(item.id)">
						<router-link :to="{name: 'detailBook', params: { id : item.id }}">
							<div>{{item.title}}</div>
							<img :src="item.images.medium">
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div id="foot">
			<mu-paper>
				<mu-bottom-nav :value="bottomNav" shift @change="handleChange">
					<mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"/>
					<mu-bottom-nav-item value="music" title="Music" icon="music_note"/>
					<mu-bottom-nav-item value="books" title="Books" icon="books"/>
					<mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"/>
				</mu-bottom-nav>
			</mu-paper>
		</div>
	</div>
</template>

<style>
	.item {
		margin: 10px 10px;
		display: inline-block;
		width: 300px;
		height: 300px;
	}
</style>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { textField,iconButton,bottomNav,bottomNavItem } from 'muse-ui';
Vue.component(textField.name, textField)
Vue.component(iconButton.name, iconButton)
Vue.component(bottomNav.name, bottomNav)
Vue.component(bottomNavItem.name, bottomNavItem)

export default {
	name: 'book',
	computed: {
		...mapGetters([
			'bookList'
		])
	},
	methods: {
		...mapActions([
			'searchBook',
			'detailBook'
		]),
		handleChange(value) {
			this.bottomNav = value;
		},
		show() {
			console.log(1)
		}
	},
	data() {
		return {
			query: '',
			bottomNav: 'movies'
		}
	},
	component: {
		textField,
		iconButton,
		bottomNav,
		bottomNavItem
	}
}
</script>
