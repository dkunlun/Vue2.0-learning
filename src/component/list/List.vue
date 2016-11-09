<template>
	<div id="app">
		<div id="preContent">
			<div class="content">
				<div class="list" @scroll="handleScroll">
					<ul>
						<li class="line-top"></li>
						<li class="item" v-for="item in list">{{item}}</li>
						<li class="line-bottom"></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		name: 'list',
		data () {
			return {
				msg: '123',
				list: [],
				height: 44
			}
		},
		methods: {
			init () {
				console.log(this.width)
				this._rowsInWindow = Math.ceil(this.$el.offsetHeight / this.height);
			},
			handleScroll (e) {
				// console.log(e)
			}
		},
		created() {
			for(let i = 0; i < 100; i++) {
				this.list.push('item' + i);
			}
		},
		mounted () {
			this.init();
		}
	}
</script>

<style>
	#preContent {
		font-family: Avenir,Helvetica,Arial,sans-serif;
		width: 800px;
		height: 650px;
		background: url(../../../image/iphone.png) 50% no-repeat;
		background-size: 324px 642px;
		position: relative;
	}
	.content {
		width: 256px;
		height: 464px;
		position: absolute;
		left: 272px;
		top: 91px;
		background: #fff;
		overflow-y: scroll;
	}
	.list {
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}
	.list ul li {
		text-decoration: none;
		height: 44px;
		font-size: 14px;
		line-height: 3;
		text-align: left;
		padding-left: 15px;
		border-bottom: 1px solid #ddd;
		box-sizing: border-box;
		background: #fff;
	}
	.list ul {
		margin: 0px;
		padding: 0px;
	}
	.line-top, .line-bottom{
        border-bottom: 0;
      }
</style>