import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
} from 'react-native';

export default class Interpolate extends Component {
  state = {
    animationInterpolate: new Animated.Value(0),
  };

  startInterpolateAnimation = () => {
    Animated.timing(this.state.animationInterpolate, {
      duration: 1000,
      toValue: 1,
    }).start();
  };
  render() {
    const interpolate = this.state.animationInterpolate.interpolate({
      inputRange: [0, 1],
      outputRange: ['red', 'grey'],
    });
    const animationsStylesForInterpolate = {
      backgroundColor: interpolate,
    };
    return (
      <View style={this.styles.container}>
        <TouchableWithoutFeedback onPress={this.startInterpolateAnimation}>
          <Animated.View
            style={[this.styles.myBox, animationsStylesForInterpolate]}>
            <Text>Change color!</Text>
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
      borderRadius: 25,
    },
  });
}
