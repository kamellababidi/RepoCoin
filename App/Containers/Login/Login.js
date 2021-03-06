import React from 'react'
import { Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './LoginStyle'
import { Images } from 'App/Theme'
import LinearGradient from 'react-native-linear-gradient';
import { TextField } from 'react-native-material-textfield';
import RoundedButton from 'App/Components/RoundedButton/RoundedButton'
import RoundedButtonWithImage from 'App/Components/RoundedButtonWithImage/RoundedButtonWithImage'
var {height, width} = Dimensions.get('window');


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
  }

  componentDidMount() {
    console.log(width, "kkkkkkkk")
    // this.props.fetchUser()
  }

  signIn = () => {
    this.props.navigation.navigate('TabNavigator')
  }

  render() {
    return (
      <LinearGradient colors={['#3656c3', '#3598fb']} style={Style.container}>
        <ScrollView keyboardShouldPersistTaps='always'>
          <View style={Style.logoContainer}>
            <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
          </View>
          <View style={Style.loginContainer}>
            <Text style={Style.loginText}>Login</Text>
            <Image style={Style.coin} source={Images.coin} resizeMode={'contain'} />
            <View style={Style.textFieldContainer}>
              <TextField
                label='User Name'
                tintColor='#3598fb'
                baseColor='#86929d'
                value={this.state.userName}
                labelHeight={20}
                onChangeText={ (userName) => this.setState({ userName }) }
              />
              <TextField
                label='Password'
                tintColor='#3598fb'
                baseColor='#86929d'
                secureTextEntry={true}
                value={this.state.password}
                labelHeight={20}
                onChangeText={ (password) => this.setState({ password }) }
              />
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgetPassword')}>
              <Text style={Style.forgetPasswordText}>Forget Password?</Text>
            </TouchableOpacity>
            <RoundedButton
              width={'75%'}
              height={'8.5%'}
              text={'SINGN IN'}
              onPress={this.signIn}
            />
            <Text style={Style.orText}>or</Text>
            <View style={Style.socialMediaContainer}>
              <RoundedButtonWithImage 
                width={width >= 375 ? '26%': '24%' }
                height={'100%'}
                source={Images.google}
              />
              <RoundedButtonWithImage 
                width={width >= 375 ? '26%': '24%' }
                height={'100%'}
                source={Images.facebook}
              />
              <RoundedButtonWithImage 
                width={width >= 375 ? '26%': '24%' }
                height={'100%'}
                source={Images.instagram}
              />
            </View>
            <View style={Style.signUpContainer}>
              <Text style={Style.accountText}>Don't Have an Account?   </Text>
              <TouchableOpacity>
                <Text style={Style.signUpText}>Sign up now </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    )
  }
}

Login.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
