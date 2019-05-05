/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, AsyncStorage} from 'react-native';
import {connect} from "react-redux";
import NavigationUtil from '../navigator/NavigationUtil';


type Props = {};

export default class AsyncStorageDemoPage extends Component<Props> {

  constructor(props) {
    super(props);
    console.log(NavigationUtil.navigation);
    this.state = {
      showText: '',
    }
    this.favoriteKey = 'favoriteKey';
  }


  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>网络请求</Text>
        <TextInput style={styles.input} onChangeText={text => {
          this.value = text;
        }}
        />
        <Button title={'获取数据'} onPress={() => {
          this.loadData2();
        }}/>
        <Text style={styles.welcome}>{this.state.showText}</Text>
      </View>
    );
  }


  //保存数据
  save(key, vaule, callback) {
    AsyncStorage.setItem(key, vaule, (error, result) => {
      if (!error) {//更新Favorite的key
        this.updateKeys(key, true);
      }
    });
  }

  /** * 更新Favorite key集合 * @param isAdd true 添加,false 删除 * **/
  updateKeys(key, isAdd) {
    AsyncStorage.getItem(this.favoriteKey, (error, result) => {
      if (!error) {
        var favoriteKeys = [];
        if (result) {
          favoriteKeys = JSON.parse(result);
        }
        var index = favoriteKeys.indexOf(key);
        if (isAdd) {
          if (index === -1) favoriteKeys.push(key);
        } else {
          if (index !== -1) favoriteKeys.splice(index, 1);
        }
        AsyncStorage.setItem(this.favoriteKey, JSON.stringify(favoriteKeys));
      }
    });
  }


  /**
   * 获取
   * @param key
   * @returns {Promise<T>|*|Promise.<TResult>}
   */

  get(key) {
    return AsyncStorage.getItem(key).then((value) => {
      const jsonValue = JSON.parse(value);
      return jsonValue;
    });
  }


  /**
   * 保存
   * @param key
   * @param value
   * @returns {*}
   */
  save(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }


  /**
   * 更新
   * @param key
   * @param value
   * @returns {Promise<T>|Promise.<TResult>}
   */
  update(key, value) {
    return DeviceStorage.get(key).then((item) => {
      value = typeof value === 'string' ? value : Object.assign({}, item, value);
      return AsyncStorage.setItem(key, JSON.stringify(value));
    });
  }


  /**
   * 更新
   * @param key
   * @returns {*}
   */
  delete(key) {
    return AsyncStorage.removeItem(key);
  }
}


// const mapStateToProps = state => ({});
//
// export default connect(mapStateToProps)(MyPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  input: {
    height: 50,
    borderColor: 'red',
    borderWidth: 1
  }
});
