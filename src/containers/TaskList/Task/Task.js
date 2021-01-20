import React from 'react'

function Task(props) {
	return (
		<li done={props.done.toString()}>
			<button className='btn'>
				<span className='tooltip'> Delete?</span>
			</button>
			{props.taskName}
		</li>
	)
}

export default Task
