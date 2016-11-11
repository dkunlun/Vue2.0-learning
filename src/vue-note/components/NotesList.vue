<template>
	<div id="notes-list">
		<div id="list-header">
			<h2>Notes | coligo</h2>
			<div class="btn-group btn-group-justified" role="group">
				<div class="btn-group" role="group">
					<button type="button" class="btn btn-default"
						@click="show = 'all'"
						:class="{active: show === 'all'}">
						All Notes
					</button>
				</div>
				<div class="btn-group" role="group">
					<button type="button" class="btn btn-default"
						@click="show = 'favorites'"
						:class="{active: show === 'favorites'}">
						Favorites
					</button>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="list-group">
				<a v-for="note in filteredNotes"
					class="list-group-item" href="javascript: void(0);"
					:class="{active: activeNote === note}"
					@click="updateActiveNote(note)">
					<h4 class="list-group-item-heading">
						{{note.text.trim().substring(0, 30)}}
					</h4>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	data() {
		return {
			show: 'all'
		}
	},
	computed: {
		...mapGetters([
			'notes',
			'activeNote'
		]),
		filteredNotes () {
			if(this.show === 'all') {
				return this.notes
			} else if (this.show === 'favorites') {
				return this.notes.filter(note => note.favorites)
			}
		}
	},
	methods: {
		...mapActions([
			'updateActiveNote'
		])
	}
}
</script>