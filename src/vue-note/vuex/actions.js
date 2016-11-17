import * as type from './mutation-types'

const addNote = ({ commit }) => commit(type.ADD_NOTE)
const editNote = ({ commit }, e) => commit(type.EDIT_NOTE, e.target.value)
const deleteNote = ({ commit }) => commit(type.DELETE_NOTE)
const toggleFavorite = ({ commit }) => commit(type.TOGGLE_FAVORITE)
const updateActiveNote = ({ commit }, note) => commit(type.SET_ACTIVE_NOTE, note)

export {
	addNote,
	editNote,
	deleteNote,
	toggleFavorite,
	updateActiveNote
}