import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {createStore } from 'redux'
import {Provider}  from 'react-redux'
import reducer from './store/reducer/reducer'
 const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
	<Provider store={store}>
	<React.StrictMode>
		<App />
	</React.StrictMode>
	</Provider>,
	document.getElementById('root')
)

reportWebVitals()
