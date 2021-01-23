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
	const handleTaskDone = (id) => {
		console.log('Toggle task id :', id)
		props.onTaskToggleDone(id)
	}
	const handleDeleteTask = (id) => {
		console.log('Deleting task id :', id)
		props.onDeleteTask(id)
	}

	return (
		<div className='tasks card '>
			<h3 className='with-pen my-1 bg-light'>Tasks to Do</h3>
			<ul className='tasks-Ul p-1'>
				{
					(console.log(props.list.map((c) => c.name)),
					props.list.map((task) => (
						<Task task={task} key={task.id} onSubmit={handleTaskDone} onDelete={handleDeleteTask} />
					)))
				}
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

		onDeleteTask: (id) => {
			dispatch(actions.deleteTask(id))
		},
		onTaskToggleDone: (id) => {
			dispatch(actions.toggleDone(id))
		},
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
		list: state.tasksList,
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
