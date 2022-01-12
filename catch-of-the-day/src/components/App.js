import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
	// method that updates state and the state need to exist in same component
	state = {
		fishes: {},
		order: {}
	};
	
	componentDidMount() {
		// when we mount the component it updates state which in turn triggers componentDidUpdate so we need to reinstate localStorage first
		const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
		console.log(localStorageRef);
		if (localStorageRef) {
			// need to convert back to an object
			this.setState({ order: JSON.parse(localStorageRef) });
		}
		console.log('mounted');
		this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
			context: this,
			state: 'fishes',
		});
	}
	
	componentDidUpdate() {
		// any time you try and place an object where a string is required, the browser calls the toString method which will return [object Object]
		// convert object to string representation using JSON.stringify
		localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
		console.log('it updated');
	}
	
	componentWillUnmount(){
		console.log('Unmounting.........');
		base.removeBinding(this.ref);
	}
	
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
						{/* fishes is an object and map only works with arrays so we need to wrap this using Object.keys */}
						{/* Warning: Each child in an array should have a unique key prop - you need to give a property of key with any unique value, this doesn't actually get added as a prop (check react dev tools for the component)*/}
						{Object.keys(this.state.fishes).map(key => (
							<Fish
								key={key}
								// if you need access to key you need to pass it a second time as something other than key
								index={key}
								details={this.state.fishes[key]}
								// pass addToOrder method as props to Fish component
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