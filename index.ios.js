'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView, ListView,
  NavigatorIOS, TouchableHighlight
} from 'react-native';
var ListPage = require('./ListPage');

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
        }}/>
    );
  }
}

AppRegistry.registerComponent('lister', () => listerApp);
