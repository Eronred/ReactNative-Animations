import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Text,
} from 'react-native';
export default class ScaleAnimation extends Component {
  state = {
    animationScale: new Animated.Value(0.5),
  };

  startScaleAnimation = () => {
    Animated.timing(this.state.animationScale, {
      duration: 300,
      toValue: 2,
    }).start();
  };
  render() {
    const animatedStylesScale = {
      transform: [
        {
          scaleX: this.state.animationScale,
        },
      ],
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startScaleAnimation}>
          <Animated.View style={[styles.myBox, animatedStylesScale]}>
            <Text>Scale me</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
