import React from 'react';
import PropTypes from 'prop-types'

class EditFishForm extends React.Component {
	static propTypes = {
		fish: PropTypes.shape({
			image: PropTypes.string,
			name: PropTypes.string,
			desc: PropTypes.string,
			status: PropTypes.string,
			price: PropTypes.number
		}),
		updateFish: PropTypes.func,
		deleteFish: PropTypes.func,
		index: PropTypes.string
	}
	
	handleChange = (event) => {
		// take copy of current fish
		const updatedFish = { ...this.props.fish, [event.currentTarget.name]: event.currentTarget.value }
		// call updateFish method to update state
		this.props.updateFish(this.props.index, updatedFish)
	}
	
	render() {
		return (
			<div className="fish-edit">
				<input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} placeholder="Fish Name"/>
				<input name="price" onChange={this.handleChange} value={this.props.fish.price} type="text" placeholder="Price"/>
				<select name="status" onChange={this.handleChange} value={this.props.fish.status}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} placeholder="Desc"/>
				<input name="image" onChange={this.handleChange} value={this.props.fish.image} type="text" placeholder="Image"/>
				<button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
			</div>
		)
	}
}

export default EditFishForm;