import React from 'react'
import PropTypes from 'prop-types'

import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'

class Inventory extends React.Component {
	static propTypes = {
		fish: PropTypes.array,
		updateFish: PropTypes.func,
		deleteFish: PropTypes.func,
		loadSampleFishes: PropTypes.func
	}
	render() {
		return (
		<div className="inventory">
			<h2>Inventory</h2>
			{Object.keys(this.props.fish).map(key => <EditFishForm 
				key={key}
				index={key}
				fish={this.props.fish[key]} 
				updateFish={this.props.updateFish}
				deleteFish={this.props.deleteFish}>
				</EditFishForm>)}
			<AddFishForm addFish={this.props.addFish}></AddFishForm>
			<button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
		</div>
		)
	}
}

export default Inventory