'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView, ListView,
  NavigatorIOS, TouchableHighlight
} from 'react-native';
const ListPage = require('./ListPage');
const SearchPage = require('./SearchPage');

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class listerApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Lister',
          component: ListPage,
          passProps: { myProp: 'fooey' },
        }}/>
    );
  }
}

AppRegistry.registerComponent('lister', () => listerApp);
