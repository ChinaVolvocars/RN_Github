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
  createAppContainer, BottomTabBar
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

import {connect} from 'react-redux';

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


class DynamicTabNavigator extends Component<Props> {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  _tabNavigator() {
    if (this.Tabs) {
      return this.Tabs;
    }
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
    const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
    PopularPage.navigationOptions.tabBarLabel = '最热';//动态修改名字

    const BottomTabNavigator = createBottomTabNavigator(tabs, {
      tabBarComponent: props => {
        return <TabBarComponent theme={this.props.theme} {...props}/>
      },
      tabBarPosition: {
        activeTintColor: Platform.OS === 'ios' ? '#E91E63' : '#FFF'
      }
    })
    /**
     * createAppContainer 使用这个的时候一定要注意 不要放到render中，如果放入了会出现意想不到的效果
     __   _,--="=--,_   __
     /  \."    .-.    "./  \
     /  ,/  _   : :   _  \/` \
     \  `| /o\  :_:  /o\ |\__/
     `-'| :="~` _ `~"=: |
     \`     (_)     `/
     .-"-.   \      |      /   .-"-.
     .---{     }--|  /,.-'-.,\  |--{     }---.
     )  (_)_)_)  \_/`~-===-~`\_/  (_(_(_)  (
     (  Hello World                          )
     )                                     (
     '---------------------------------------'
     *
     * @type {NavigationContainer}
     */
    const BottomTabNavigationContainer = createAppContainer(BottomTabNavigator);
    this.Tabs = BottomTabNavigationContainer;
    return this.Tabs;

  }

  render() {
    const Tab = this._tabNavigator();
    return <Tab/>;
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
    // const {routes, index} = this.props.navigation.state;
    // if (routes[index].params) {
    //   const {theme} = routes[index].params;
    //   if (theme && theme.updateTime > this.theme.updateTime) {
    //     this.theme = theme;
    //   }
    // }
    return <BottomTabBar
      {...this.props}
      // activeTintColor={this.theme.tintColor || this.props.activeTintColor}
      activeTintColor={this.props.theme}
    />
  }
}

const mapStateToProps = state => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(DynamicTabNavigator);


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
