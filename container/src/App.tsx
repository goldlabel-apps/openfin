import React from 'react';

function App() {
	return (
		<div className="col fill gap20">
			<header className="row spread middle">
				<div className="col">
					<h1>listingslab OpenFin</h1>
					<h1 className="tag">Example demonstrating running a react app in an OpenFin container</h1>
				</div>
			</header>
			<main className="col gap10">
				<p>To launch this application in the OpenFin container, run the following command:</p>
				<pre>npm run client</pre>
			</main>
		</div>
	);
}

export default App;
