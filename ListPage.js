'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Image
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
      message: 'london'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {
          dateList.map((item, index) => {
            return (<Text>{item}</Text>)
          })
        }
      </View>
    );
  }
}

module.exports = ListPage;
