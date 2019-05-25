import React from 'react'
import { Text, View, Image, ImageBackground, Animated, NativeModules, LayoutAnimation, StatusBar } from 'react-native'
import styles from './SplashScreenStyle'
import { Images } from 'App/Theme'
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
export default class SplashScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      logoFade: 0,
      spinSpiner: 0,
      w: 25,
      h: 25,
      sniperW: 25,
      sniperH: 25,
      rW: 12.5,
      rH: 12.5,
    }
  }

  componentWillMount() {
    this._logoVisibility = new Animated.Value(this.state.logoFade);
    this.spinSpiner = new Animated.Value(this.state.spinSpiner);
  }

  componentDidMount() {
    const { navigate } = this.props.navigation;
    // Fade in logo
    this.setState({
      logoFade: 1
    })
    // // splashScreen time is 5 sec
    this.timeOut = setTimeout(() => {
      clearInterval(this._interval);
      clearTimeout(this.timeOut);
      navigate('Login');
    }, 5000)
    
    // LayoutAnimation.spring();
    // setting fade timout
    Animated.timing(this._logoVisibility, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,      
    }).start()

    // setting spin timout
    Animated.timing(this.spinSpiner, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,      
    }).start()

    // enlarg logo every 0.5 sec
    this._interval = setInterval(() => {
      if (this.state.w < 150)
        this.enLarg()
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
    clearTimeout(this.timeOut)
  }

  enLarg() {
    LayoutAnimation.spring();
    let enlargFactor = 25
    this.setState({
      w: this.state.w += enlargFactor,
      h: this.state.h += enlargFactor,
      sniperW: this.state.sniperW += enlargFactor,
      sniperH: this.state.sniperH += enlargFactor,
      rW: this.state.rW += enlargFactor / 2,
      rH: this.state.rH += enlargFactor / 2,
    })
  }

  render() {
    const spin = this.spinSpiner.interpolate({
      inputRange: [0, 1],
      outputRange: ['360deg', '0deg']
    })
    return (
      <ImageBackground source={Images.background} style={styles.container}>
        <StatusBar backgroundColor="#7885f9" barStyle="light-content" />
        <Animated.View style={[ {width: this.state.w, height: this.state.h, opacity: this._logoVisibility}]}>
          <Animated.Image style={[styles.spiner, {width: this.state.sniperW, height: this.state.sniperH, transform: [{rotate: spin}]}]} source={Images.sniper} resizeMode={'contain'} />
          <View style={styles.rContainer}>
            <Image style={[styles.r ,{width: this.state.rW, height: this.state.rH}]} source={Images.r} resizeMode={'contain'} />
          </View>
        </Animated.View>
      </ImageBackground>
    )
  }
}
