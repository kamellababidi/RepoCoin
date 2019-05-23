import React from 'react'
import { Text, View, Image, ImageBackground, Animated, NativeModules, LayoutAnimation, } from 'react-native'
import styles from './SplashScreenStyle'
import { Images } from 'App/Theme'
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
export default class SplashScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      w: 50,
      h: 50,
      sniperW: 50,
      sniperH: 50,
      rW: 25,
      rH: 25,
    }
  }

  componentDidMount() {
    const { navigate } = this.props.navigation;
    // // splashScreen time is 5 sec
    // setTimeout(() => {
    //   navigate('Login')
    //   clearInterval(this._interval);
    // }, 5000)

    // // enlarg logo every 0.5 sec
    this._interval = setInterval(() => {
      if (this.state.w < 150)
        this.enLarg()
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  enLarg() {
    LayoutAnimation.spring();
    this.setState({
      w: this.state.w += 25,
      h: this.state.h += 25,
      sniperW: this.state.sniperW += 25,
      sniperH: this.state.sniperH += 25,
      rW: this.state.rW += 12.5,
      rH: this.state.rH += 12.5,
    })
  }

  routate() {
    spinValue = new Animated.Value(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear
      }
    ).start()
  }

  render() {
    // const spin = this.spinValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['0deg', '360deg']
    // })
    return (
      <ImageBackground source={Images.background} style={styles.container}>
        <View style={{width: this.state.w, height: this.state.h}}>
          <Image style={[styles.spiner, {width: this.state.sniperW, height: this.state.sniperH}]} source={Images.sniper} resizeMode={'contain'} />
          <View style={styles.rContainer}>
            <Image style={[styles.r ,{width: this.state.rW, height: this.state.rH}]} source={Images.r} resizeMode={'contain'} />
          </View>
        </View>
      </ImageBackground>
    )
  }
}
