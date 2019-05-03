import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage';
import PopularPage from "../page/PopularPage";
import TrendingPage from "../page/TrendingPage";
import FavoritePage from "../page/FavoritePage";
import MyPage from "../page/MyPage";
import {Platform} from "react-native";


export const AppBottomTabNavigator = createBottomTabNavigator(
  {
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
  }, {
    navigationOptions: {
      header: null,
    },
    tabBarPosition: {
      activeTintColor: Platform.OS === 'ios' ? '#E91E63' : '#FFF'
    }
  }
);

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null
    }
  }
});


const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null
    }
  },
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
      title: '详情',
    }
  }

});


export default createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator,
}, {
  initialRouteName: 'Init',
  navigationOptions: {
    header: null,
  }
});