<template>
	<div id="app">
		<div class="left">
			<ul>
				<li v-for="(item, index) in list"
					class="listItem" 
					draggable="true" 
					@drop="handleDrop($event, index)" @dragover="allowDrop" 
					@dragstart="handleDragStart($event, index)"
					@dragend="handleDragEnd($event, index)">
					{{item.color}}
				</li>
			</ul>
		</div>
		<div class="right">
			<ul style="width: 400px;">
				<li v-for="(item, index) in list" 
					class="draggItem"
					:class="[{'dragging': item.dragging}]"
					:style="{background: item.color}" 
					draggable="true" 
					@drop="handleDrop($event, index)" @dragover="allowDrop" 
					@dragstart="handleDragStart($event, index)"
					@dragend="handleDragEnd($event, index)">
				{{item.color}}
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
						color: 'red',
						dragging: false
					},
					{
						color: 'green',
						dragging: false
					},
					{
						color: 'blue',
						dragging: false
					},
					{
						color: 'orange',
						dragging: false
					},
					{
						color: 'yellow',
						dragging: false
					},
					{
						color: 'skyblue',
						dragging: false
					},
					{
						color: 'hotpink',
						dragging: false
					},
					{
						color: 'burlywood',
						dragging: false
					},
					{
						color: 'Cornflowerblue',
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
			handleDragStart(ev, index) {
				this.list[index].dragging = true;
				this.from = index;
				ev.dataTransfer.setData("Text", JSON.stringify(this.list[index]));
			},
			handleDrop(ev, index) {
				this.to = index;
				var temp = this.list[this.from];
				this.list.splice(this.from, 1, this.list[this.to])
				this.list.splice(this.to, 1, temp);
				this.list[this.to].dragging = false;
				var data = ev.dataTransfer.getData("Text");
				ev.preventDefault();
			},
			handleDragEnd(ev, index) {
				ev.preventDefault();
			}
		}
	}
</script>

<style>
	body {
		font-family: Helvetica,sans-serif;
	}
	.listItem {
		background: #f5f5f5;
		padding: .5rem;
		color: #5f5f5f;
		transition: transform .3s;
	}
	.draggItem{
		width: 33%;
		height: 6rem;
		background: #efefef;
		line-height: 6rem;
		text-align: center;
		color: #fff;
		transition: transform .3s;
		display: inline-block;
	}
	.dragging {
		transform: scale(1.1);
	}
	.left {
		display: inline-block;
	}
	.right {
		display: inline-block;
	    display: -ms-flexbox;
	    display: flex;
	    -ms-flex-wrap: wrap;
	    flex-wrap: wrap;
	    width: 30rem;
	}
</style>