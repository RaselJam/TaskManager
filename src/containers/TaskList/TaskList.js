import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Task from './Task/Task'

function TaskList(props) {
	return (
		<div class='tasks card '>
			<h3 class='with-pen my-1 bg-light'>Tasks to Do</h3>
			<ul class='tasks-Ul p-1'>
				{props.list.map((task) => (
					<Task done={task.done} taskName={task.name} key={uuidv4()} />
				))}
			</ul>
			<div class='adding'>
				<input type='text' placeholder='Add new Task' />
				<button class='btn btn-thersary' type='button'>
					Add
				</button>
			</div>
		</div>
	)
}

export default TaskList
