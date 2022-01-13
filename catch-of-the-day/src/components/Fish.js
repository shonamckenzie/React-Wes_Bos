import React from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from "../helpers"

class Fish extends React.Component {
	static propTypes = {
		details: PropTypes.shape({
			image: PropTypes.string,
			name: PropTypes.string,
			desc: PropTypes.string,
			status: PropTypes.string,
			price: PropTypes.number
		}),
		addToOrder: PropTypes.func
	}
	render() {
		// use destructuring to set multiple variables in one shot
		const {image, name, price, desc, status} = this.props.details;
		const isAvailable = status === 'available';
		return <li className="menu-fish">
			{/* <img src={this.props.details.image} alt={this.props.details.name} /> instead of typing long hand we can create shorter variables */}
			<img src={image} alt={name} />
			<h3 className="fish-name">
				{name}
				<span className="price">{formatPrice(price)}</span>
			</h3>
			<p>{desc}</p>
			<button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
				{/* lets do some JS */}
				{isAvailable ? 'Add to Order' : 'Sold Out'}
			</button>
		</li>
	}
}

export default Fish;