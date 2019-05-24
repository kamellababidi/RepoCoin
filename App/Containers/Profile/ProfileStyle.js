
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
  },
  prgressBarContainer: {
      height: '40%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
  },
  insideCircle: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
  },
  percintageText: {
        ...Fonts.style.h1,
        fontWeight: 'bold',
        color: '#ffff'
  },
  completedText: {
    ...Fonts.style.medium,
    color: '#ffff'
  },
  counterContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  counter: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  discText: {
      ...Fonts.style.medium,
      color: '#000000',
      marginTop: 5
  }
})
