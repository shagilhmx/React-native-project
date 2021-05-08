import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import styles from "./styles.js";


export default class App3 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.SquareShape, {backgroundColor: 'green'},]} />
      </View>
      );
  }
}