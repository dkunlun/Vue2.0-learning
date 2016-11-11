import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'

Vue.use(Vuex)

const state = {
	notes: [],
	activeNote: {}
}
const getters = {
	activeNote: state => state.activeNote,
	notes: state => state.notes,
	activeNoteText: state => state.activeNote.text
}
const mutations = {
	addNote(state) {
		const newNote = {
			text: 'New note',
			favorite: false
		}
		state.notes.push(newNote)
		state.activeNote = newNote
	},
	editNote(state, text) {
		state.activeNote.text = text
	},
	deleteNote(state) {
		// state.notes.$remove(state.activeNote)
		state.notes.splice(state.notes.indexOf(state.activeNote), 1)
		state.activeNote = state.notes[0]
	},
	toggleFavorite(state) {
		state.activeNote.favorite = !state.activeNote.favorite
	},
	setActiveNote(state, note) {
		state.activeNote = note
	}
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})