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
  NavigatorIOS, TouchableHighlight
} from 'react-native';

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


class HelloWorld extends Component {
  render() {
    return (
      <Text style={styles.text}>Hello World (Again)</Text>
    )
  }
}

class listerApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Lister',
          component: HelloWorld,
        }}/>
    );
  }
}

AppRegistry.registerComponent('lister', () => listerApp);
