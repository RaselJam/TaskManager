import React, { useEffect, useState } from 'react'
import tables from '../../../Models/tables'
import * as actions from '../../../store/actions'
import { connect } from 'react-redux'

const Task = (props) => {
	let {task}= props;
	useEffect(() => {
		console.log('[Task renders]')
	})
	//[Bug 1.0]using local State to force re-Rendering

	const toggleHandler = () => {
		console.log("before chnaging the rEdux state :", task);
		props.onToggle()
		console.log("redux state chnaged and it is now : ", task);
		//[Bug 1.0] a try to force the component to Re-Render
		
	}
	const onDelete = () => {}
	return (
		<li done={task.done.toString()}>
			<button onClick={onDelete} className='btn'>
				<span className='tooltip'> Delete?</span>
			</button>
			{task.name}
			<button onClick={toggleHandler} className='doButton'></button>
		</li>
	)
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onToggle: () => {
			//[Bug 1.0] :It works and Change the global Redux State, but it doesn re-render
			dispatch(actions[ownProps.table.tableName].toggleDone(ownProps.taskId))
		},
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
		task: state[ownProps.table.tableName].find((t) => t.id === ownProps.taskId),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Task)
