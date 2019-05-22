import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
    container: {
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 0.2,
        borderColor: '#e5e7ea',
        borderTopWidth: 0,
        shadowColor: '#e5e7ea',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    image: {
        width: '40%',
        height: '40%'
    }
})
