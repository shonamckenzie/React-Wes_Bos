import React from 'react';

// each component will be a class, each class needs at least 1 method - render determines what elements to put on the page
class StorePicker extends React.Component {
	render() {
		return (
			<>
				<form action="" className="store-selector">
					<h2>Please Enter A Store</h2>
					<input type="text" required placeholder="Store Name" />
					<button type="submit">Visit Store</button>
				</form>
			</>
		)
	}
}

export default StorePicker;