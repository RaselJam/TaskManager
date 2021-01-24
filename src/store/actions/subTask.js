import * as actionType from './actionType'
import SubTask from '../../Models/SubTask'
import { v4 as unicId } from 'uuid'
/**
 *
 * @param {String} name
 * @param {string} owner : a High order Task
 */
export const addSubTaks = (name, owner) => {
	const subTask = new SubTask(unicId(), owner, name, false)
	return { type: actionType.ADD_SUBTASK, subTask: subTask }
}
export const deleteSubTask = (id) => {
	return { type: actionType.DELETE_SUBTASK, id: id }
}

export const toggleSubDone = (id) => {
	return { type: actionType.SUBTASK_Toggle_DONE, id: id }
}
