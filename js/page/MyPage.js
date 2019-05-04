/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {connect} from "react-redux";
import NavigationUtil from '../navigator/NavigationUtil';


type Props = {};
export default class MyPage extends Component<Props> {

  constructor(props) {
    super(props);
    console.log('--------MyPage查看NavigationUtil.navigation--------');
    console.log(NavigationUtil.navigation);
  }


  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>FavoritePage</Text>
        <Button title={'跳转详情测试物理返回按键'} onPress={() => {
          // NavigationUtil.goPage({
          //   navigation: this.props.navigation
          // }, 'DetailPage');
          
          console.log({...navigation});
          // NavigationUtil.goPage({
          //   navigation: this.props.navigation
          // }, 'WelcomePage');

          // this.props.navigation.navigate('Init');
          NavigationUtil.navigation.navigate('DetailPage');

        }}/>
      </View>
    );
  }
}

// const mapStateToProps = state => ({});
//
// export default connect(mapStateToProps)(MyPage);

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
