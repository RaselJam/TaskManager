import Header from './components/Header/Header'
import TaskList from './containers/TaskList/TaskList'
import { connect } from 'react-redux'
import SubTaskList from './containers/SubTaskList/SubTaskList'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/About/About'
// import * as actions from './store/actions'

function App(props) {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Switch>
					<Route path='/About' component={About} />
					<section className='main container grid grid-3 bg-thersary'>
						<Route
							path='/'
							render={() => (
								<>
									<TaskList />
									<SubTaskList />
								</>
							)}
						/>
					</section>
				</Switch>
			</div>
		</BrowserRouter>
	)
}

const mapStateToProps = (state) => {
	return {
		tasksList: state.tasksList,
		subTasks: state.subTasks,
	}
}

export default connect(mapStateToProps)(App)
