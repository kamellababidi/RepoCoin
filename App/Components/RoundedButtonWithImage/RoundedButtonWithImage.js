import React, { Component } from 'react';
import { Image } from 'react-native'
import Style from './RoundedButtonWithImageStyle'
import {
  View,
} from 'react-native';


export default class RoundedButtonWithImage extends Component {
    render() {
        return (
            <View style={[ Style.container ,{ width: this.props.width, height: this.props.height } ]}>
                <Image style={Style.image} source={this.props.source} resizeMode={'contain'} />
            </View>
        )
    }
}