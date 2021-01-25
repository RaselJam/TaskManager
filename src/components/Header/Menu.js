import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
	return (
		<ul className='menu flex my-1'>
			<li>
				<NavLink to='/'>Home</NavLink>
			</li>
			<li>
				<NavLink to='/About'>About</NavLink>
			</li>
			<li>
				<NavLink to='/Docs'>Docs</NavLink>
			</li>
		</ul>
	)
}

export default Menu
