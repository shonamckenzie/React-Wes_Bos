import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					{/* return Header component and pass tagline as prop */}
					<Header tagline='Fresh Seafood Market'></Header>
				</div>
				<Order></Order>
				<Inventory></Inventory>
			</div>
		)
	}
}

export default App;