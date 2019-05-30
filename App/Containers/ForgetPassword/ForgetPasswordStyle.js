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
    marginBottom: height / 60
  },
  logo: {
    width: '100%',
    height: '70%',
    marginTop: Platform.OS === 'android' ? height / 50 : height / 30
  },
  ForgetPasswordContainer: {
    width: '90%',
    height: height / 1.75,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10, 
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ForgetPasswordText: {
      ...Fonts.style.normal,
      color: '#3589ee',
      marginBottom: height / 50
  },
  enterEmailText: {
      fontSize: 16,
      color: 'rgba(35, 39, 53, 0.4)'
  },
  textFieldContainer: {
    width: '85%',
    height: '25%',
  },
})
