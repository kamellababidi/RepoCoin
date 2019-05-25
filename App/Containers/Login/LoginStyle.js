import { StyleSheet, Dimensions, Platform } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

var {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
  },
  logoContainer: {
    width: '100%',
    height: height / 9.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height / 80,
    marginBottom: height / 70
  },
  logo: {
    width: '100%',
    height: '70%',
    marginTop: Platform.OS === 'android' ? height / 50 : height / 30
  },
  loginContainer: {
    width: '90%',
    height: height / 1.25,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  loginText: {
    ...Fonts.style.normal,
    textAlign: 'center',
    margin: height / 50,
    color: '#3589ee'
  },
  coin: {
    width: '50%',
    height: '25%',
  },
  textFieldContainer: {
    width: '75%',
    height: '22%',
  },
  forgetPasswordText: {
    ...Fonts.style.small,
    color: '#4a90e2',
    margin: height / 50,
  },
  orText: {
    ...Fonts.style.medium,
    color: '#9b9b9b',
    margin: height / 50
  },
  socialMediaContainer: {
    width: '63%',
    height: '9%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height / 40
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountText: {
    ...Fonts.style.small,
    color: '#232735',
  },
  signUpText: {
    ...Fonts.style.small,
    color: '#4a90e2',
  },
})
