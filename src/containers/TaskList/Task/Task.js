import React, { useEffect } from 'react'

const  Task=React.memo(({ task })=> {
	useEffect(() => {
		console.log('[Task renders]')
	})
	const onDelete = () => {}
	return (
		<li done={task.done.toString()}>
			<button onClick={onDelete} className='btn'>
				<span className='tooltip'> Delete?</span>
			</button>
			{task.name}
		</li>
	)
})

export default Task
