import MainPage from './models/MainPage';
import LoginPage from './models/LoginPage';
import HomePage from './models/HomePage'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator({
    Main: MainPage,
    Login: LoginPage,
    Home: HomePage,
  })
);

export default Routes;