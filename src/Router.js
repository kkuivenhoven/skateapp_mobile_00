import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SkateList from './components/SkateList';


const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Please Login" initial />
				</Scene>

				<Scene key="main">
					<Scene key="skateList" component={SkateList} title="SkateSpots" initial />
				</Scene>

			</Scene>
		</Router>
	);
};


export default RouterComponent;
