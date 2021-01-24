import React, { useEffect } from 'react'
import * as actions from '../../../store/actions'
import { connect } from 'react-redux'

const Task = React.memo((props) => {

	const handleDelte = () => {
		props.onDelete(props.task.id)
	}
	const handleSubmit = () => {
		console.log('Submit Clecked')
		props.onSubmit(props.task.id)
	}
	const handleSelected = () => {
		props.onTaskSelect(props.task.id, props.task.name)
	}
	return (
		<li done={props.task.done.toString()}>
			<button onClick={handleDelte} className='btn'>
				<span className='tooltip'> Delete?</span>
			</button>
			<p onFocus={handleSelected} onClick={handleSelected}>
				{props.task.name}
			</p>
			<button onClick={handleSubmit} className='doButton'></button>
		</li>
	)
})

const mapDispatchToProps = (dispatch) => {
	return {
		onTaskSelect: (id, name) => {
			dispatch(actions.setCurrentTask(id, name))
		},
	}
}
export default connect(null, mapDispatchToProps)(Task)
