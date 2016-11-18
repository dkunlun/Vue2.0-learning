<template>
	<div id="app">
		<ul>
			<li v-for="item in list">{{item.name}}</li>
		</ul>
		<div>
			<ul>
				<li v-for="item in list" 
					class="draggItem"
					:class="item.color" 
					:id="item.id" draggable="true" 
					@drop="drop" @dragover="allowDrop" 
					@dragstart="drag">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'draggable',
		data () {
			return {
				list: [
					{
						id: 'drag1',
						color: 'red',
						name: 'one'
					},
					{
						id: 'drag2',
						color: 'green',
						name: 'two'
					},
					{
						id: 'drag3',
						color: 'blue',
						name: 'three'
					}
				]
			}
		},
		methods: {
			allowDrop(ev) {
				ev.preventDefault();
			},
			drag(ev) {
				ev.dataTransfer.setData("Text", ev.target.id);
			},
			drop(ev) {
				var data = ev.dataTransfer.getData("Text");
				ev.srcElement.parentNode.insertBefore(document.getElementById(data), ev.srcElement);
				ev.preventDefault();
			}
		}
	}
</script>

<style>
	.draggItem{
		width: 300px;
		height: 200px;
		display: inline-block;
		margin: 0px 5px;
	}
	.red {
		background: red;
	}
	.green {
		background: green;
	}
	.blue {
		background: blue;
	}
	.dragging {
		transform: scale(1.1);
	}
</style>