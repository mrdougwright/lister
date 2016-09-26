// 'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView, ListView,
  Navigator, TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

class listerApp extends Component {
  render() {
    return React.createElement(
      Text,
      {style: styles.text},
      "Yee Haw");
  }
}

AppRegistry.registerComponent('lister', () => listerApp);
