const addNote = ({ commit }) => commit('addNote')
const editNote = ({ commit }, e) => commit('editNote', e.target.value)
const deleteNote = ({ commit }) => commit('deleteNote')
const toggleFavorite = ({ commit }) => commit('toggleFavorite')
const updateActiveNote = ({ commit }, note) => commit('setActiveNote', note)

export {
	addNote,
	editNote,
	deleteNote,
	toggleFavorite,
	updateActiveNote
}