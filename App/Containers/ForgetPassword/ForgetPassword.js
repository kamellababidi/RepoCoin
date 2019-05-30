import React from 'react'
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import Style from './ForgetPasswordStyle'
import LinearGradient from 'react-native-linear-gradient';
import { Images } from 'App/Theme'
import { TextField } from 'react-native-material-textfield';
import RoundedButton from 'App/Components/RoundedButton/RoundedButton'


class ForgetPassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        email: ''
    }
  }

  submit = () => {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <LinearGradient colors={['#3656c3', '#3598fb']} style={Style.container}>
        <View style={Style.logoContainer}>
            <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
        </View>
        <View style={Style.ForgetPasswordContainer}>
            <View style={Style.textContainer}>
                <Text style={Style.ForgetPasswordText}>Forgot my password</Text>
                <Text style={Style.enterEmailText}>Please enter your email address </Text>
            </View>
            <View style={Style.textFieldContainer}>
                <TextField
                    label='Email'
                    tintColor='#3598fb'
                    baseColor='#86929d'
                    value={this.state.email}
                    labelHeight={25}
                    onChangeText={ (email) => this.setState({ email }) }
              />   
            </View>
            <RoundedButton
              width={'85%'}
              height={'12%'}
              text={'SUBMIT'}
              onPress={this.submit}
            />
        </View>
      </LinearGradient>
    )
  }
}

ForgetPassword.propTypes = {

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgetPassword)
