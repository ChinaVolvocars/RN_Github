/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './js/navigator/AppNavigator';
import {name as appName} from './app.json';
import WelcomePage from './js/page/WelcomePage';
import {createStackNavigator, createAppContainer} from 'react-navigation';
const appContainer = createAppContainer(AppNavigator);
AppRegistry.registerComponent(appName, () => appContainer);
