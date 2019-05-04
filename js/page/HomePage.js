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

import {BackHandler} from "react-native";
import {NavigationActions} from "react-navigation";
import {connect} from 'react-redux';
import NavigationUtil from "../navigator/NavigationUtil";

type Props = {};

class HomePage extends Component<Props> {


  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  /** * 处理 Android 中的物理返回键 * https://reactnavigation.org/docs/en/redux-integration.html#handling-the-hardware-back-button-in-android * @returns {boolean} */
  onBackPress = () => {
    const {dispatch, nav} = this.props;
    //if (nav.index === 0) {
    if (nav.routes[1].index === 0) {
      //如果RootNavigator中的MainNavigator的index为0，则不处理返回事件
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };


  render() {
    NavigationUtil.navigation = this.props.navigation;
    return <DynamicTabNavigator/>;
  }
}


const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(HomePage);

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
