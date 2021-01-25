import * as actionType from '../actions/actionType'
const initialState = {
	tasksList: [
		{ id: '1', name: 'buy food', done: true },
		{ id: '2', name: 'Go to dentist', done: false },
		{ id: '3', name: 'Fix the Door', done: true },
	],
	subTasks: [
		{ id: '1', owner: '1', name: 'make the Shop list ', done: true },
		{ id: '2', owner: '1', name: 'go to shop', done: true },
		{ id: '3', owner: '1', name: 'return unwanted article back to the superMarket', done: true },
		{ id: '4', owner: '2', name: 'make sure you remember wich teath is damaged', done: false },
		{ id: '5', owner: '2', name: 'remind the dentist not to commit  any mistake', done: false },
		{ id: '6', owner: '2', name: 'make alot nois in the clinic as if you have alot pain', done: true },
	],
	currentTaskId: '',
	currentTaskName: 'Select one from left Column',
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.ADD_TASK:
			return { ...state, tasksList: state.tasksList.concat(action.task) }
		case actionType.DELETE_TASK:
			return {
				...state,
				tasksList: state.tasksList.filter((t) => t.id !== action.id),
				subTasks: state.subTasks.filter((t) => t.owner !== action.id),
				currentTaskId: '',
				currentTaskName: 'Select a Task from left Column',
			}
		case actionType.TASK_Toggle_DONE:
			const targetIndex = state.tasksList.findIndex((t) => t.id === action.id)
			const updatedList = [...state.tasksList]
			//Make children Done as parent is Done
			const updatedSubList = state.subTasks.map((c) => {
				if (c.owner === action.id) {
					c.done = true
				}
				return c
			})

			updatedList[targetIndex].done = true
			return { ...state, tasksList: updatedList, subTasks: updatedSubList }
		//Subs:
		case actionType.ADD_SUBTASK: {
			//Find the owner Task and make it UnDone as new SubTask is beeing added  to its children:
			const updatedTasks = [...state.tasksList]
			updatedTasks.find((c) => c.id === action.subTask.owner).done = false
			console.log(updatedTasks[state.currentTaskId])
			console.log(updatedTasks)

			return { ...state, tasksList: updatedTasks, subTasks: state.subTasks.concat(action.subTask) }
		}
		case actionType.DELETE_SUBTASK:
			console.log('[reducer]: deleteing.state is :', state)
			let result = { ...state, subTasks: state.subTasks.filter((t) => t.id !== action.id) }
			console.log('state is:', result)
			return result
		case actionType.SUBTASK_Toggle_DONE: {
			const targetIndex = state.subTasks.findIndex((t) => t.id === action.id)
			const updatedSubTaskList = [...state.subTasks]
			updatedSubTaskList[targetIndex].done = true
			let updatedTasks = [...state.tasksList]

			if (updatedSubTaskList.filter((c) => c.owner === state.currentTaskId).every((c) => c.done === true)) {
				//Every subTask is done, making the owner Done too

				updatedTasks = state.tasksList.map((c) => {
					if (c.id === state.currentTaskId) {
						c.done = true
					}
					return c
				})
			}

			return { ...state, subTasks: updatedSubTaskList, tasksList: updatedTasks }
		}
		case actionType.SET_CURRENT_TASK:
			return { ...state, currentTaskId: action.id, currentTaskName: action.taskName }
		default:
			return state
	}
}
export default reducer
