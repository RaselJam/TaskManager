import React, { useEffect } from 'react'
import Task from './Task/Task'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import Input from '../../UI/Input'

function TaskList(props) {
	useEffect(() => {
		console.log('[TaskList renders]')
	})
	const onAddingTask = (taskName) => {
		props.onAddTask(taskName)
	}
	return (
		<div className='tasks card '>
			<h3 className='with-pen my-1 bg-light'>Tasks to Do</h3>
			<ul className='tasks-Ul p-1'>
				{props.list.map((task) => (
					<Task task={task} key={task.id} />
				))}
			</ul>
			<Input onSubmit={onAddingTask} />
		</div>
	)
}
const mapDispatchToProps = (dispatch) => {
	return {
		onAddTask: (name) => {
			dispatch(actions.addTaks(name))
		},
		// ,
		// onDeleteTask: (id) => {
		// 	dispatch(actions.deleteTask(id))
		// },
		// onTaskToggleDone: (id) => {
		// 	dispatch(actions.toggleDone(id))
		// },
	}
}
export default connect(null, mapDispatchToProps)(TaskList)
