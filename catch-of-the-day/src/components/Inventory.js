import React from 'react'
import firebase from 'firebase'
import PropTypes from 'prop-types'

import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'
import Login from './Login'
import base, { firebaseApp } from '../base'

class Inventory extends React.Component {
	static propTypes = {
		fish: PropTypes.object,
		updateFish: PropTypes.func,
		deleteFish: PropTypes.func,
		loadSampleFishes: PropTypes.func
	}
	
	state = {
		uid: null,
		owner: null
	}
	
	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.authHandler({ user })
			}
		})
	}
	
	authHandler = async (authData) => {
		// look up current store in firebase database
		// fetch returns a promise so if we want the store in the variable rather than the promise we use await
		const store = await base.fetch(this.props.storeId, {context: this})
		console.log(store)
		// claim if no owner
		if (!store.owner) {
			await base.post(`${this.props.storeId}/owner`, {
				data: authData.user.uid
			})
		}
		// set the state of inventory component to reflect current user
		this.setState({
			uid: authData.user.uid,
			owner: store.owner || authData.user.uid
		})
		console.log(authData);
	}
	
	authenticate = (provider) => {
		const authProvider = new firebase.auth[`${provider}AuthProvider`]()
		firebaseApp
			.auth()
			.signInWithPopup(authProvider)
			.then(this.authHandler)
	}
	
	logout = async () => {
		await firebase.auth().signOut()
		this.setState({ uid: null })
	}
	render() {
		const logout = <button onClick={this.logout}>Log Out!</button>
		// check if they are logged in
		if (!this.state.uid) {
			return <Login authenticate={this.authenticate}></Login>
		}
		// check if they are the not the owner if the store
		if (this.state.uid != this.state.owner) {
			return (
				<div>
					<p>Sorry you are not the owner!</p>
					{logout}
				</div>
			)
		}
		
		// they must be the owner, render the inventory
		return (
		<div className="inventory">
			<h2>Inventory</h2>
			{logout}
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