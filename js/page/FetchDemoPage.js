/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {connect} from "react-redux";
import NavigationUtil from '../navigator/NavigationUtil';


type Props = {};
export default class FetchDemoPage extends Component<Props> {

  constructor(props) {
    super(props);
    console.log(NavigationUtil.navigation);
    this.state = {
      showText: '',
    }
  }

  loadData() {
    //https://api.github.com/search/repositories?q=topic:ruby+topic:rails
    let url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
    fetch(url)
      .then(response => response.text())
      .then(responseText => {
        this.setState({
          showText: responseText,
        })
      })

  }

  loadData2() {
    //https://api.github.com/search/repositories?q=topic:ruby+topic:rails
    let url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw new Error('网络请求失败');
      })
      .then(responseText => {
        this.setState({
          showText: responseText,
        })
      })
      .catch(error => {
        this.setState({
          showText: error.toString(),
        })
      })

  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>网络请求</Text>
        <TextInput style={styles.input} onChangeText={text => {
          this.searchKey = text;
        }}
        />
        <Button title={'获取数据'} onPress={() => {
          this.loadData2();
        }}/>
        <Text style={styles.welcome}>{this.state.showText}</Text>
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
