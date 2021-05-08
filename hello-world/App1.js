import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import styles from "./styles.js";
import {StyleSheet} from 'react-native';


export default class App1 extends Component {
  const  = 'blue';
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.SquareShape, {backgroundColor: 'red'},]}/>
      </View>
      );
  }
}