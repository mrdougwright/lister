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
import contactList from './tempContactData.json'

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
          contactList.contacts.map((item, index) => {
            return (
              <View>
                <Text>{item.givenName} {item.familyName}</Text>
                <Text> {item.phoneNumbers[0].number}</Text>
              </View>
            )
          })
        }
      </View>
    );
  }
}

module.exports = ListPage;
