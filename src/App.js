import Header from './components/Header/Header'
import TaskList from './containers/TaskList/TaskList'
import { connect } from 'react-redux'
import table from './Models/tables'
// import * as actions from './store/actions'
 

function App(props) {
	return (
		<div className='App'>
			<Header />
			<section className='main container grid grid-3 bg-thersary'>
				<TaskList list={props.tasksList} table={table.TASKLIST}/>
			</section>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		tasksList: state.tasksList,
		subTasks: state.subTasks,
	}
}

export default connect(mapStateToProps)(App)
