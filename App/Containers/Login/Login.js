import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './LoginStyle'
import { Images } from 'App/Theme'
import LinearGradient from 'react-native-linear-gradient';
import { TextField } from 'react-native-material-textfield';


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
  }

  componentDidMount() {
    // this.props.fetchUser()
  }

  render() {
    return (
      <LinearGradient colors={['#3656c3', '#3598fb']} style={Style.container}>
        <View style={Style.logoContainer}>
          <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
        </View>
        <View style={Style.loginContainer}>
          <Text style={Style.loginText}>Login</Text>
          <Image style={Style.coin} source={Images.coin} resizeMode={'contain'} />
          <View style={Style.textField}>
            <TextField
              label='User Name'
              tintColor='#3598fb'
              baseColor='#86929d'
              value={this.state.userName}
              onChangeText={ (userName) => this.setState({ userName }) }
            />
            <TextField
              label='Password'
              tintColor='#3598fb'
              baseColor='#86929d'
              value={this.state.password}
              onChangeText={ (password) => this.setState({ password }) }
            />
          </View>
        </View>
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
