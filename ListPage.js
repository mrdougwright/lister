'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView,
  NavigatorIOS
} from 'react-native';

import dateGenerator from './dateBlockGenerator.js';
const dateList = dateGenerator("20161004", "20171004");

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  }
});

class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      name: 'testing'
    };
  }

  render() {
    return (
      <ScrollView>
        {
          dateList.map((date, index) => {
            return (
              <View key={index}>
                <Text>Name Here: </Text>
                <Text>{date}</Text>
              </View>
            )
          })
        }
      </ScrollView>
    );
  }
}

module.exports = ListPage;
