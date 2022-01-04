import React from 'react'

// stateless functional component - if you're only passing in data(props) and returning some jsx
const Header = (props) => {
	return (
		<header className="top">
			<h1>
				Catch
				<span className="ofThe">
					<span className="of">Of</span>
					<span className="the">The</span>
				</span>
				Day
			</h1>
			<h3 className="tagline">
				{/* get tagline from App.js */}
				<span>{props.tagline}</span>
			</h3>
		</header>
	)
}

// class Header extends React.Component {
// 	render() {
// 		return (
// 			<header className="top">
// 				<h1>
// 					Catch
// 					<span className="ofThe">
// 						<span className="of">Of</span>
// 						<span className="the">The</span>
// 					</span>
// 					Day
// 				</h1>
// 				<h3 className="tagline">
					// this = component instance, whatever got passed in when it was used (from App.js)
					// props = object inside of the component
// 					<span>{this.props.tagline}</span>
// 				</h3>
// 			</header>
// 		)
// 	}
// }

export default Header