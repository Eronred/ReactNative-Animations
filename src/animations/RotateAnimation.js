import React, {Component} from 'react';
import {
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {transform} from '@babel/core';

export default class RotateAnimation extends Component {
  state = {
    rotationAnimationState: new Animated.Value(0),
  };

  startAnimation = () => {
    Animated.timing(this.state.rotationAnimationState, {
      duration: 1000,
      toValue: 360,
    }).start();
  };
  render() {
    const interpolateanim = this.state.rotationAnimationState.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });
    const StylesforRotation = {
      transform: [
        {
          rotate: interpolateanim,
        },
      ],
    };
    return (
      <View style={this.styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[this.styles.boxShape, StylesforRotation]}>
            <Text> textInComponent </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
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
    boxShape: {
      width: 350,
      height: 800,
      borderRadius: 25,
      backgroundColor: '#FFC107',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
