import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
	// method that updates state and the state need to exist in same component
	state = {
		fishes: {},
		order: {}
	};
	addFish = (fish) => {
		// take copy of existing state
		const fishes = {...this.state.fishes};
		// add new fish to fishes variable
		fishes[`fish${Date.now()}`] = fish;
		// set new fishes object to state
		this.setState({
			fishes: fishes
		})
	}

	loadSampleFishes = () => {
		this.setState({
			fishes: sampleFishes
		})
	}

	addToOrder = (key) => {
		// take a copy of state
		const order = {...this.state.order};
		// either add to order or update number in order
		order[key] = order[key] +1 || 1;
		// call setState to update our state object
		this.setState({order});
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					{/* return Header component and pass tagline as prop */}
					<Header tagline='Fresh Seafood Market'></Header>
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => (
							<Fish
								key={key}
								index={key}
								details={this.state.fishes[key]}
								addToOrder={this.addToOrder}>
							</Fish>
						))}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order}></Order>
				{/* pass addFish method as props to Inventory component */}
				<Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}></Inventory>
			</div>
		)
	}
}

export default App;