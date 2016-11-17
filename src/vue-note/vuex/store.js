import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as type from './mutation-types'

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
	[type.ADD_NOTE] (state) {
		const newNote = {
			text: 'New note',
			favorite: false
		}
		state.notes.push(newNote)
		state.activeNote = newNote
	},
	[type.EDIT_NOTE] (state, text) {
		state.activeNote.text = text
	},
	[type.DELETE_NOTE] (state) {
		// state.notes.$remove(state.activeNote)
		state.notes.splice(state.notes.indexOf(state.activeNote), 1)
		state.activeNote = state.notes[0]
	},
	[type.TOGGLE_FAVORITE] (state) {
		state.activeNote.favorite = !state.activeNote.favorite
	},
	[type.SET_ACTIVE_NOTE] (state, note) {
		state.activeNote = note
	}
}

const moduleNote = {
	state: state,
	mutations: mutations,
	getters: getters,
	actions: actions
}
export { moduleNote as note }