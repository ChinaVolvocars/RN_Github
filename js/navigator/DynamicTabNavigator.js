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
  createAppContainer,BottomTabBar
} from 'react-navigation';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import DetailPage from '../page/DetailPage';
import PopularPage from "../page/PopularPage";
import TrendingPage from "../page/TrendingPage";
import FavoritePage from "../page/FavoritePage";
import MyPage from "../page/MyPage";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NavigationUtil from "./NavigationUtil";

type Props = {};


const TABS = {
  PopularPage: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
          name={'ios-home'}
          size={26}
          style={{color: tintColor}}
        />
      ),
    }
  },

  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
          name={'ios-people'}
          size={26}
          style={{color: tintColor}}
        />
      ),
    }
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
          name={'ios-chatboxes'}
          size={26}
          style={{color: tintColor}}
        />
      ),
    }
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
          name={'ios-add-circle'}
          size={26}
          style={{color: tintColor}}
        />
      ),
    }
  }
}


export default class DynamicTabNavigator extends Component<Props> {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  _tabNavigator() {
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
    const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
    PopularPage.navigationOptions.tabBarLabel = '最新';//动态修改名字
    return createBottomTabNavigator(tabs, {
      tabBarComponent: TabBarComponent,
      tabBarPosition: {
        activeTintColor: Platform.OS === 'ios' ? '#E91E63' : '#FFF'
      }
    });
  }

  render() {
    NavigationUtil.navigation = this.props.navigation;
    const Tab = this._tabNavigator();
    const BottomTabNavigationContainer = createAppContainer(Tab);
    return <BottomTabNavigationContainer/>;
  }
}

class TabBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime(),
    }
  }
  render() {
    const {routes, index} = this.props.navigation.state;
    if (routes[index].params) {
      const {theme} = routes[index].params;
      if (theme && theme.updateTime > this.theme.updateTime) {
        this.theme = theme;
      }
    }
    return <BottomTabBar
      {...this.props}
      activeTintColor={this.theme.tintColor || this.props.activeTintColor}
    />
  }
}


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
