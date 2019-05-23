import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native'
import Style from './RoundedButtonWithImageStyle'
import { SocialIcon } from 'react-native-elements'

import {
  View,
} from 'react-native';


export default class RoundedButtonWithImage extends Component {
    render() {
        return (
            <TouchableOpacity style={[ Style.container ,{ width: this.props.width, height: this.props.height } ]}>
                <Image style={Style.image} source={this.props.source} resizeMode={'contain'} />
            </TouchableOpacity>
        )
    }
}