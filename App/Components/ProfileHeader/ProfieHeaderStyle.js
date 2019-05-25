import { StyleSheet, Dimensions } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
var {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        width: '90%',
        height: '20%',
        alignSelf: 'center',
    },
    topStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: height / 70
    },
    profileImage: {
        width: 65,
        height: 65,
    },
    userName: {
        ...Fonts.style.medium,
        textAlign: 'center',
        color: '#ffffff'
    }
})
