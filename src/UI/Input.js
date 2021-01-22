import React, { useState } from 'react'

function Input(props) {
	const [input, setInput] = useState('')
	const handleKeypress = (event) => {
		
		//it triggers by pressing the enter key
		let keyCode = event.keyCode || event.which
		if (keyCode === 13) {
		
			handleSubmit()
		}
	}
	const handleSubmit = () => {
		props.onSubmit(input)
	}
	return (
		<div className='adding'>
			<input
				type='text'
				onKeyPress={handleKeypress}
				placeholder='Add new Task'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={handleSubmit} className='btn btn-thersary' type='button'>
				Add
			</button>
		</div>
	)
}

export default Input
