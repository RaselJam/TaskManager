import * as actionType from './actionType'
import Task from '../../Models/Task'
import { v4 as unicId } from 'uuid'
/**
 *
 * @param {String} name
 */
export const addTaks = (name) => {
	const task = new Task(unicId(), name, false)
	return { type: actionType.ADD_TASK, task: task }
}
export const deleteTask = (id) => {
	return { type: actionType.DELETE_TASK, id: id }
}

export const toggleDone = (id) => {
	return { type: actionType.TASK_Toggle_DONE, id: id }
}
