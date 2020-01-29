import MainPage from './models/MainPage';
import LoginPage from './models/LoginPage';
import HomePage from './models/HomePage'

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const TabNavigator = createAppContainer(
  createBottomTabNavigator({
    Home: HomePage,
    Login: LoginPage,
    Main: MainPage,
  })
);

export default TabNavigator;  








//import MainPage from './models/MainPage';
//import LoginPage from './models/LoginPage';
//import HomePage from './models/HomePage'

//import { createAppContainer } from 'react-navigation';
////import { createStackNavigator } from 'react-navigation-stack';
//import { createBottomTabNavigator } from 'react-navigation-tabs';
//const Routes = createAppContainer(
//  createBottomTabNavigator({
//    Main: MainPage,
    //Login: LoginPage,
    //Home: HomePage,
  //})
//);

//export default Routes;