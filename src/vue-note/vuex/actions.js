const addNote = ({ commit }) => commit('addNote')
const editNote = ({ commit }, e) => commit('editNote', e.target.value)
const deleteNote = ({ commit }) => commit('deleteNote')
const toggleFavorite = ({ commit }, note) => commit('toggleFavorite', note)
const updateActiveNote = ({ commit }) => commit('setActiveNote')

export {
	addNote,
	editNote,
	deleteNote,
	toggleFavorite,
	updateActiveNote
}