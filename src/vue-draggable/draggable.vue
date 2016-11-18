<template>
	<div id="app">
		<ul>
			<li v-for="item in list">{{item.name}}</li>
		</ul>
		<div>
			<ul style="width: 1000px;">
				<li v-for="(item, index) in list" 
					class="draggItem"
					:class="[item.color, {'dragging': item.dragging}]" 
					:id="item.id" draggable="true" 
					@drop="drop($event, index)" @dragover="allowDrop" 
					@dragstart="drag($event, index)"
					@dragend="dragE($event, index)">
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
						name: 'one',
						dragging: false
					},
					{
						id: 'drag2',
						color: 'green',
						name: 'two',
						dragging: false
					},
					{
						id: 'drag3',
						color: 'blue',
						name: 'three',
						dragging: false
					},
					{
						id: 'drag4',
						color: 'orange',
						name: 'four',
						dragging: false
					},
					{
						id: 'drag5',
						color: 'yellow',
						name: 'five',
						dragging: false
					},
					{
						id: 'drag6',
						color: 'skyblue',
						name: 'six',
						dragging: false
					}
				],
				from: null,
				to: null
			}
		},
		methods: {
			allowDrop(ev) {
				ev.preventDefault();
			},
			drag(ev, index) {
				this.list[index].dragging = true;
				this.from = index;
				ev.dataTransfer.setData("Text", ev.target.id);
			},
			drop(ev, index) {
				this.to = index;
				var temp = this.list[this.from];
				this.list[this.from] = this.list[this.to];
				this.list[this.to] = temp;
				var data = ev.dataTransfer.getData("Text");
				// ev.srcElement.preventDefaultrentNode.insertBefore(document.getElementById(data), ev.srcElement);
				ev.preventDefault();
			},
			dragE(ev, index) {
				this.list[index].dragging = false;
			}
		}
	}
</script>

<style>
	.draggItem{
		width: 300px;
		height: 200px;
		display: inline-block;
		margin: 10px 10px;
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
	.orange {
		background: orange;
	}
	.skyblue {
		background: skyblue;
	}
	.yellow {
		background: yellow;
	}
	.dragging {
		transform: scale(1.1);
	}
</style>