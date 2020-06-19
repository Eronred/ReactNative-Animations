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
    animation: new Animated.Value(0),
  };

  startTranformAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1000,
    }).start();
  };

  render() {
    const animatedStylesTransform = {
      transform: [
        {
          translateY: this.state.animation,
        },
      ],
    };
    return (
      <View style={this.styles.container}>
        <TouchableWithoutFeedback onPress={this.startTranformAnimation}>
          <Animated.View style={[this.styles.myBox, animatedStylesTransform]}>
            <Text>Translate me +300Y</Text>
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
