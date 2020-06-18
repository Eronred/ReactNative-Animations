import React, {Component} from 'react';
import {View,StyleSheet} from 'react-native';
import OpacityAnimation from './OpacityAnimation';

export default class App extends Component {
  render() {
    return (
      <View style={this.styles.container}>
        <OpacityAnimation />
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
