import React, { useEffect } from 'react'

const Task = React.memo((props) => {
	useEffect(() => {
		console.log('[Task renders]')
	})
	const handleDelte = () => {
		props.onDelete(props.task.id)
	}
	const handleSubmit = () => {
		console.log('Submit Clecked')
		props.onSubmit(props.task.id)
	}
	return (
		<li done={props.task.done.toString()}>
			<button onClick={handleDelte} className='btn'>
				<span className='tooltip'> Delete?</span>
			</button>
			{props.task.name}
			<button onClick={handleSubmit} className='doButton'></button>
		</li>
	)
})

export default Task
