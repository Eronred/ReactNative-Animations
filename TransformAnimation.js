/* eslint-disable no-undef */
import React, {Component} from 'react';
import {
  Text,
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export default class TransformAnimation extends Component {
  state = {
    transformAnimation: new Animated.Value(0),
  };

  startTranformAnimation = () => {
    Animated.timing(this.state.transformAnimation, {
      toValue: 200,
      duration: 1000,
    }).start();
  };

  render() {
    const animatedStylesTransform = {
      transformAnim: [
        {
          translateY: this.state.transformAnimation,
        },
      ],
    };
    return (
      <View style={this.styles.container}>
        <TouchableWithoutFeedback onPress={this.startTranformAnimation}>
          <Animated.View style={[this.styles.myBox, animatedStylesTransform]}>
            <Text>Opacity me</Text>
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
    myBox: {
      width: 200,
      height: 200,
      backgroundColor: '#FFC107',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
