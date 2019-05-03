/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import {BottomTabBar} from 'react-navigation-tabs';

import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import FavoritePage from './FavoritePage';
import MyPage from './MyPage';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


type Props = {};
export default class HomePage extends Component<Props> {


  render() {
    // const Tab = this._TAB();
    // const BottomTabNavigationContainer = createAppContainer(Tab);
    return <DynamicTabNavigator/>;
  }
}

// class TabBarComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.theme = {
//       tintColor: props.activeTintColor,
//       updateTime: new Date().getTime(),
//     }
//   }
//
//   render() {
//     const {routes, index} = this.props.navigation.state;
//     if (routes[index].params) {
//       const {theme} = routes[index].params;
//       if (theme && theme.updateTime > this.theme.updateTime) {
//         this.theme = theme;
//       }
//     }
//
//     return <BottomTabBar
//       {...this.props}
//       activeTintColor={this.theme.tintColor || this.props.activeTintColor}
//     />
//   }
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
