import React from 'react'
import NoteBook from '../../UI/NoteBook'
import Menu from './Menu'

function Header() {
	return (
		<div class='header container'>
			<div class='navbar grid grid-3'>
				<NoteBook />
				<Menu />

				<section class='showcase'>
					<h2>Use our Awsome App to free some of your brain memory</h2>
				</section>
				<div class='intruduction card'>
					<h4>We keep everything organaized</h4>
					<p>
						Less paper , less time more efficiente working flow.You only need to focus on How and When. We will reminde
						you your next move acording to your schadule
					</p>
				</div>
			</div>
		</div>
	)
}

export default Header
