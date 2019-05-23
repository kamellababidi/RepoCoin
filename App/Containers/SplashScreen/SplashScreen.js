import React from 'react'
import { Text, View, Image, ImageBackground, Animated } from 'react-native'
import styles from './SplashScreenStyle'
import { Images } from 'App/Theme'

export default class SplashScreen extends React.Component {


  componentDidMount(){
    const { navigate } = this.props.navigation;
    setTimeout(() => {
      navigate('Login')
    }, 4000)
  }
  render() {
    return (
      <ImageBackground source={Images.background} style={styles.container}>
        <Image style={styles.logo} source={Images.logo} resizeMode={'contain'} />
      </ImageBackground>
    )
  }
}
