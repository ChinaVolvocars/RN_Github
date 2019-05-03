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
import {connect} from 'react-redux';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

export const rootCom = 'Init';

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


export const RootNavigator = createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator,
}, {
  initialRouteName: 'Init',
  navigationOptions: {
    header: null,
  }
});

// const middleware = createReactNavigationReduxMiddleware(
//   state => state.nav,
// );

// const App = createReduxContainer(RootNavigator);
// const mapStateToProps = (state) => ({
//   state: state.nav,
// });
// export default connect(mapStateToProps)(App);

// const store = createStore(
//   appReducer,
//   applyMiddleware(middleware),
// );

/** * 1.初始化react-navigation与redux的中间件， * 该方法的一个很大的作用就是为reduxifyNavigator的key设置actionSubscribers(行为订阅者) * 设置订阅者@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L29 * 检测订阅者是否存在@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L97 * @type {Middleware} */
export const middleware = createReactNavigationReduxMiddleware(
  // 'root',
  state => state.nav
);

/** * 2.将根导航器组件传递给 reduxifyNavigator 函数, * 并返回一个将navigation state 和 dispatch 函数作为 props的新组件； * 注意：要在createReactNavigationReduxMiddleware之后执行 */
const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

/** * State到Props的映射关系 * @param state */
const mapStateToProps = state => ({
  state: state.nav,//v2
});
/** * 3.连接 React 组件与 Redux store */
export default connect(mapStateToProps)(AppWithNavigationState);