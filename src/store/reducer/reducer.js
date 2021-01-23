import * as actionType from '../actions/actionType'
const initialState = {
	tasksList: [
		{ id: '1', name: 'buy food', done: false },
		{ id: '2', name: 'Go to dentist', done: false },
		{ id: '3', name: 'Fix the Door', done: true },
		{ id: '4', name: 'Fix the sunk', done: true },
	],
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.ADD_TASK:
			return { ...state, tasksList: state.tasksList.concat(action.task) }
		case actionType.DELETE_TASK:
			return { ...state, tasksList: state.tasksList.filter((t) => t.id !== action.taskId) }
		case actionType.TASK_Toggle_DONE:
			let targetIndex = state.tasksList.findIndex((t) => t.id === action.id)
			let updatedlist = [...state.tasksList]
			updatedlist[targetIndex].done = !state.tasksList[targetIndex].done

			return { ...state, tasksList: updatedlist }
		default:
			return state
	}
}
export default reducer
