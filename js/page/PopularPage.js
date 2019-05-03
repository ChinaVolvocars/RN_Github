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
  createMaterialTopTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';


type Props = {};
export default class PopularPage extends Component<Props> {

  constructor(props) {
    super(props);
    this.tabNames = ['Java', 'Android', 'Flutter', 'RN', 'iOS', 'PHP',];
  }

  _genTabs() {
    const tabs = {};
    this.tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        //给Tab 传值
        screen: props => <PopularTab {...props} tabLabel={item}/>,
        navigationOptions: {
          title: item
        }
      }
    });

    return tabs;
  }


  render() {
    const TabNavigator = createMaterialTopTabNavigator(this._genTabs(), {
      tabBarOptions: {
        tabStyle: styles.tabStyle,
        upperCaseLabel: false,
        scrollEnabled: true,
        style: {
          backgroundColor: '#678',//TabBar 背景色
        },
        indicatorStyle: styles.indicatorStyle,
        labelStyle: styles.labelStyle,

      }
    });
    const TobTabAppContainer = createAppContainer(TabNavigator);
    return <TobTabAppContainer/>
  }
}


class PopularTab extends Component<Props> {
  render() {
    const {tabLabel} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{tabLabel}</Text>
      </View>
    );
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

  tabStyle: {
    minWidth: 50,

  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white',
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6,
  }
});
