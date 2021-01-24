import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'
import Task from '../TaskList/Task/Task'
import * as actions from '../../store/actions'
import Input from '../../UI/Input'

function SubTaskList(props) {
	const onAddingTask = (taskName) => {
		props.onAddTask(taskName, props.ownerId)
	}
	const handleTaskDone = (id) => {
		console.log('Toggle task id :', id)
		props.onTaskToggleDone(id)
	}
	const handleDeleteTask = (id) => {
		console.log('Deleting,before props.list[]  :', props.list)
		props.onDeleteTask(id)
		console.log('after deleting props.list[]:', props.list)
	}

	return (
		<div className='tasks card '>
			<h3 className='with-pen my-1 bg-light'>{props.ownerName}</h3>
			<ul className='tasks-Ul p-1'>
				{props.list.map((task) => (
					<Task task={task} key={task.id} onSubmit={handleTaskDone} onDelete={handleDeleteTask} />
				))}
			</ul>
			{props.ownerId !== '' && <Input onSubmit={onAddingTask} placeholder='Add new Sub Task' />}
		</div>
	)
}
const mapDispatchToProps = (dispatch) => {
	return {
		onAddTask: (name, owner) => {
			dispatch(actions.addSubTaks(name, owner))
		},

		onDeleteTask: (id) => {
			dispatch(actions.deleteSubTask(id))
		},
		onTaskToggleDone: (id) => {
			dispatch(actions.toggleSubDone(id))
		},
	}
}
const mapStateToProps = (state) => {
	return {
		list: state.subTasks.filter((c) => c.owner === state.currentTaskId),
		ownerId: state.currentTaskId,
		ownerName: state.currentTaskName,
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SubTaskList)
