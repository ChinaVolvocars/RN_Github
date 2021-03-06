/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Platform, RefreshControl, StyleSheet, Text, View, FlatList} from 'react-native';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import NavigationUtil from "../navigator/NavigationUtil";
import {connect} from 'react-redux';
import actions from '../action/index'


const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stats';
const THEME_COLOR = 'red';

type Props = {};
export default class PopularPage extends Component<Props> {

  constructor(props) {
    super(props);
    this.tabNames = ['Java', 'Android', 'Flutter', 'RN', 'iOS', 'PHP'];

    console.log('--------PopularPage查看NavigationUtil.navigation--------');
    console.log(NavigationUtil.navigation);
  }

  _genTabs() {
    const tabs = {};
    this.tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        //给Tab 传值
        screen: props => <PopularTabPage {...props} tabLabel={item}/>,
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

  constructor(props) {
    super(props);
    const {tabLabel} = this.props;
    this.storeName = tabLabel;
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const {onLoadPopularData} = this.props;
    const url = this.genFetchUrl(this.storeName);
    onLoadPopularData(this.storeName, url);
  }

  genFetchUrl(key) {
    return URL + key + QUERY_STR;
  }

  renderItem(data) {
    const item = data.item;
    return <View style={{marginBottom: 10}}>
      <Text style={{backgroundColor: '#faa'}}>
        {JSON.stringify(item)}
      </Text>
      
    </View>
  }

  render() {
    const {popular} = this.props;
    let store = popular[this.storeName];
    if (!store) {
      store = {
        items: [],
        isLoading: false
      }
    }
    return (
      <View style={styles.container}>

        <FlatList
          keyExtractor={item => "" + item.id}
          data={store.items}
          renderItem={data => this.renderItem(data)}

          refreshControl={
            <RefreshControl
              title={'loading'}
              titleColor={THEME_COLOR}
              colors={[THEME_COLOR]}
              refreshing={store.isLoading}
              onRefresh={() => this.loadData()}
              tintColor={THEME_COLOR}
            />
          }
        />

      </View>
    );
  }
}

const mapStateToProps = state => ({
  popular: state.popular
});
const mapDispatchToProps = dispatch => ({
  onLoadPopularData: (storeName, url) => dispatch(actions.onLoadPopularData(storeName, url))
});

const PopularTabPage = connect(mapStateToProps, mapDispatchToProps)(PopularTab);


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
