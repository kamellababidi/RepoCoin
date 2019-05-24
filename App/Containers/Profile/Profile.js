import React from 'react'
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './ProfileStyle'
import { Images } from 'App/Theme'
import ProfileHeader from 'App/Components/ProfileHeader/ProfileHeader'


class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ImageBackground style={Style.container} source={Images.profileBackground}>
        <ProfileHeader/>
        <View style={Style.levelContainer} source={Images.levelBackground}>
            <Image style={Style.levelImage} source={Images.levelBackground} resizeMode={'contain'} />
        </View>
      </ImageBackground>
    )
  }
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
)(Profile)
