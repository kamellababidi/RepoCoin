import React, { Component } from 'react';
import { Text } from 'react-native'
import Style from './AnimatedNumberStyle'
import {
  View,
  NativeModules,
  LayoutAnimation
} from 'react-native';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class AnimatedNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {
            start: this.props.start,
            end: this.props.end
        }
    }

    componentDidMount() {
        // count every 10 msec
        if (this.state.start < this.state.end)
            this._interval = setInterval(() => {
                if (this.state.start < this.state.end) {
                    this.count()
                } else {
                    clearInterval(this._interval);
                }
            }, 10);
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }

    count() {
        LayoutAnimation.spring();
        this.setState({
          start: this.state.start += 1,
        })
    }

    render() {
        return (
            <View>
                <Text style={Style.number}>{this.state.start}</Text>
            </View>
        )
    }
}