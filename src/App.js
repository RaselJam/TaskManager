function App() {
	return (
		<div className='App'>
			{/* Header */}
			<div class='header container'>
				<div class='navbar grid grid-3'>
					<div class='pen__paper'>
						<p>Mi Lista de Tareas</p>
						<div class='fanar'></div>
						<div class='fanar'></div>
						<div class='fanar'></div>
						<div class='fanar'></div>
						<div class='fanar'></div>
						<div class='fanar'></div>
						<div class='fanar'></div>
					</div>

					<ul class='menu flex my-1'>
						<li>
							<a href='index.html'>Home </a>
						</li>
						<li>
							<a href='index.html'>About</a>
						</li>
						<li>
							<a href='index.html'>Docs</a>
						</li>
					</ul>
					<section class='showcase'>
						<h2>Use our Awsome App to free some of your brain memory</h2>
					</section>
					<div class='intruduction card'>
						<h4>We keep everything organaized</h4>
						<p>
							Less paper , less time more efficiente working flow.You only need to focus on How and When. We will
							reminde you your next move acording to your schadule
						</p>
					</div>
				</div>
			</div>
			{/* Body */}
			<section class='main container grid grid-3 bg-thersary'>
				<div class='tasks card '>
					<h3 class='with-pen my-1 bg-light'>Tasks to Do</h3>
					<ul class='tasks-Ul p-1'>
						<li done='true'>
							<button class='btn'></button>Paint the car
						</li>
						<li done='true'>
							<button class='btn'>
								<span class='tooltip'> Delete?</span>
							</button>
							Choose the furnitures of Salon
						</li>
						<li done='false'>
							<button class='btn'>
								<span class='tooltip'>Delete</span>
							</button>
							Pay the rent
						</li>
						<li>
							<button class='btn'>
								<span class='tooltip'>Delete?</span>
							</button>
							Pay the rent
						</li>
						<li>
							<button class='btn'>
								<span class='tooltip'>Delete?</span>
							</button>
							Pay the rent
						</li>
						<li>
							{' '}
							<button class='btn'>
								<span class='tooltip'>Delete?</span>
							</button>
							Pay the rent
						</li>
						<li>
							{' '}
							<button class='btn'>
								<span class='tooltip'>Delete?</span>
							</button>
							Pay the rent
						</li>
					</ul>
					<div class='adding'>
						<input type='text' placeholder='Add new Task' />
						<button class='btn btn-thersary' type='button'>
							Add
						</button>
					</div>
				</div>

				<div class='tasks card'>
					<h3 class='with-pen my-1 bg-light'>Tasks to Do</h3>
					<ul class='tasks-Ul p-1'>
						<li done>
							<button class='btn'></button>Paint the car
						</li>
						<li done>
							<button class='btn'></button> Choose the furnitures of Salon
						</li>
					</ul>
					<div class='adding'>
						<input type='text' placeholder='Add new Task' />
						<button class='btn btn-thersary' type='button'>
							Add
						</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default App
