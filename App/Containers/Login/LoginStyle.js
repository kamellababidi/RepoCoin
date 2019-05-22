import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
  },
  text: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  logoContainer: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '100%',
    height: '50%',
    marginTop: 15
  },
  loginContainer: {
    width: '90%',
    height: '75%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10
  },
  loginText: {
    ...Fonts.style.normal,
    textAlign: 'center',
    margin: 15,
    color: '#3589ee'
  },
  coin: {
    width: '50%',
    height: '30%',
    marginBottom: 10,
  },
  textField: {
    width: '75%',
    marginBottom: 10,
  }
})
