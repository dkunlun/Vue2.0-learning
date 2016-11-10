export const addNote = ({dispatch}) => {
	dispatch('ADD_NOTE')
}
export const EDIT_NOTE = ({dispatch}, e) => {
	dispatch('EDIT_NOTE', e.target.value)
}
export const DELETE_NOTE = ({dispatch}) => {
	dispatch('DELETE_NOTE')
}
export const TOGGLE_NOTE = ({dispatch}, note) => {
	dispatch('TOGGLE_NOTE', note)
}
export const SET_ACTIVE_NOTE = ({dispatch}) => {
	dispatch('SET_ACTIVE_NOTE')
}