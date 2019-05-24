
import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
  },
  levelContainer: {
      position: 'absolute',
      left: '5%',
      right: 0,
      bottom: 236,
      width: '90%',
      height: 79,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 10,
    //   borderWidth: 0.2,
    //   borderColor: '#e5e7ea',
    //   borderTopWidth: 0,
      shadowColor: '#e5e7ea',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.9,
      shadowRadius: 2,
  },
  levelImage: {
      width: 900,
      height: '100%'
  }
})
