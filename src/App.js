

function App() {
  return (
    <div className="App">
    {/* Header */}
		<div class="header container">
			<div class="navbar grid grid-3">
				<div class="pen__paper">
					<p>Mi Lista de Tareas</p>
					<div class="fanar"></div>
					<div class="fanar"></div>
					<div class="fanar"></div>
					<div class="fanar"></div>
					<div class="fanar"></div>
					<div class="fanar"></div>
					<div class="fanar"></div>
				</div>
				<ul class="flex my-1">
					<li>
						<a href="index.html">Home </a>
					</li>
					<li><a href="index.html">About</a></li>
					<li><a href="index.html">Docs</a></li>
				</ul>
				<section class="showcase">
					<h2>Use our Awsome App to free some of your brain memory</h2>
				</section>
				<div class="intruduction card">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt debitis reiciendis ducimus iusto ipsam? Fugit
					commodi quae dicta totam. Cumque.
				</div>
			</div>
		</div>
		{/* Body */}
		<section class="main container grid grid-3 bg-thersary p-2">
			<div class="tasks card">
				<h3 class="with-pen my-1 bg-light">Tasks to Do</h3>
				<ul class="tasks-Ul p-1">
					<li done><button class="btn"></button>Paint the car</li>
					<li done><button class="btn"></button> Choose the furnitures of Salon</li>
					<li>Pay the rent</li>
				</ul>
				<div class="adding">
					<input class="my-3" type="text" placeholder="Add new Task" />
					<button class="btn btn-primary" type="button">Add</button>
				</div>
			</div>
			<div class="tasks card">
				<h3 class="with-pen my-1 bg-light">Pay the rent</h3>
				<ul class="tasks-Ul p-1">
					<li done><button class="btn"></button>gather the money</li>
					<li><button class="btn"></button> Go to the bank</li>
					<li>Pay the rent</li>
				</ul>
				<div class="adding">
					<input class="my-3" type="text" placeholder="Add new sub Task" />
					<button class="btn btn-primary" type="button">Add</button>
				</div>




			</div>
			<div class="card">C</div>
		</section>
    </div>
  );
}

export default App;
