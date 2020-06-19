import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
} from 'react-native';

export default class MultiAnimation extends Component {
  state = {
    animationWidth: new Animated.Value(50),
    animationHeight: new Animated.Value(50),
  };

  startScaleAnimation = () => {
    Animated.timing(this.state.animationWidth, {
      duration: 300,
      toValue: 400,
    }).start(() =>
      Animated.timing(this.state.animationHeight, {
        duration: 300,
        Value: 350,
      }).start(),
    );
  };
  render() {
    const animatedStylesScale = {
      width: this.state.animationWidth,
      height: this.state.animationHeight,
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startScaleAnimation}>
          <Animated.View style={[styles.myBox, animatedStylesScale]}>
            <Text>Translate me +300Y</Text>
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
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});
