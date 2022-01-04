import React from 'react';
import { getFunName } from '../helpers';

// each component will be a class, each class needs at least 1 method - render determines what elements to put on the page
class StorePicker extends React.Component {
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }

	// ref allows us to reference an actual dom node in the page
	// create empty ref
	myInput = React.createRef();

	// goToStore(event) {
	// 	// Stop form from submitting
	// 	event.preventDefault();

	// 	// get text from input - don't touch the DOM is a rule with React
	// 	// any methods we make inside a component are not bound by default so can't use this keyword to reference instance.
	// 	// We either need to create a constructor and bind each method or change the method to be a property instead using arrow function syntax
	// 	console.log(this);

	// 	// change page to /store/whatever-they-entered
	// }

	goToStore = (event) => {
		// Stop form from submitting
		event.preventDefault();

		// get text from input - don't touch the DOM is a rule with React
		// any custom methods we make inside a component are not bound by default so can't use this keyword to reference instance.
		// We either need to create a constructor and bind each method(not best if you have lots of methods) or change the method to be a property instead using arrow function syntax
		// properties will be bound to the instance rather than nothing
		const storeName = this.myInput.current.value;

		// change page to /store/whatever-they-entered
		// use push state
		this.props.history.push(`/store/${storeName}`)
	}

	render() {
		return (
			<>
				<form action="" className="store-selector" onSubmit={this.goToStore}>
					<h2>Please Enter A Store</h2>
					<input
						type="text"
						// surface input on the component so we can go ahead and use it
						ref={this.myInput}
						required placeholder="Store Name"
						defaultValue={ getFunName() }
					/>
					<button type="submit">Visit Store</button>
				</form>
			</>
		)
	}
}

export default StorePicker;