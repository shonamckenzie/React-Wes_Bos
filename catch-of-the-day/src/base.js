// rebase allows you to mirror state to firebase
import Rebase from 're-base';
import firebase from 'firebase';

// create firebase app
const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDck0WkWEMP7EeEhAgDIk7zp_IFhWKKu4M",
	authDomain: "catch-of-the-day-scotland.firebaseapp.com",
	databaseURL: "https://catch-of-the-day-scotland-default-rtdb.europe-west1.firebasedatabase.app"
});

// create rebase binding
const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;