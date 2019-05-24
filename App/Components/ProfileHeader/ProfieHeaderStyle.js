import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
    container: {
        width: '90%',
        height: '20%',
        alignSelf: 'center',
    },
    topStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    profileImage: {
        width: 65,
        height: 65
    },
    userName: {
        ...Fonts.style.medium,
        textAlign: 'center',
        color: '#ffffff'
    }
})
