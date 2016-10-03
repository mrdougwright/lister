'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView
} from 'react-native';

import dateGenerator from './dateBlockGenerator.js';
const defaultList = dateGenerator("20161004", "20171004");

import store from 'react-native-simple-store';
// https://www.npmjs.com/package/react-native-simple-store

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  }
});

let STORAGE_KEY = "ListerApp:key";


class ListPage extends Component {
  state = {
    dateList: [],
    messages: [],
  };

  componentDidMount() {
    this._loadInitialState().done();
  }

  render() {
    return (
      <ScrollView>
        <Text>Messages:</Text>
        {this.state.messages.map((m) => <Text key={m}>{m}</Text>)}
        {
          this.state.dateList.map((item, index) => {
            return (
              <TouchableHighlight onPress={ () => {alert("hi")} } key={index}>
                <View>
                  <Text>{item.date}</Text>
                  <Text>{item.person}</Text>
                </View>
              </TouchableHighlight>
            )
          })
        }
      </ScrollView>
    );
  }

  _loadInitialState = async () => {
    try {
      // store.delete(STORAGE_KEY)  // to reset cache local storage key
      var dateItems   = await store.get(STORAGE_KEY);
      var initialList = await defaultList;

      if (dateItems !== null){
        this.setState({dateList: dateItems});
        this._appendMessage('Recovered saved list from disk.');
      } else {
        store.save(STORAGE_KEY, initialList);
        this.setState({dateList: defaultList});
        this._appendMessage('Initialized with new list.');
      }
    } catch (error) {
      this._appendMessage('AsyncStorage error: ' + error.message);
    }
  };

  _appendMessage = (message) => {
    this.setState({messages: this.state.messages.concat(message)});
  };
}

module.exports = ListPage;
