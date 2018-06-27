import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
	componentWillMount(){
		const config = {
			apiKey: "AIzaSyCWix2KKH9YkNvsRcssd37LLM8MianD38c",
			authDomain: "skate-app4all.firebaseapp.com",
			databaseURL: "https://skate-app4all.firebaseio.com",
			projectId: "skate-app4all",
			storageBucket: "skate-app4all.appspot.com",
			messagingSenderId: "326499768680"
		};
		firebase.initializeApp(config);
	}		

	render(){
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
