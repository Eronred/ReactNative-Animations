/* eslint-disable no-undef */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

export default class OpacityAnimation extends Component {
  state = {
    animation: new Animated.Value(1),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 500,
    }).start();
  };

  render() {
    const animatedStyles = {
      opacity: this.state.animation,
    };

    return (
      <View style={this.styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[this.styles.myBox, animatedStyles]}>
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
      borderRadius: 23,
    },
  });
}
