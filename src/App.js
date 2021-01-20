import Header from './components/Header/Header'
import TaskList from './containers/TaskList/TaskList'

function App() {
	let taskList = [
		{ name: 'buy food', done: false },
		{ name: 'Go to dentist', done: false },
		{ name: 'Fix the Door', done: true },
	]

	return (
		<div className='App'>
			<Header />
			<section class='main container grid grid-3 bg-thersary'>
			<TaskList list={taskList} />
			</section>
		</div>
	)
}

export default App
