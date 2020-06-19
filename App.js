/* eslint-disable react/jsx-no-comment-textnodes */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import TransformAnimation from './src/animations/TransformAnimation';
import ScaleAnimation from './src/animations/ScaleAnimation';
import MultiAnimation from './src/animations/MultiAnimation';
import Interpolate from './src/animations/Interpolate';

export default class App extends Component {
  render() {
    return (
      <View style={this.styles.container}>
        /** * Just add animation component you want to use */
        <Interpolate />
      </View>
    );
  }
  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    myBox: {
      width: 200,
      height: 200,
      backgroundColor: '#FFC107',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
