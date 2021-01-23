import * as actionType from '../actions/actionType'
const initialState = {
	tasksList: [
		{ id: '1', name: 'buy food', done: false },
		{ id: '2', name: 'Go to dentist', done: false },
		{ id: '3', name: 'Fix the Door', done: true },
	],
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.ADD_TASK:
			return { ...state, tasksList: state.tasksList.concat(action.task) }
		case actionType.DELETE_TASK:
			return { ...state, tasksList: state.tasksList.filter((t) => t.id !== action.taskId) }
		case actionType.TASK_Toggle_DONE:
			const targetIndex = state.tasksList.findIndex((t) => t.id === action.id)
			const updatedList = [...state.tasksList]
			updatedList[targetIndex].done = true

			return { ...state, tasksList: updatedList }
		default:
			return state
	}
}
export default reducer
