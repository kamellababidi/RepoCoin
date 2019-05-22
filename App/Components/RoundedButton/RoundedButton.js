import React, { Component } from 'react';
import { Text } from 'react-native'
import Style from './RoundedButtonStyle'
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Platform,
  TextInput
} from 'react-native';


export default class RoundedButton extends Component {
    render() {
        return (
            <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 1, y: 1.0}} colors={['#3656c3', '#3598fb']} style={[ Style.container ,{ width: this.props.width, height: this.props.height } ]}>
                <Text style={Style.buttText}>{this.props.text}</Text>
            </LinearGradient>
        )
    }
}