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
			<h3 className='with-pen my-1 bg-light'>{props.table.showName}</h3>
			<ul className='tasks-Ul p-1'>
				{props.list.map((task) => (
					<Task taskId={task.id} key={task.id} table={props.table} />
				))}
			</ul>
			<Input onSubmit={onAddingTask} />
		</div>
	)
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onAddTask: (name) => {
			dispatch(actions[ownProps.table.tableName].addTasks(name))
		},

		// onDeleteTask: (id) => {
		// 	dispatch(actions.deleteTask(id))
		// },
		// onTaskToggleDone: (id) => {
		// 	dispatch(actions.toggleDone(id))
		// },
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		list: state[ownProps.table.tableName],
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
