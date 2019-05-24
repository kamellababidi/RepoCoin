import React, { Component } from 'react';
import { Text } from 'react-native'
import Style from './ProfieHeaderStyle'
import { Images } from 'App/Theme'
import { Icon } from 'react-native-elements'
import {
  View,
  Platform,
  Image,
  TouchableOpacity
} from 'react-native';
import {SafeAreaView} from 'react-navigation';

export default class ProfileHeader extends Component {
    render() {
        return (
            <SafeAreaView style={ Style.container }>
                <View style={Style.topStyle}>
                    <Icon name='reorder' size={25} color='#ffff'/>
                    <Image style={Style.profileImage} source={Images.profile} resizeMode={'contain'} />
                    <Icon
                        name='notifications'
                        type='material'
                        color='#ffff'
                    />
                </View>
                <Text style={Style.userName}>Mike Smith</Text>
            </SafeAreaView>
        )
    }
}